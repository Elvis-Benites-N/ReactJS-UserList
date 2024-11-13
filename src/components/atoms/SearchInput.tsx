import React from 'react';
import '../../styles/atoms/input.css'
interface SearchInputProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const SearchInput: React.FC<SearchInputProps> = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="input-group mb-3 position-relative mt-4">
      <input
        type="search"
        className={`form-control form-control-sm search-input ${searchTerm ? 'no-background' : ''}`}
        placeholder="Buscar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;