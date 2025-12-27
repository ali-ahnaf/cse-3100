import React from 'react';

export default function CatFilters({
  breedFilter,
  setBreedFilter,
  nameQuery,
  setNameQuery,
  breedOptions,
}) {
  return (
    <div className="filters">
      <div className="filter-group">
        <label htmlFor="breed-select">Filter by breed</label>
        <select id="breed-select" value={breedFilter} onChange={(e) => setBreedFilter(e.target.value)}>
          {breedOptions.map((b) => (
            <option key={b} value={b}>{b}</option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="name-search">Search by name</label>
        <input id="name-search" type="text" value={nameQuery} onChange={(e) => setNameQuery(e.target.value)} placeholder="e.g. Whiskers" />
      </div>

      <div className="filter-actions">
        <button className="filter-clear-btn" onClick={() => { setBreedFilter('All'); setNameQuery(''); }}>Clear filters</button>
      </div>
    </div>
  );
}
