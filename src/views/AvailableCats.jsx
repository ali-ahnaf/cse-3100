import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Siamese' },
  { name: 'Mittens', age: '2', breed: 'Peterbald' },
  { name: 'Shadow', age: '1', breed: 'Bengal' },
  { name: 'Pumpkin', age: '3', breed: 'Abyssinian' },
  { name: 'Luna', age: '4', breed: 'Bengal' },
  { name: 'Simba', age: '2', breed: 'Sphynx' },
  { name: 'Baldy', age: '3', breed: 'Peterbald' },
];

const allBreeds = ['All', 'Sphynx', 'Peterbald', 'Birman', 'Abyssinian', 'Persian', 'Bengal', 'Siamese'];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [filteredCats, setFilteredCats] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('All');
  const [searchName, setSearchName] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
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
      }
    };

    fetchCatImages();
  }, []);

  // Filter logic
  useEffect(() => {
    let result = cats;
    
    // Filter by breed 
    if (selectedBreed !== 'All') {
      result = result.filter(cat => cat.breed === selectedBreed);
    }
    
    // Filter by name search 
    if (searchQuery.trim() !== '') {
      result = result.filter(cat => 
        cat.name.toLowerCase() === searchQuery.toLowerCase()
      );
    }
    
    setFilteredCats(result);
  }, [selectedBreed, searchQuery, cats]);

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setSearchQuery(searchName);
    }
  };

  // Clear search when input is empty
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchName(value);
    
    // If user clears the search box, reset the filter immediately
    if (value.trim() === '') {
      setSearchQuery('');
    }
  };

  return (
    <>
      <section className="hero-section">
        <h1>Available Cats</h1>
        <p>
          Browse our adorable cats looking for their forever homes. Each cat is vaccinated, 
          neutered, and ready to bring joy to your life.
        </p>
      </section>

      {/* Filter Section */}
      <div className="filters">
        <div className="filter-row">
          <input
            type="text"
            placeholder="Search by cat name"
            value={searchName}
            onChange={handleSearchChange}
            onKeyPress={handleKeyPress}
          />
          <select
            value={selectedBreed}
            onChange={(e) => setSelectedBreed(e.target.value)}>
            {allBreeds.map((breed, index) => (
              <option key={index} value={breed}>
                {breed === 'All' ? 'All Breeds' : breed}
              </option>
            ))}
          </select>
        </div>
        <p className="results-count">
          Showing {filteredCats.length} cat{filteredCats.length !== 1 ? 's' : ''}
          {/* Show search tip */}
          {searchQuery && (
            <span style={{ color: '#666', fontSize: '0.9rem', display: 'block', marginTop: '5px' }}>
              Searching for: "{searchQuery}"
            </span>
          )}
        </p>
      </div>

      {/* Cats Grid */}
      <div  className="cats-container">
      {filteredCats.map((cat) => (
        <div 
          key={cat.id} 
          className="cat-card">
          <img
            src={cat.image}
            alt={cat.name}
          />
          <div className="cat-info">
            <h3>{cat.name}</h3>
            <p>Age: {cat.age} years</p>
            <p>Breed: {cat.breed}</p>
          </div>
        </div>
      ))}
      </div>
      
      {filteredCats.length === 0 && (
        <div className="about-section" style={{ textAlign: 'center' }}>
          <p>No cats found matching your criteria. Please try different filters.</p>
          {searchQuery && (
            <button 
              onClick={() => {
                setSearchName('');
                setSearchQuery('');
              }}
              style={{ 
                marginTop: '10px',
                padding: '8px 16px',
                backgroundColor: '#f0f0f0',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Clear Search
            </button>
          )}
        </div>
      )}
    </>
  );
}