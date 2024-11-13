import React from 'react';
import '../../styles/atoms/buttons.css'
interface ButtonProps {
    onClick: () => void;
    label: string|number;
    icon?: string;
    className?: string;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ onClick, label, icon, className, disabled = false }) => (
    <button onClick={onClick} className={`btn btn-sm ${className}`} disabled={disabled}>
        {icon && <i className={`bi ${icon} me-1`}></i>}
        {label}
    </button>
);

export default Button;
