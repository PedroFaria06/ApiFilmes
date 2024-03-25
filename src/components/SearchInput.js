import React, { useState } from "react";

export default function SearchInput({
  placeholder,
  emptyInput,
  onChange,
  onTapSearch,
}) {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    onChange(value);
  };

  return (
    <div className="container">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder={placeholder}
          value={searchValue}
          onChange={handleInputChange}
        />
        <button
          className="btn btn-primary"
          type="button"
          onClick={onTapSearch}
        >
          Search
        </button>
      </div>
      {emptyInput && <p className="text-primary">Campo vazio.</p>}
    </div>
  );
}
