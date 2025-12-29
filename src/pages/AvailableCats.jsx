import React, { useState } from 'react';
import { cats } from '../data/cats';
import CatCard from '../components/CatCard';
import Filter from '../components/Filter';

const AvailableCats = () => {
  const [breedFilter, setBreedFilter] = useState('All');
  const [searchText, setSearchText] = useState('');

  const filteredCats = cats.filter((cat) => {
    const breedMatch = breedFilter === 'All' || cat.breed === breedFilter;
    const nameMatch = cat.name.toLowerCase().includes(searchText.toLowerCase());
    return breedMatch && nameMatch;
  });

  return (
    <div className="cats-page">
      <h2>Available Cats</h2>
      <Filter
        breedFilter={breedFilter}
        setBreedFilter={setBreedFilter}
        searchText={searchText}
        setSearchText={setSearchText}
      />
      <div className="cats-grid">
        {filteredCats.map((cat) => (
          <CatCard key={cat.id} cat={cat} />
        ))}
      </div>
    </div>
  );
};

export default AvailableCats;
