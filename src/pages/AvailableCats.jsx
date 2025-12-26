import React, { useState, useEffect } from 'react';
import { catsData, breeds } from '../data/catsData';
import CatCard from '../components/CatCard';
import FilterBar from '../components/FilterBar';

const AvailableCats = () => {
  const [cats, setCats] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBreed, setSelectedBreed] = useState('');
  const [filteredCats, setFilteredCats] = useState([]);

  useEffect(() => {
    setCats(catsData);
  }, []);

  useEffect(() => {
    let result = cats;

    if (searchTerm) {
      result = result.filter(cat =>
        cat.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedBreed) {
      result = result.filter(cat => cat.breed === selectedBreed);
    }

    setFilteredCats(result);
  }, [searchTerm, selectedBreed, cats]);

  return (
    <div className="available-cats-page">
      <div className="available-cats-header">
        <h2 className="available-cats-title">Available cats</h2>
        <FilterBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedBreed={selectedBreed}
          setSelectedBreed={setSelectedBreed}
          breeds={breeds}
        />
      </div>

      <div className="cats-container">
        {filteredCats.length > 0 ? (
          <div className="cats-grid">
            {filteredCats.map((cat) => (
              <CatCard key={cat.id} cat={cat} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <h3>No cats found</h3>
            <p>Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AvailableCats;
