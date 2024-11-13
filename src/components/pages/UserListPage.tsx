import React from "react";
import useUserList from "../../hooks/useUserList";
import { updateUser } from "../../services/userService";
import { User } from '../../types/User';
import { showEditAlert } from "../../utils/sweetAlertUtils";
import Pagination from "../atoms/Pagination";
import ActionButtons from "../molecules/ActionButtons";
import EditUserModal from "../molecules/EditUserModal";
import FilterToggle from "../molecules/FilterToggle";
import UserTable from "../organisms/UserTable";
import UserFilter from "../templates/UserFilter";
const UserListPage: React.FC = () => {
    const {
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
        selectedUsers,
        setSelectedUsers,
        handleEdit,
        handleDelete,
        handleSort,
        users,
        totalUsers,
        sortConfig,
        itemsPerPage,
        showEditModal,
        setShowEditModal,
        userToEdit,
        setUsers,
        paginatedUsers
    } = useUserList();

    const handleSave = async (updatedUser: User) => {
        try {
            const updated = await updateUser(updatedUser.id, updatedUser);
            setUsers((prevUsers) =>
                prevUsers.map((user) =>
                    user.id === updated.id ? { ...user, ...updated } : user
                )
            );
            setShowEditModal(false);
            setSelectedUsers([]);
            showEditAlert();
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    return (
        <div className="container pt-5" style={{ position: 'relative' }}>
            <div className="row">
                <h3 className="col-sm-12 col-md-6">Listado de usuarios</h3>
                <div className="col-sm-12 col-md-6 mt-3 d-flex justify-content-end align-items-center">
                    <FilterToggle showFilters={showFilters} toggleFilters={() => setShowFilters(!showFilters)} />
                </div>
                <UserFilter
                    selectedAge={selectedAge}
                    setSelectedAge={setSelectedAge}
                    selectedGender={selectedGender}
                    setSelectedGender={setSelectedGender}
                    showFilters={showFilters}
                />

                <div className="col-sm-12 pt-4">
                    <div className="card border rounded-2 bg-light">
                        <div className="card-header py-3 bg-light">
                            <ActionButtons
                                selectedUsers={selectedUsers}
                                onEdit={handleEdit}
                                onDelete={handleDelete}
                            />
                        </div>
                        <div className="card-body pt-3 pb-4 display-flex">
                            {/* {loading ? (
                                <div className="d-flex justify-content-center w-100" style={{ height: '300px' }}>
                                    <div className="progress w-100">
                                        <div
                                            className="progress-bar progress-bar-striped progress-bar-animated bg-primary w-100"
                                            role="progressbar"
                                            aria-valuenow={100}
                                            aria-valuemin={0}
                                            aria-valuemax={100}

                                        >
                                            Cargando...
                                        </div>
                                    </div>
                                </div>
                            ) : ( */}
                          
                            <UserTable
                                paginatedUsers={showFilters ? paginatedUsers : users}
                                selectedUsers={selectedUsers}
                                setSelectedUsers={setSelectedUsers}
                                handleSort={handleSort}
                                sortConfig={sortConfig}
                                searchTerm={searchTerm}
                                setSearchTerm={setSearchTerm}
                            />
                            {/* )} */}
                            
                            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mt-4">
                                <div className="text-secondary mb-2 mb-md-0">#Registros: {!showFilters?totalUsers:paginatedUsers.length}</div>
                                <Pagination
                                    currentPage={currentPage}
                                    totalPages={Math.ceil((!showFilters? totalUsers:paginatedUsers.length) / itemsPerPage)}
                                    onPageChange={setCurrentPage}
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {userToEdit && (
                <EditUserModal
                    show={showEditModal}
                    onHide={() => setShowEditModal(false)}
                    selectedUser={userToEdit}
                    onSave={handleSave}
                />
            )}
        </div>
    );
};

export default UserListPage;
