import React, { useRef, useEffect, useState } from "react";
import Button from "../atoms/Button";

interface DropdownMenuProps {
    options: string[];
    selectedOption: string;
    onSelect: (option: string) => void;
    searchValue: string;
    onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    type: string;
    buttonRef: React.RefObject<HTMLButtonElement>;
    menuRef: React.RefObject<HTMLDivElement>;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
    options,
    selectedOption,
    onSelect,
    searchValue,
    onSearchChange,
    type,
    buttonRef,
    menuRef,
}) => {
    const [menuWidth, setMenuWidth] = useState<number | undefined>(undefined);
    const searchInputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (buttonRef.current) {
            setMenuWidth(buttonRef.current.offsetWidth);
        }
    }, [buttonRef]);

    const filterOptions = (list: string[], query: string) =>
        list.filter((item) => item.toLowerCase().includes(query.toLowerCase()));

    return (
        <div
            ref={menuRef}
            className="dropdown-menu show py-2 mt-2 max-h-250"
            style={{ width: menuWidth || "auto"}}
        >
            <div className="px-2">
                <input
                    type="search"
                    className="form-control form-control-sm mb-2"
                    placeholder="Buscar.."
                    value={searchValue}
                    onChange={onSearchChange}
                    ref={searchInputRef}
                />
            </div>
            <div className="mt-2 px-4 bg-secondary text-white d-flex">
                <h6 className="mt-2 mx-2">{type.toUpperCase()}</h6>
            </div>
            {filterOptions(options, searchValue).map((item) => (
                <Button
                    key={item}
                    className={`dropdown-item ${selectedOption === item ? "bg-primary text-white" : ""}`}
                    onClick={() => onSelect(item)}
                    label={item}
                />
            ))}
        </div>
    );
};

export default DropdownMenu;
