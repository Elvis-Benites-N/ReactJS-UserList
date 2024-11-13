import React from 'react';

interface Option {
    label: string;
    value: string | number;
}

interface SelectDropdownProps {
    label?: string;
    options: Option[];
    placeholder?: string;
    value?: string | number;
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    required?: boolean;
    disabled?: boolean;
    className?: string;
    id?: string;
}

const SelectDropdown: React.FC<SelectDropdownProps> = ({
    label,
    options,
    placeholder = 'Select an option',
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
            <select
                id={id}
                className="form-select form-select-sm"
                value={value}
                onChange={onChange}
                required={required}
                disabled={disabled}
            >
                <option value="">{placeholder}</option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SelectDropdown;
