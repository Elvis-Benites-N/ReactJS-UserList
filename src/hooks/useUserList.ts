import { useEffect, useRef, useState } from "react";
import { fetchFilteredUsers, fetchUsers } from "../services/userService";
import { User } from "../types/User";
import { showDeleteConfirmationAlert, showDeleteSuccessAlert, showWarningAlert } from "../utils/sweetAlertUtils";
import useOutsideClick from "./useOutsideClick";
import useSort from "./useSort";

export default function useUserList() {
    const [showFilters, setShowFilters] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortConfig, setSortConfig] = useState<{ key: keyof User; direction: "asc" | "desc" } | null>(null);
    const [selectedAge, setSelectedAge] = useState("18");
    const [selectedGender, setSelectedGender] = useState("Female");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const [users, setUsers] = useState<User[]>([]);
    const [totalUsers, setTotalUsers] = useState(0);
    const [loading, setLoading] = useState(false);
    const [selectedUsers, setSelectedUsers] = useState<User[]>([]);
    const [showEditModal, setShowEditModal] = useState(false);
    const [userToEdit, setUserToEdit] = useState<User | null>(null);
    const ageDropdownRef = useRef<HTMLDivElement | null>(null);
    const genderDropdownRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!showFilters) {
            const loadUsers = async () => {
                setLoading(true);
                try {
                    const { users: fetchedUsers, total } = await fetchUsers(
                        currentPage,
                        itemsPerPage,
                        sortConfig?.key ?? 'firstName',
                        sortConfig?.direction ?? 'asc'
                    );
                    setUsers(fetchedUsers);
                    setTotalUsers(total);
                } catch (error) {
                    console.error("Failed to load users:", error);
                } finally {
                    setLoading(false);
                }
            };
    
            loadUsers();
        }
    }, [showFilters, currentPage, sortConfig]);
    
    useEffect(() => {
        if (showFilters) {
            const fetchUsersFiltered = async () => {
                setLoading(true);
                try {
                    const { users: filteredUsers, total } = await fetchFilteredUsers(selectedAge, selectedGender);
                    setUsers(filteredUsers);
                    setTotalUsers(total);
                } catch (error) {
                    console.error("Error fetching filtered users:", error);
                } finally {
                    setLoading(false);
                }
            };
    
            fetchUsersFiltered();
        }
    }, [showFilters, selectedAge, selectedGender]);

    const handleEdit = () => {
        if (selectedUsers.length === 1) {
            setUserToEdit(selectedUsers[0]);
            setShowEditModal(true);
        } else {
            showWarningAlert("Solo puedes editar un usuario a la vez.");
        }
    };

    const handleDelete = (deletedUsers: User[]) => {
        if (selectedUsers.length > 0) {
            const entity = selectedUsers.length === 1 ? selectedUsers[0].name : "los usuarios";
            showDeleteConfirmationAlert(entity).then((result) => {
                if (result.isConfirmed) {
                    setUsers((prevUsers) => prevUsers.filter((user) => !selectedUsers.includes(user)));
                    showDeleteSuccessAlert();
                    setSelectedUsers([]);
                    setTotalUsers(prevTotal => prevTotal - deletedUsers.length);
                    setUsers(prevUsers => prevUsers.filter(user => !deletedUsers.some(deleted => deleted.id === user.id)));
                }
            });

        } else {
            showWarningAlert("Por favor selecciona al menos un usuario para eliminar.");
        }
    };

    useOutsideClick(ageDropdownRef, () => setSelectedAge(""));
    useOutsideClick(genderDropdownRef, () => setSelectedGender(""));

    const handleSort = (key: keyof User) => {
        setSortConfig((prev) => ({
            key,
            direction: prev && prev.key === key && prev.direction === "asc" ? "desc" : "asc",
        }));
    };

    const filteredUsers = showFilters
        ? users.filter((user) => {
            const ageMatch = selectedAge ? user.age.toString() === selectedAge : true;
            const genderMatch = selectedGender ? user.gender.toLowerCase() === selectedGender.toLowerCase() : true;
            return ageMatch && genderMatch;
        })
        : users;

    const { sortedData: sortedUsers } = useSort(filteredUsers, sortConfig);
    const paginatedUsers = sortedUsers.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return {
        showFilters,
        setShowFilters,
        searchTerm,
        setSearchTerm,
        selectedAge,
        setSelectedAge,
        selectedGender,
        setSelectedGender,
        currentPage,
        setCurrentPage,
        users,
        setUsers,
        selectedUsers,
        setSelectedUsers,
        handleEdit,
        handleDelete,
        handleSort,
        sortConfig,
        filteredUsers,
        paginatedUsers,
        itemsPerPage,
        showEditModal,
        setShowEditModal,
        userToEdit,
        setUserToEdit,
        loading,
        totalUsers,
    };
}
