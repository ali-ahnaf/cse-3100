// AvailableCats.jsx
import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Persian' },
  { name: 'Mittens', age: '2', breed: 'Bengal' },
  { name: 'Shadow', age: '1', breed: 'Sphynx' },
  { name: 'Pumpkin', age: '3', breed: 'Birman' },
  { name: 'Luna', age: '4', breed: 'Abyssinian' },
  { name: 'Simba', age: '2', breed: 'Siamese' },
  { name: 'Nicky', age: '2', breed: 'Peterbald' },
  { name: 'Fluffy', age: '5', breed: 'Persian' },
  { name: 'Tiger', age: '3', breed: 'Bengal' },
];

const BREEDS = ['All', 'Sphynx', 'Peterbald', 'Birman', 'Abyssinian', 'Persian', 'Bengal', 'Siamese'];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [search, setSearch] = useState('');
  const [breedFilter, setBreedFilter] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCatImages = async () => {
      setLoading(true);
      try {
        const responses = await Promise.all(
          availableCats.map(() =>
            fetch('https://api.thecatapi.com/v1/images/search')
              .then(res => res.json())
              .catch(() => [{ url: `https://placekitten.com/300/200?image=${Math.floor(Math.random() * 10) + 1}` }])
          )
        );

        const catsWithImages = availableCats.map((cat, index) => ({
          ...cat,
          image: responses[index][0].url,
        }));

        setCats(catsWithImages);
      } catch (error) {
        console.error('Error fetching cat images:', error);
        // Fallback to placeholder images
        const catsWithFallback = availableCats.map((cat, index) => ({
          ...cat,
          image: `https://placekitten.com/300/200?image=${index + 1}`,
        }));
        setCats(catsWithFallback);
      } finally {
        setLoading(false);
      }
    };

    fetchCatImages();
  }, []);

  const filteredCats = cats.filter(cat => {
    return (
      (breedFilter === 'All' || cat.breed === breedFilter) &&
      cat.name.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <section className="text-center">
      <h1>Available Cats</h1>
      <p>Meet our adorable cats looking for their forever home!</p>

      {/* FIX 4: Filtering options */}
      <div className="filters-container">
        <select
          className="filter-select"
          value={breedFilter}
          onChange={e => setBreedFilter(e.target.value)}
        >
          {BREEDS.map(breed => (
            <option key={breed} value={breed}>
              {breed === 'All' ? 'All Breeds' : breed}
            </option>
          ))}
        </select>

        <input
          className="filter-input"
          type="text"
          placeholder="Search cat name..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      {loading ? (
        <p>Loading cats...</p>
      ) : filteredCats.length === 0 ? (
        <p>No cats found matching your criteria.</p>
      ) : (
        // FIX 1: Using CSS Grid
        <div className="cats-grid">
          {filteredCats.map((cat, i) => (
            <div key={i} className="cat-card">
              <img
                src={cat.image}
                alt={cat.name}
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                }}
              />
              <div className="cat-info">
                <h3>{cat.name}</h3>
                <p>Age: {cat.age} years</p>
                <p>Breed: {cat.breed}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}