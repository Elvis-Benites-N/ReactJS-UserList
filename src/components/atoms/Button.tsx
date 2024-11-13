import React from 'react';

interface ButtonProps {
    text: string;
    icon?: string;
    onClick?: () => void;
    variant?: 'primary' | 'outline-primary' | 'danger' | 'outline-danger';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

const Button: React.FC<ButtonProps> = ({
    text,
    icon,
    onClick,
    variant = 'primary',
    size = 'md',
    className = ''
}) => {
    const buttonClasses = `btn btn-${variant} btn-${size} ${className}`;

    return (
        <button className={buttonClasses} onClick={onClick}>
            {icon && <i className={`bi bi-${icon} me-2`}></i>}
            {text}
        </button>
    );
};

export default Button;
