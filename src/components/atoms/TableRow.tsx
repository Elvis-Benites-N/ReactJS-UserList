import React from 'react';
import { User } from '../../types/User';



interface TableRowProps {
    user: User;
    isSelected: boolean;
    handleSelectionChange: (user: User) => void;
}

const TableRow: React.FC<TableRowProps> = ({ user, isSelected, handleSelectionChange }) => (
    <tr>
        <td className="text-center align-middle">
            <input
                type="checkbox"
                className="form-check-input"
                onChange={() => handleSelectionChange(user)}
                checked={isSelected}
            />
        </td>
        <td>
            <img
                src="https://dummyjson.com/icon/emilys/128"
                alt="User"
                className="img-thumbnail"
            />
        </td>
        <td>{user.name}</td>
        <td>{user.gender}</td>
        <td>{user.address}</td>
        <td>{user.phone}</td>
        <td>{user.email}</td>
        <td>{user.age}</td>
    </tr>
);

export default TableRow;
