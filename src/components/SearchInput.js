import React, { useMemo } from "react";

function SearchInput({ placeholder, value, onChange, onSearch }) {
  const memoizedPlaceholder = useMemo(() => placeholder, [placeholder]);
  const memoizedValue = useMemo(() => value, [value]);
  const memoizedOnChange = useMemo(() => onChange, [onChange]);
  const memoizedOnSearch = useMemo(() => onSearch, [onSearch]);

  return (
    <div className="search-input">
      <input
        type="text"
        placeholder={memoizedPlaceholder}
        value={memoizedValue}
        onChange={memoizedOnChange}
      />
      <button onClick={memoizedOnSearch}>Search</button>
    </div>
  );
}

export default SearchInput;
