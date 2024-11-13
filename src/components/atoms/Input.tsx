import React from 'react';

interface InputProps {
    type?: 'text' | 'number' | 'email';
    label?: string;
    placeholder?: string;
    value?: string | number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    disabled?: boolean;
    className?: string;
    id?: string;
}

const Input: React.FC<InputProps> = ({
    type = 'text',
    label,
    placeholder,
    value,
    onChange,
    required = false,
    disabled = false,
    className = '',
    id
}) => {
    return (
        <div className={`form-group ${className}`}>
            {label && (
                <label htmlFor={id} className="form-label">
                    {label}
                </label>
            )}
            <input
                type={type}
                className="form-control"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
                disabled={disabled}
                id={id}
            />
        </div>
    );
};

export default Input;
