import { useEffect, useState } from 'react';

// Added breed field to all cats with valid breeds from list
const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Siamese' },
  { name: 'Mittens', age: '2', breed: 'Persian' },
  { name: 'Shadow', age: '1', breed: 'Bengal' },
  { name: 'Pumpkin', age: '3', breed: 'Abyssinian' },
  { name: 'Luna', age: '4', breed: 'Sphynx' },
  { name: 'Simba', age: '2', breed: 'Peterbald' },
  { name: 'Tiger', age: '3', breed: 'Birman' },
  { name: 'Bella', age: '1', breed: 'Siamese' },
];

// All possible breeds for dropdown
const allBreeds = ['All', 'Sphynx', 'Peterbald', 'Birman', 'Abyssinian', 'Persian', 'Bengal', 'Siamese'];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [filteredCats, setFilteredCats] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('All');
  const [searchName, setSearchName] = useState('');

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
        setFilteredCats(catsWithImages); // Initialize filtered cats
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  }, []);

  // Filter function triggered by search button
  const handleSearch = () => {
    let result = cats;
    
    // Filter by breed
    if (selectedBreed !== 'All') {
      result = result.filter(cat => cat.breed === selectedBreed);
    }
    
    // Filter by name (case insensitive)
    if (searchName.trim() !== '') {
      result = result.filter(cat => 
        cat.name.toLowerCase().includes(searchName.toLowerCase())
      );
    }
    
    setFilteredCats(result);
  };

  return (
    <section className="text-center mt-4 available-cats-page">
      <h2>Available Cats</h2>
      <p>Meet our adorable cats looking for their forever home!</p>

      {/* Filter Controls */}
      <div className="filter-controls mt-4">
        <div className="d-flex gap-3 align-items-center">
          {/* Breed Filter Dropdown */}
          <div>
            <label htmlFor="breedFilter" className="form-label">Filter by Breed:</label>
            <select 
              id="breedFilter"
              className="form-select"
              value={selectedBreed}
              onChange={(e) => setSelectedBreed(e.target.value)}
            >
              {allBreeds.map(breed => (
                <option key={breed} value={breed}>{breed}</option>
              ))}
            </select>
          </div>

          {/* Name Search Input */}
          <div>
            <label htmlFor="nameSearch" className="form-label">Search by Name:</label>
            <input
              id="nameSearch"
              type="text"
              className="form-control"
              placeholder="Search by name..."
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
            />
          </div>

          {/* Search Button */}
          <div className="align-self-end">
            <button 
              className="btn btn-search"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Cats Grid */}
      <div className="mt-4">
        <div className="row g-4" id="cats-container">
          {filteredCats.map((cat, i) => (
            <div key={i} className="col-md-3"> {/* Changed to col-md-3 for 4 columns */}
              <div className="cat-card">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="img-fluid"
                  style={{
                    height: '200px',
                    objectFit: 'cover',
                  }}
                />
                <div className="cat-info">
                  <h3 className="h5 mb-1">{cat.name}</h3>
                  <p className="mb-0">Age: {cat.age}</p>
                  <p className="mb-0">Breed: {cat.breed}</p> {/* Added breed display */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}