import React from 'react';
import TableHeader from '../atoms/TableHeader';
import TableRow from '../atoms/TableRow';
import '../../styles/molecules/tables.css';
import { User } from '../../types/User';
interface TableProps {
  headers: { label: string; key: keyof User }[];
  data: User[];
  selectedUsers: User[];
  setSelectedUsers: React.Dispatch<React.SetStateAction<User[]>>;
  handleSort: (key: keyof User) => void;
  sortConfig: { key: keyof User; direction: "asc" | "desc" } | null;
}

const Table: React.FC<TableProps> = ({
  headers,
  data,
  selectedUsers,
  setSelectedUsers,
  handleSort,
  sortConfig,
}) => {
  const handleSelectionChange = (user: User) => {
    setSelectedUsers((prevSelected) =>
      prevSelected.includes(user)
        ? prevSelected.filter((selectedUser) => selectedUser !== user)
        : [...prevSelected, user]
    );
  };

  return (
    <div className="table-responsive " style={{ maxHeight: "300px", overflowY: "auto" }}>
      <table className="table table-hover table-light">
        <thead>
          <tr>
            <th scope="col" className="text-center align-middle">
              <i className="bi bi-check-lg"></i>
            </th>
            <th scope="col"></th>
            {headers.map((header) => (
              <TableHeader
                key={header.key}
                label={header.label}
                sortKey={header.key}
                sortConfig={sortConfig}
                handleSort={handleSort}
              />
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => (
            <TableRow
              key={index}
              user={user}
              isSelected={selectedUsers.includes(user)}
              handleSelectionChange={handleSelectionChange}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
