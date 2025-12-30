import { useEffect, useState } from 'react';

const breeds = ['Sphynx', 'Peterbald', 'Birman', 'Abyssinian', 'Persian', 'Bengal', 'Siamese'];

const availableCats = [
  { name: 'Whiskers', age: '2' },
  { name: 'Mittens', age: '2' },
  { name: 'Shadow', age: '1' },
  { name: 'Pumpkin', age: '3' },
  { name: 'Luna', age: '4' },
  { name: 'Simba', age: '2' },
  { name: 'Bella', age: '1' },
  { name: 'Max', age: '3' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [filteredCats, setFilteredCats] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('');
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
          breed: breeds[Math.floor(Math.random() * breeds.length)],
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
    let filtered = [...cats];

    if (selectedBreed) {
      filtered = filtered.filter((cat) => cat.breed === selectedBreed);
    }

    if (searchName.trim()) {
      filtered = filtered.filter((cat) =>
        cat.name.toLowerCase().includes(searchName.toLowerCase())
      );
    }

    setFilteredCats(filtered);
  };

  const handleBreedChange = (e) => {
    setSelectedBreed(e.target.value);
  };

  const handleNameChange = (e) => {
    setSearchName(e.target.value);
  };

  return (
    <div className="available-cats-page">
      <div className="available-cats-intro">
        <p>Find Your Purr-fect Companion!</p>
        <span className="paw-icon">🐾</span>
      </div>
      <div className="available-cats-header">
        <h1 className="available-cats-title">Available Cats</h1>
        <div className="filters-container">
          <select
            className="breed-select"
            value={selectedBreed}
            onChange={handleBreedChange}
          >
            <option value="">Select Breed</option>
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
          <input
            type="text"
            className="name-search"
            placeholder="Search by name"
            value={searchName}
            onChange={handleNameChange}
          />
          <button className="search-btn" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
      <hr className="divider-line" />
      <div className="mt-4 row g-4 cats-container" id="cats-container">
        {filteredCats.map((cat, i) => (
          <div key={i} className="col-md-3 col-sm-6 col-12">
            <div className="cat-card">
              <img
                src={cat.image}
                alt={cat.name}
                className="img-fluid mb-2"
                style={{
                  borderRadius: '20px',
                  height: '200px',
                  objectFit: 'cover',
                  width: '95%',
                  margin: '0 auto',
                }}
              />
              <div className="cat-info">
                <h3 className="h5 mb-1">{cat.name}</h3>
                <p className="mb-1">Age: {cat.age}</p>
                <p className="mb-0">Breed: {cat.breed}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
