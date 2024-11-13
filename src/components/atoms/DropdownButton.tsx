import React from "react";

interface DropdownButtonProps {
    label: string;
    onClick: () => void;
    isActive: boolean;
    buttonRef?: React.Ref<HTMLButtonElement>;
}

const DropdownButton: React.FC<DropdownButtonProps> = ({ label, onClick, isActive, buttonRef }) => {
    return (
        <button
            ref={buttonRef}
            className={`form-select form-select-sm text-start btn-select ${isActive ? "active" : ""}`}
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default DropdownButton;
