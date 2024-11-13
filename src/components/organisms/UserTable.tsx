import React, { useEffect, useState } from 'react';
import Table from '../molecules/Table';
import SearchInput from '../atoms/SearchInput';
import { User } from '../../types/User';
import { searchUsers } from '../../services/userService';

interface UserTableProps {
  paginatedUsers: User[];
  selectedUsers: User[];
  setSelectedUsers: React.Dispatch<React.SetStateAction<User[]>>;
  handleSort: (key: keyof User) => void;
  sortConfig: { key: keyof User; direction: "asc" | "desc" } | null;
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const UserTable: React.FC<UserTableProps> = ({
  paginatedUsers,
  selectedUsers,
  setSelectedUsers,
  handleSort,
  sortConfig,
  searchTerm,
  setSearchTerm,
}) => {
  const [filteredUsers, setFilteredUsers] = useState<User[]>(paginatedUsers);

  useEffect(() => {
    if (searchTerm) {
      searchUsers(searchTerm)
        .then(mappedUsers => setFilteredUsers(mappedUsers))
        .catch(error => console.error('Error fetching users:', error));
    } else {
      setFilteredUsers(paginatedUsers);
    }
  }, [searchTerm, paginatedUsers]);

  const headers: { label: string; key: keyof User }[] = [
    { label: "Nombre", key: "name" },
    { label: "Género", key: "gender" },
    { label: "Dirección", key: "address" },
    { label: "Teléfono", key: "phone" },
    { label: "Correo electrónico", key: "email" },
    { label: "Edad", key: "age" },
  ];

  return (
    <>
      <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Table
        headers={headers}
        data={filteredUsers}
        selectedUsers={selectedUsers}
        setSelectedUsers={setSelectedUsers}
        handleSort={handleSort}
        sortConfig={sortConfig}
      />
    </>
  );
};

export default UserTable;
