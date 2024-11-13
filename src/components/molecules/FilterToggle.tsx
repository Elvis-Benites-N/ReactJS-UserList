import React from "react";
import Button from "../atoms/Button";

interface FilterToggleProps {
    showFilters: boolean;
    toggleFilters: () => void;
}

const FilterToggle: React.FC<FilterToggleProps> = ({ toggleFilters }) => (
    <Button
        onClick={toggleFilters}
        label="Filtros"
        icon="bi-sliders"
        className="btn-outline-primary px-4"
    />
);

export default FilterToggle;
