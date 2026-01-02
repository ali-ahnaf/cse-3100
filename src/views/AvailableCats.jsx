import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Persian' },
  { name: 'Mittens', age: '3', breed: 'Siamese' },
  { name: 'Shadow', age: '1', breed: 'Sphynx' },
  { name: 'Pumpkin', age: '3', breed: 'Persian' },
  { name: 'Luna', age: '4', breed: 'Bengal' },
  { name: 'Simba', age: '2', breed: 'Siamese' },
  { name: 'Oliver', age: '2', breed: 'Birman' },
  { name: 'Bella', age: '1', breed: 'Abyssinian' },
  { name: 'Charlie', age: '3', breed: 'Bengal' },
  { name: 'Lucy', age: '2', breed: 'Persian' },
  { name: 'Max', age: '4', breed: 'Peterbald' },
  { name: 'Daisy', age: '1', breed: 'Siamese' },
];

export default function AvailableCats() {
  const [allCats, setAllCats] = useState([]);
  const [displayedCats, setDisplayedCats] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('');
  const [searchName, setSearchName] = useState('');
  const [hasSearched, setHasSearched] = useState(false);

  // Get unique breeds for dropdown
  const breeds = ['All', ...new Set(availableCats.map(cat => cat.breed))];

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

        setAllCats(catsWithImages);
        setDisplayedCats(catsWithImages); // Display all cats initially
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  }, []);

  const handleSearch = () => {
    let filtered = allCats;

    // Filter by breed
    if (selectedBreed && selectedBreed !== 'All') {
      filtered = filtered.filter(cat => cat.breed === selectedBreed);
    }

    // Filter by name
    if (searchName.trim()) {
      filtered = filtered.filter(cat =>
        cat.name.toLowerCase().includes(searchName.toLowerCase())
      );
    }

    setDisplayedCats(filtered);
    setHasSearched(true);
  };

  return (
    <>
      <section className="available-cats-header">
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
            className="name-search"
            placeholder="search by name"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          />
          <button className="search-button" onClick={handleSearch}>
            search
          </button>
        </div>
      </section>

      <section className="cats-results">
        <div className="cat-grid">
          {displayedCats.map((cat, i) => (
            <div key={i} className="cat-card">
              <img src={cat.image} alt={cat.name} />
              <div className="cat-info">
                <h3>{cat.name}</h3>
                <p className="cat-breed">{cat.breed}</p>
                <p>Age: {cat.age}</p>
              </div>
            </div>
          ))}
        </div>
        {displayedCats.length === 0 && (
          <p className="no-results">No cats found matching your search.</p>
        )}
      </section>
    </>
  );
}
