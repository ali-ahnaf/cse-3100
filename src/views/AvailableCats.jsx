import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Persian' },
  { name: 'Mittens', age: '2', breed: 'Siamese' },
  { name: 'Shadow', age: '1', breed: 'Bengal' },
  { name: 'Pumpkin', age: '3', breed: 'Sphynx' },
  { name: 'Luna', age: '4', breed: 'Birman' },
  { name: 'Simba', age: '2', breed: 'Abyssinian' },
  { name: 'Oliver', age: '3', breed: 'Peterbald' },
  { name: 'Bella', age: '1', breed: 'Persian' },
];

const breeds = ['All', 'Sphynx', 'Peterbald', 'Birman', 'Abyssinian', 'Persian', 'Bengal', 'Siamese'];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [filteredCats, setFilteredCats] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('All');
  const [searchName, setSearchName] = useState('');

  useEffect(() => {
    // Fetch cat images from an API endpoint and assign it to the featuredCats list
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

  
  useEffect(() => {
    let filtered = cats;

    if (selectedBreed !== 'All') {
      filtered = filtered.filter(cat => cat.breed === selectedBreed);
    }

    if (searchName.trim() !== '') {
      filtered = filtered.filter(cat =>
        cat.name.toLowerCase().includes(searchName.toLowerCase())
      );
    }

    setFilteredCats(filtered);
  }, [selectedBreed, searchName, cats]);

  const handleSearch = () => {
    console.log('Searching with filters:', { selectedBreed, searchName });
  };

  return (
    <section className="text-center mt-4">
      <h2>Available Cats</h2>
      <p>Meet our adorable cats looking for their forever home!</p>

      <div className="filters">
        <select
          className="form-select"
          style={{ width: '200px' }}
          value={selectedBreed}
          onChange={(e) => setSelectedBreed(e.target.value)}
        >
          {breeds.map((breed) => (
            <option key={breed} value={breed}>
              {breed === 'All' ? 'Select breed' : breed}
            </option>
          ))}
        </select>

        <input
          type="text"
          className="form-control"
          style={{ width: '250px' }}
          placeholder="Search by name"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />

        <button 
          className="btn btn-primary"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      
      <div className="mt-2 row g-4 cats-container">
        {filteredCats.length > 0 ? (
          filteredCats.map((cat, i) => (
            <div key={i} className="col-md-3">
              
              <div className="cat-card">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="img-fluid mb-2"
                  style={{
                    borderRadius: '8px',
                    height: '200px',
                    objectFit: 'cover',
                    width: '100%',
                  }}
                />
                <div className="cat-info">
                  <h3 className="h5 mb-1">{cat.name}</h3>
                  <p className="mb-0">Age: {cat.age}</p>                 
                  <p className="mb-0">Breed: {cat.breed}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12">
            <p className="text-muted">No cats found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
}