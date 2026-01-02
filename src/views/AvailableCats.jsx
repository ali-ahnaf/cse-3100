import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Persian' },
  { name: 'Mittens', age: '2', breed: 'Siamese' },
  { name: 'Shadow', age: '1', breed: 'Bengal' },
  { name: 'Pumpkin', age: '3', breed: 'Sphynx' },
  { name: 'Luna', age: '4', breed: 'Birman' },
  { name: 'Simba', age: '2', breed: 'Abyssinian' },
  { name: 'Tiger', age: '3', breed: 'Bengal' },
  { name: 'Snowball', age: '1', breed: 'Persian' },
  { name: 'Smokey', age: '2', breed: 'Peterbald' },
  { name: 'Ginger', age: '4', breed: 'Abyssinian' },
];

const breeds = ['All', 'Sphynx', 'Peterbald', 'Birman', 'Abyssinian', 'Persian', 'Bengal', 'Siamese'];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [filteredCats, setFilteredCats] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('All');
  const [searchName, setSearchName] = useState('');

  useEffect(() => {
    // Fetch cat images from an API endpoint and assign it to the availableCats list
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

  // Apply filters only when search button is clicked
  const handleSearch = () => {
    let result = cats;

    // Filter by breed
    if (selectedBreed !== 'All') {
      result = result.filter(cat => cat.breed === selectedBreed);
    }

    // Filter by name (case-insensitive)
    if (searchName.trim() !== '') {
      result = result.filter(cat => 
        cat.name.toLowerCase().includes(searchName.toLowerCase())
      );
    }

    setFilteredCats(result);
  };

  return (
    <section className="text-center mt-4">
      <h2>Available Cats</h2>
      <p>Meet our adorable cats looking for their forever home!</p>

      {/* Filters */}
      <div className="filters">
        <select
          value={selectedBreed}
          onChange={(e) => setSelectedBreed(e.target.value)}
        >
          <option value="All">Select breed</option>
          {breeds.filter(b => b !== 'All').map(breed => (
            <option key={breed} value={breed}>{breed}</option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Search by name..."
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />
        <button className="btn" onClick={handleSearch}>
          Search
        </button>
      </div>

      <div className="cats-container">
        {filteredCats.length === 0 ? (
          <p>No cats found matching your criteria.</p>
        ) : (
          filteredCats.map((cat, i) => (
            <div key={i} className="cat-card">
              <img
                src={cat.image}
                alt={cat.name}
                className="img-fluid"
              />
              <div className="cat-info">
                <h3>{cat.name}</h3>
                <p>Age: {cat.age} years</p>
                <p>Breed: {cat.breed}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
