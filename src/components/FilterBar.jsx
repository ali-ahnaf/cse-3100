import React from 'react';

const FilterBar = ({ searchTerm, setSearchTerm, selectedBreed, setSelectedBreed, breeds, onSearch }) => {
  const handleSearchClick = () => {
    if (onSearch) {
      onSearch();
    }
  };

  return (
    <div className="filter-bar-right">
      <div className="filter-controls">
        <select
          className="filter-select"
          id="breedFilter"
          value={selectedBreed}
          onChange={(e) => setSelectedBreed(e.target.value)}
        >
          <option value="">select breed</option>
          {breeds.map((breed) => (
            <option key={breed} value={breed}>
              {breed}
            </option>
          ))}
        </select>

        <input
          type="text"
          className="filter-input"
          id="searchInput"
          placeholder="search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleSearchClick();
            }
          }}
        />

        <button 
          className="filter-search-btn" 
          onClick={handleSearchClick}
        >
          search
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
