import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Persian' },
  { name: 'Mittens', age: '2', breed: 'Siamese' },
  { name: 'Shadow', age: '1', breed: 'Bengal' },
  { name: 'Pumpkin', age: '3', breed: 'Maine Coon' },
  { name: 'Luna', age: '4 months', breed: 'Ragdoll' },
  { name: 'Simba', age: '2', breed: 'British Shorthair' },
  { name: 'Oliver', age: '3', breed: 'Persian' },
  { name: 'Bella', age: '1', breed: 'Sphynx' },
];

const availableBreeds = ['Sphynx', 'Persian', 'Bengal', 'Maine Coon', 'Ragdoll', 'British Shorthair', 'Siamese'];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredCats, setFilteredCats] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('All');
  const [searchName, setSearchName] = useState('');

  useEffect(() => {
    let mounted = true;

    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(
          availableCats.map(() =>
            fetch('https://api.thecatapi.com/v1/images/search').then((res) =>
              res.json()
            )
          )
        );

        if (mounted) {
          const catsWithImages = availableCats.map((cat, index) => ({
            ...cat,
            image: responses[index][0].url,
          }));

          setCats(catsWithImages);
          setFilteredCats(catsWithImages);
          setLoading(false);
        }
      } catch (error) {
        if (mounted) {
          console.error('Error fetching cat images:', error);
          setLoading(false);
        }
      }
    };

    fetchCatImages();

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    let result = [...cats];
    
    // Filter by breed
    if (selectedBreed !== 'All') {
      result = result.filter(cat => cat.breed === selectedBreed);
    }
    
    // Filter by name search
    if (searchName.trim() !== '') {
      result = result.filter(cat => 
        cat.name.toLowerCase().includes(searchName.toLowerCase())
      );
    }
    
    setFilteredCats(result);
  }, [selectedBreed, searchName, cats]);

  const handleBreedChange = (e) => {
    setSelectedBreed(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchName(e.target.value);
  };

  const handleClearFilters = () => {
    setSelectedBreed('All');
    setSearchName('');
  };

  return (
    <section className="available-cats-page">
      <h2>Available Cats</h2>
      <p>Meet our adorable cats looking for their forever home!</p>

      {/* Filtering Controls */}
      <div className="filter-container">
        <div className="filter-header">
          <h3>Filter Cats</h3>
          <button 
            className="clear-filters-btn"
            onClick={handleClearFilters}
            disabled={selectedBreed === 'All' && searchName === ''}
          >
            Clear Filters
          </button>
        </div>
        
        <div className="filter-controls">
          <div className="filter-group">
            <label htmlFor="breedFilter" className="filter-label">Filter by Breed</label>
            <select 
              id="breedFilter" 
              className="filter-select"
              value={selectedBreed}
              onChange={handleBreedChange}
            >
              <option value="All">All Breeds</option>
              {availableBreeds.map((breed, index) => (
                <option key={index} value={breed}>{breed}</option>
              ))}
            </select>
          </div>
          
          <div className="filter-group">
            <label htmlFor="nameSearch" className="filter-label">Search by Name</label>
            <div className="search-container">
              <input 
                type="text" 
                id="nameSearch" 
                className="filter-input"
                placeholder="Enter cat name..."
                value={searchName}
                onChange={handleSearchChange}
              />
              {searchName && (
                <button 
                  className="clear-search-btn"
                  onClick={() => setSearchName('')}
                >
                  ×
                </button>
              )}
            </div>
          </div>
        </div>
        
        {/* Active filters indicator */}
        {(selectedBreed !== 'All' || searchName) && (
          <div className="active-filters">
            <span>Active Filters:</span>
            {selectedBreed !== 'All' && (
              <span className="filter-tag">
                Breed: {selectedBreed}
                <button onClick={() => setSelectedBreed('All')}>
                  ×
                </button>
              </span>
            )}
            {searchName && (
              <span className="filter-tag">
                Name: "{searchName}"
                <button onClick={() => setSearchName('')}>
                  ×
                </button>
              </span>
            )}
          </div>
        )}
      </div>

      {/* Results count */}
      <div className="results-count">
        Showing {filteredCats.length} of {cats.length} cats
        {(selectedBreed !== 'All' || searchName) && (
          <span className="filtered-count">
            (filtered from {cats.length})
          </span>
        )}
      </div>

      {loading ? (
        <div className="loading">Loading cats...</div>
      ) : filteredCats.length === 0 ? (
        <div className="no-results">
          <p>No cats found matching your criteria. Try changing your filters.</p>
          <button 
            className="reset-filters-btn"
            onClick={handleClearFilters}
          >
            Clear All Filters
          </button>
        </div>
      ) : (
        <div className="cats-grid" id="cats-container">
          {filteredCats.map((cat, i) => (
            <div key={i} className="cat-card-wrapper">
              <div className="cat-card">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="cat-image"
                />
                <div className="cat-info">
                  <h3 className="cat-name">{cat.name}</h3>
                  <p className="cat-age">Age: {cat.age} years</p>
                  <p className="cat-breed">Breed: {cat.breed}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}