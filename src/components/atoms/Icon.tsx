import React from 'react';

interface IconProps {
    name: string;
    size?: number;
    color?: string;
    className?: string;
}

const Icon: React.FC<IconProps> = ({ name, size, color, className = '' }) => {
    const style = {
        fontSize: size ? `${size}px` : undefined,
        color: color || undefined,
    };

    return <i className={`bi bi-${name} ${className}`} style={style}></i>;
};

export default Icon;
