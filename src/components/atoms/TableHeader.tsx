import React from 'react';
import { User } from '../../types/User';
interface TableHeaderProps {
    label: string;
    sortKey: keyof User;
    sortConfig: { key: keyof User; direction: "asc" | "desc" } | null;
    handleSort: (key: keyof User) => void;
}

const TableHeader: React.FC<TableHeaderProps> = ({ label, sortKey, sortConfig, handleSort }) => (
    <th scope="col">
        {label}
        <span className="d-flex flex-column align-items-center float-end">
            <i
                className={`bi bi-caret-up-fill ${sortConfig?.key === sortKey && sortConfig.direction === "asc" ? "text-muted" : "text"} cursor-pointer`}
                onClick={() => handleSort(sortKey)}
            ></i>
            <i
                className={`bi bi-caret-down-fill ${sortConfig?.key === sortKey && sortConfig.direction === "desc" ? "text-muted" : "text"} cursor-pointer`}
                onClick={() => handleSort(sortKey)}
            ></i>
        </span>
    </th>
);

export default TableHeader;
