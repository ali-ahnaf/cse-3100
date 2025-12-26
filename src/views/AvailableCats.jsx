import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Persian' },
  { name: 'Mittens', age: '2', breed: 'Siamese' },
  { name: 'Shadow', age: '2', breed: 'Maine Coon' },
  { name: 'Pumpkin', age: '2', breed: 'Persian' },
  { name: 'Luna', age: '2', breed: 'Bengal' },
  { name: 'Simba', age: '2', breed: 'Siamese' },
  { name: 'Oliver', age: '2', breed: 'Maine Coon' },
  { name: 'Bella', age: '2', breed: 'Bengal' },
];

// Get unique breeds for dropdown
const breeds = [...new Set(availableCats.map(cat => cat.breed))];

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
    let result = cats;

    if (selectedBreed) {
      result = result.filter(cat => cat.breed === selectedBreed);
    }

    if (searchName.trim()) {
      result = result.filter(cat => 
        cat.name.toLowerCase().includes(searchName.toLowerCase())
      );
    }

    setFilteredCats(result);
  };

  const handleBreedChange = (e) => {
    const breed = e.target.value;
    setSelectedBreed(breed);
    
    let result = cats;
    if (breed) {
      result = result.filter(cat => cat.breed === breed);
    }
    if (searchName.trim()) {
      result = result.filter(cat => 
        cat.name.toLowerCase().includes(searchName.toLowerCase())
      );
    }
    setFilteredCats(result);
  };

  return (
    <section className="available-cats-section">
      <div className="available-cats-header">
        <h2>Available cats</h2>
        <div className="filter-controls">
          <select 
            className="filter-select"
            value={selectedBreed}
            onChange={handleBreedChange}
          >
            <option value="">Select Breed</option>
            {breeds.map((breed, i) => (
              <option key={i} value={breed}>{breed}</option>
            ))}
          </select>
          <input
            type="text"
            className="filter-input"
            placeholder="Search by Name"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
          />
          <button className="filter-button" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>

      <div className="cats-grid cats-grid-large">
        {filteredCats.map((cat, i) => (
          <div key={i} className="cat-card cat-card-large">
            <img
              src={cat.image}
              alt={cat.name}
            />
            <div className="cat-info">
              <h3>{cat.name}</h3>
              <p>Age: {cat.age}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
