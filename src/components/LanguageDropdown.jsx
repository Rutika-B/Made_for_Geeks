import React from "react";
import Select from "react-select";
import { customStyles } from "../constants/code_editor/customStyles";
import { languageOptions } from "../constants/code_editor/LanguageOptions";

const LanguagesDropdown = ({ onSelectChange }) => {
  return (
    <Select
      placeholder={`Filter By Category`}
      options={languageOptions}
      styles={customStyles}
      defaultValue={languageOptions[0]}
      onChange={(selectedOption) => onSelectChange(selectedOption)}
    />
  );
};

export default LanguagesDropdown;