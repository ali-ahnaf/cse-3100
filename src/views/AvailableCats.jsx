import { useEffect, useState, useCallback } from 'react';

const initialCats = [
  { name: 'Whiskers', age: 2, breed: 'Siamese' },
  { name: 'Mittens', age: 3, breed: 'Persian' },
  { name: 'Shadow', age: 1, breed: 'Bengal' },
  { name: 'Pumpkin', age: 3, breed: 'Abyssinian' },
  { name: 'Luna', age: 4, breed: 'Birman' },
  { name: 'Simba', age: 2, breed: 'Sphynx' },
  { name: 'Oliver', age: 2, breed: 'Peterbald' },
  { name: 'Bella', age: 3, breed: 'Siamese' },
  { name: 'Charlie', age: 1, breed: 'Persian' },
];

const breeds = ['All', 'Sphynx', 'Peterbald', 'Birman', 'Abyssinian', 'Persian', 'Bengal', 'Siamese'];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [filteredCats, setFilteredCats] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('All');
  const [searchName, setSearchName] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // Fetch cat images only once on component mount
  useEffect(() => {
    const fetchCatImages = async () => {
      setIsLoading(true);
      try {
        const responses = await Promise.all(
          initialCats.map(() =>
            fetch('https://api.thecatapi.com/v1/images/search')
              .then((res) => res.json())
              .catch(() => [{ url: `https://placekitten.com/300/200?image=${Math.floor(Math.random() * 10) + 1}` }])
          )
        );
        
        const catsWithImages = initialCats.map((cat, index) => ({
          ...cat,
          image: responses[index][0].url,
        }));

        setCats(catsWithImages);
        setFilteredCats(catsWithImages);
      } catch (error) {
        console.error('Error fetching cat images:', error);
        // Use fallback images
        const catsWithFallback = initialCats.map((cat, index) => ({
          ...cat,
          image: `https://placekitten.com/300/200?image=${index + 1}`,
        }));
        setCats(catsWithFallback);
        setFilteredCats(catsWithFallback);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCatImages();
  }, []); // Empty dependency array - runs only once

  // Filter cats based on breed and name
  useEffect(() => {
    if (cats.length === 0) return;

    let filtered = [...cats];
    
    if (selectedBreed !== 'All') {
      filtered = filtered.filter(cat => cat.breed === selectedBreed);
    }
    
    if (searchName.trim() !== '') {
      filtered = filtered.filter(cat =>
        cat.name.toLowerCase().includes(searchName.toLowerCase())
      );
    }
    
    setFilteredCats(filtered);
  }, [selectedBreed, searchName, cats]); // Only re-run when these dependencies change

  const handleBreedChange = (e) => {
    setSelectedBreed(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchName(e.target.value);
  };

  return (
    <section className="text-center mt-4">
      <h2>Available Cats</h2>
      <p>Meet our adorable cats looking for their forever home!</p>

      <div className="filters">
        <div>
          <label htmlFor="breed-filter">Filter by breed: </label>
          <select
            id="breed-filter"
            className="filter-select"
            value={selectedBreed}
            onChange={handleBreedChange}
          >
            {breeds.map(breed => (
              <option key={breed} value={breed}>{breed}</option>
            ))}
          </select>
        </div>
        
        <div>
          <label htmlFor="name-search">Search by name: </label>
          <input
            id="name-search"
            type="text"
            className="filter-input"
            placeholder="Enter cat name..."
            value={searchName}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      {isLoading ? (
        <div className="loading">
          <p>Loading cute cats...</p>
        </div>
      ) : (
        <>
          <div className="cats-container">
            {filteredCats.map((cat, i) => (
              <div key={`${cat.name}-${i}`} className="cat-card">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="img-fluid mb-2"
                  onError={(e) => {
                    e.target.src = `https://placekitten.com/300/200?image=${i + 1}`;
                  }}
                />
                <div className="cat-info">
                  <h3 className="h5 mb-1">{cat.name}</h3>
                  <p className="mb-1">Age: {cat.age} years</p>
                  <p className="mb-0">Breed: {cat.breed}</p>
                </div>
              </div>
            ))}
          </div>
          
          {filteredCats.length === 0 && (
            <div className="no-results">
              <p>No cats found matching your criteria. Please try different filters.</p>
            </div>
          )}
        </>
      )}
    </section>
  );
}