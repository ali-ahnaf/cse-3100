import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Siamese' },
  { name: 'Mittens',  age: '2', breed: 'Persian' },
  { name: 'Shadow',   age: '1', breed: 'Bengal' },
  { name: 'Pumpkin',  age: '3', breed: 'Birman' },
  { name: 'Luna',     age: '4', breed: 'Abyssinian' },
  { name: 'Simba',    age: '2', breed: 'Sphynx' },
  { name: 'Oliver',   age: '1', breed: 'Peterbald' }, // Added one more for variety
];

const breeds = ['All', 'Sphynx', 'Peterbald', 'Birman', 'Abyssinian', 'Persian', 'Bengal', 'Siamese'];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(
          availableCats.map(() =>
            fetch('https://api.thecatapi.com/v1/images/search').then((res) => res.json())
          )
        );

        const catsWithImages = availableCats.map((cat, index) => ({
          ...cat,
          id: index, // Add unique id for key
          image: responses[index][0]?.url || 'https://via.placeholder.com/300', // Fallback image
        }));

        setCats(catsWithImages);
      } catch (error) {
        console.error('Error fetching cat images:', error);
        // Optional: set fallback placeholder images
      }
    };

    fetchCatImages();
  }, []);

  const filteredCats = cats.filter((cat) => {
    const matchesBreed = selectedBreed === 'All' || cat.breed === selectedBreed;
    const matchesName = cat.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesBreed && matchesName;
  });

  return (
    <section className="available-cats-section">
      {/* Header */}
      <div className="available-cats-header">
        <h2>Available Cats</h2>
        <p>Meet our adorable cats looking for their forever home!</p>

        {/* Filters */}
        <div className="filters">
          <select
            value={selectedBreed}
            onChange={(e) => setSelectedBreed(e.target.value)}
          >
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed === 'All' ? 'All Breeds' : breed}
              </option>
            ))}
          </select>

          <input
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Cat Cards Grid */}
      <div className="cats-grid">
        {filteredCats.length === 0 ? (
          <p>No cats found matching your search.</p>
        ) : (
          filteredCats.map((cat) => (
            <div key={cat.id} className="cat-card">
              <img src={cat.image} alt={cat.name} />
              <div className="cat-info">
                <h3>{cat.name}</h3>
                <p>Age: {cat.age}</p>
                <p>Breed: {cat.breed}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}