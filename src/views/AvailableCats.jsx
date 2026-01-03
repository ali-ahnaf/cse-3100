import { useEffect, useState } from 'react';

const availableCats = [
  { id: 1, name: 'Whiskers', age: '2', breed: 'Siamese' },
  { id: 2, name: 'Mittens', age: '2', breed: 'Persian' },
  { id: 3, name: 'Shadow', age: '1', breed: 'Bengal' },
  { id: 4, name: 'Pumpkin', age: '3', breed: 'Sphynx' },
  { id: 5, name: 'Luna', age: '4', breed: 'Abyssinian' },
  { id: 6, name: 'Simba', age: '2', breed: 'Birman' },
  { id: 7, name: 'Tiger', age: '3', breed: 'Peterbald' },
  { id: 8, name: 'Bella', age: '1', breed: 'Siamese' },
  { id: 9, name: 'Oliver', age: '2', breed: 'Bengali' },
];

const BREEDS = [
  'Sphynx',
  'Peterbald',
  'Birman',
  'Abyssinian',
  'Persian',
  'Bengal',
  'Siamese',
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('');
  const [searchName, setSearchName] = useState('');
  const [filteredCats, setFilteredCats] = useState([]);

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
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  }, []); // FIXED: Added empty dependency array

  // Filter cats whenever cats, selectedBreed, or searchName changes
  useEffect(() => {
    let filtered = cats;

    // Filter by breed
    if (selectedBreed) {
      filtered = filtered.filter((cat) => cat.breed === selectedBreed);
    }

    // Filter by name
    if (searchName) {
      filtered = filtered.filter((cat) =>
        cat.name.toLowerCase().includes(searchName.toLowerCase())
      );
    }

    setFilteredCats(filtered);
  }, [cats, selectedBreed, searchName]);

  return (
    <section>
      <h2>Available Cats</h2>
      <p>Meet our adorable cats looking for their forever home!</p>

      {/* Filters Section */}
      <div className="filters-section">
        <div className="filter-group">
          <label htmlFor="breed-filter">Filter by Breed:</label>
          <select
            id="breed-filter"
            value={selectedBreed}
            onChange={(e) => setSelectedBreed(e.target.value)}
          >
            <option value="">All Breeds</option>
            {BREEDS.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
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
      </div>

      {/* Cats Grid */}
      <div className="cats-container">
        {filteredCats.length > 0 ? (
          filteredCats.map((cat) => (
            <div key={cat.id}>
              <div className="cat-card">
                <img src={cat.image} alt={cat.name} />
                <div className="cat-info">
                  <h3 className="h5 mb-1">{cat.name}</h3>
                  <p className="mb-0">Breed: {cat.breed}</p>
                  <p className="mb-0">Age: {cat.age} years</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p style={{ gridColumn: '1 / -1', textAlign: 'center' }}>
            No cats found matching your filters. Try adjusting your search!
          </p>
        )}
      </div>
    </section>
  );
}
