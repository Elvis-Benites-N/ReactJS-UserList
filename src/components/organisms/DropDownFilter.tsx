import React, { useRef, useState, useEffect } from "react";
import DropdownButton from "../atoms/DropdownButton";
import DropdownMenu from "../molecules/DropdownMenu";

interface DropdownFilterProps {
  type: "edad" | "genero";
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  options: string[];
}


const DropdownFilter: React.FC<DropdownFilterProps> = ({ type, selected, setSelected, options }) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [search, setSearch] = useState("");
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const menuRef = useRef<HTMLDivElement | null>(null);
  
    const handleClickOutside = (e: MouseEvent) => {
      if (
        buttonRef.current?.contains(e.target as Node) ||
        menuRef.current?.contains(e.target as Node)
      ) {
        return;
      }
      setShowDropdown(false);
      setSearch("");
      
    };
  
    useEffect(() => {
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }, []);
  
    const handleSelect = (value: string) => {
      setSelected(value);
      setShowDropdown(false);
      setSearch("");
    };
  
    return (
      <>
        <DropdownButton
          label={selected || `Select ${type.charAt(0).toUpperCase() + type.slice(1)}`}
          onClick={() => setShowDropdown(!showDropdown)}
          isActive={showDropdown}
          buttonRef={buttonRef}
        />
        {showDropdown && (
          <DropdownMenu
            options={options}
            selectedOption={selected}
            onSelect={handleSelect}
            searchValue={search}
            onSearchChange={(e) => setSearch(e.target.value)}
            type={type.charAt(0).toUpperCase() + type.slice(1)}
            buttonRef={buttonRef}
            menuRef={menuRef}
          />
        )}
      </>
    );
  };
  
  export default DropdownFilter;
  
