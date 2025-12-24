import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Persian' },
  { name: 'Mittens', age: '2', breed: 'Siamese' },
  { name: 'Shadow', age: '2', breed: 'Maine Coon' },
  { name: 'Pumpkin', age: '2', breed: 'Ragdoll' },
  { name: 'Luna', age: '2', breed: 'Persian' },
  { name: 'Simba', age: '2', breed: 'Siamese' },
  { name: 'Oliver', age: '2', breed: 'Maine Coon' },
  { name: 'Bella', age: '2', breed: 'Ragdoll' },
];

// Get unique breeds from available cats
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
    let results = cats;

    // Filter by breed
    if (selectedBreed) {
      results = results.filter(cat => cat.breed === selectedBreed);
    }

    // Filter by name
    if (searchName.trim()) {
      results = results.filter(cat =>
        cat.name.toLowerCase().includes(searchName.toLowerCase())
      );
    }

    setFilteredCats(results);
  };

  return (
    <section className="available-cats-section">
      <div className="available-cats-header">
        <h2>Available cats</h2>
        <div className="search-controls">
          <select
            className="breed-select"
            value={selectedBreed}
            onChange={(e) => setSelectedBreed(e.target.value)}
          >
            <option value="">select breed</option>
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
          <input
            type="text"
            className="search-input"
            placeholder="search by name"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
          />
          <button className="search-btn" onClick={handleSearch}>
            search
          </button>
        </div>
      </div>
      <hr className="divider" />

      <div className="cats-grid" id="cats-container">
        {filteredCats.map((cat, i) => (
          <div key={i} className="cat-card">
            {cat.image ? (
              <img src={cat.image} alt={cat.name} />
            ) : (
              <div className="cat-image-placeholder"></div>
            )}
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
