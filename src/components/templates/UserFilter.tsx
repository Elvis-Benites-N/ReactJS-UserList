import React, { useState, useEffect } from "react";
import DropdownFilter from "../organisms/DropDownFilter";
import '../../styles/organisms/filter.css';
import { ageOptions, genderOptions } from "../../data/datadummy";
interface UserFilterProps {
  selectedAge: string;
  setSelectedAge: React.Dispatch<React.SetStateAction<string>>;
  selectedGender: string;
  setSelectedGender: React.Dispatch<React.SetStateAction<string>>;
  showFilters: boolean;
}

const UserFilter: React.FC<UserFilterProps> = ({
  selectedAge,
  setSelectedAge,
  selectedGender,
  setSelectedGender,
  showFilters,
}) => {
  const [isAbsolute, setIsAbsolute] = useState(false);

  const options = { ages: ageOptions, genders: genderOptions }; 

  useEffect(() => {
    if (!showFilters) {
      const timer = setTimeout(() => {
        setIsAbsolute(true);
      }, 300);
      setSelectedAge(options.ages[0]);
      setSelectedGender(options.genders[0]);

      return () => clearTimeout(timer);
    } else {
      setIsAbsolute(false);
    }
  }, [showFilters, setSelectedAge, setSelectedGender, options.ages, options.genders]);

  return (
    <div
      className={`filter-container mt-4 ${showFilters ? "filter-enter" : "filter-exit"}`}
      style={{ position: isAbsolute ? "absolute" : "static" }}
    >
      <div className="container-fluid px-0">
        <div className="card border-0 shadow-sm">
          <div className="card-body row d-flex justify-content-start py-4 px-1 mx-0">
            <div className="form-group col-12 col-md-6 col-lg-4 py-2">
              <DropdownFilter type="edad" selected={selectedAge} setSelected={setSelectedAge} options={options.ages} />
            </div>
            <div className="form-group col-12 col-md-6 col-lg-4  py-2">
              <DropdownFilter type="genero" selected={selectedGender} setSelected={setSelectedGender} options={options.genders} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserFilter;
