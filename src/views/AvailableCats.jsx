import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Persian' },
  { name: 'Mittens', age: '2', breed: 'Siamese' },
  { name: 'Shadow', age: '1', breed: 'Bengal' },
  { name: 'Pumpkin', age: '3', breed: 'Abyssinian' },
  { name: 'Luna', age: '4', breed: 'Birman' },
  { name: 'Simba', age: '2', breed: 'Sphynx' },
  { name: 'Oliver', age: '3', breed: 'Peterbald' },
  { name: 'Bella', age: '1', breed: 'Persian' },
];

const breeds = ['All', 'Sphynx', 'Peterbald', 'Birman', 'Abyssinian', 'Persian', 'Bengal', 'Siamese'];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [filteredCats, setFilteredCats] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('All');
  const [searchName, setSearchName] = useState('');
  const [showResults, setShowResults] = useState(false);

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

  const handleSearch = () => {
    let result = [...cats];
    
    if (selectedBreed !== 'All') {
      result = result.filter(cat => cat.breed === selectedBreed);
    }
    
    if (searchName.trim() !== '') {
      result = result.filter(cat => 
        cat.name.toLowerCase().includes(searchName.toLowerCase())
      );
    }
    
    setFilteredCats(result);
    setShowResults(true);
  };

  const handleReset = () => {
    setSelectedBreed('All');
    setSearchName('');
    setFilteredCats(cats);
    setShowResults(false);
  };

  return (
    <section className="text-center mt-4">
      <h2>Available Cats</h2>
      <p>Meet our adorable cats looking for their forever home!</p>

      {/* Filter Section */}
      <div className="filter-section">
        <div className="filter-group">
          <label htmlFor="breed-filter">Filter by Breed:</label>
          <select 
            id="breed-filter"
            value={selectedBreed}
            onChange={(e) => setSelectedBreed(e.target.value)}
          >
            {breeds.map(breed => (
              <option key={breed} value={breed}>{breed}</option>
            ))}
          </select>
        </div>
        
        <div className="filter-group">
          <label htmlFor="name-search">Search by Name:</label>
          <input
            id="name-search"
            type="text"
            placeholder="Enter cat name..."
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
          />
        </div>
        
        <div style={{display: 'flex', gap: '10px', alignItems: 'flex-end'}}>
          <button 
            onClick={handleSearch}
            style={{
              padding: '10px 20px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Search
          </button>
          
          <button 
            onClick={handleReset}
            style={{
              padding: '10px 20px',
              backgroundColor: '#6c757d',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Reset
          </button>
        </div>
      </div>

      {/* Show message when search is clicked but no cats match */}
      {showResults && filteredCats.length === 0 && (
        <div style={{
          margin: '20px 0',
          padding: '15px',
          backgroundColor: '#f8d7da',
          color: '#721c24',
          borderRadius: '4px'
        }}>
          No cats found matching your search criteria.
        </div>
      )}

      {/* Show cats only after search is clicked, or show all initially */}
      <div className="cats-container">
        {filteredCats.map((cat, i) => (
          <div key={i} className="cat-card">
            <div className="cat-image">
              <img
                src={cat.image}
                alt={cat.name}
              />
            </div>
            <div className="cat-info">
              <h3 className="h5">{cat.name}</h3>
              <p className="cat-age">Age: {cat.age} years</p>
              <p className="cat-breed">Breed: {cat.breed}</p>
            </div>
          </div>
        ))}
      </div>
       {/* Show initial message when no search has been performed */}
      {!showResults && filteredCats.length > 0 && (
        <p style={{marginTop: '20px', color: '#666'}}>
        
        </p>
      )}
    </section>
  );
}