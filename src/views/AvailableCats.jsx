import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Siamese' },
  { name: 'Mittens', age: '2', breed: 'Persian' },
  { name: 'Shadow', age: '1', breed: 'Bengal' },
  { name: 'Pumpkin', age: '3', breed: 'Abyssinian' },
  { name: 'Luna', age: '4', breed: 'Birman' },
  { name: 'Simba', age: '2', breed: 'Sphynx' },
  { name: 'Oliver', age: '5', breed: 'Peterbald' },
  { name: 'Chloe', age: '3', breed: 'Siamese' },
];

const breedOptions = ['All', 'Sphynx', 'Peterbald', 'Birman', 'Abyssinian', 'Persian', 'Bengal', 'Siamese'];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [filteredCats, setFilteredCats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBreed, setSelectedBreed] = useState('All');

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        setLoading(true);
        const responses = await Promise.all(
          availableCats.map(() =>
            fetch('https://api.thecatapi.com/v1/images/search').then((res) =>
              res.json()
            )
          )
        );
        const catsWithImages = availableCats.map((cat, index) => ({
          ...cat,
          image: responses[index][0].url,
        }));

        setCats(catsWithImages);
        setFilteredCats(catsWithImages);
      } catch (error) {
        console.error('Error fetching cat images:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCatImages();
  }, []);

  useEffect(() => {
    let result = cats;
    
    if (selectedBreed !== 'All') {
      result = result.filter(cat => cat.breed === selectedBreed);
    }
    
    if (searchTerm.trim() !== '') {
      const term = searchTerm.toLowerCase();
      result = result.filter(cat => 
        cat.name.toLowerCase().includes(term)
      );
    }
    
    setFilteredCats(result);
  }, [searchTerm, selectedBreed, cats]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleBreedChange = (e) => {
    setSelectedBreed(e.target.value);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedBreed('All');
  };

  if (loading) {
    return (
      <div className="page-container">
        <div className="loading-state">
          <h2>Available Cats</h2>
          <p>Loading cats...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <h1 className="page-title">Available Cats</h1>
      <p className="page-subtitle">Meet our adorable cats looking for their forever home!</p>

      {/* Filter Section */}
      <div className="filters-container">
        <div className="filter-row">
          <div className="filter-group">
            <label className="filter-label">
              Search by Name
            </label>
            <input
              type="text"
              className="filter-input"
              placeholder="Type cat name..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
          
          <div className="filter-group">
            <label className="filter-label">
              Filter by Breed
            </label>
            <select
              className="filter-select"
              value={selectedBreed}
              onChange={handleBreedChange}
            >
              {breedOptions.map((breed, index) => (
                <option key={index} value={breed}>
                  {breed}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Filter Status */}
        <div className="filter-status">
          <div className="filter-info">
            {filteredCats.length === cats.length ? (
              <span>Showing all {cats.length} cats</span>
            ) : (
              <span>
                Showing {filteredCats.length} of {cats.length} cats
                {selectedBreed !== 'All' && ` • Breed: ${selectedBreed}`}
                {searchTerm && ` • Name: "${searchTerm}"`}
              </span>
            )}
          </div>
          
          {(searchTerm || selectedBreed !== 'All') && (
            <button 
              className="clear-filters-btn"
              onClick={clearFilters}
            >
              Clear Filters
            </button>
          )}
        </div>
      </div>

      {/* Cats Grid */}
      {filteredCats.length === 0 ? (
        <div className="empty-state">
          <div className="empty-state-icon">😿</div>
          <h3 className="empty-state-title">No cats found</h3>
          <p className="empty-state-text">
            {searchTerm 
              ? `No cats found with name containing "${searchTerm}"`
              : selectedBreed !== 'All' 
                ? `No ${selectedBreed} cats available at the moment`
                : 'No cats available'
            }
          </p>
          {(searchTerm || selectedBreed !== 'All') && (
            <button 
              className="adopt-btn"
              onClick={clearFilters}
            >
              Clear Filters
            </button>
          )}
        </div>
      ) : (
        <div className="cats-grid">
          {filteredCats.map((cat, i) => (
            <div key={i} className="cat-card">
              <img
                src={cat.image}
                alt={cat.name}
                className="cat-image"
              />
              <div className="cat-info">
                <h3 className="cat-name">{cat.name}</h3>
                <p className="cat-details">Age: {cat.age} years</p>
                <p className="cat-details">
                  Breed: <span className="breed-badge">{cat.breed}</span>
                </p>
                
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}