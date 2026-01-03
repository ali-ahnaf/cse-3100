import { useEffect, useMemo, useState } from 'react';

const BREEDS = [
  'Sphynx',
  'Peterbald',
  'Birman',
  'Abyssinian',
  'Persian',
  'Bengal',
  'Siamese',
];

const BREED_IDS = {
  Sphynx: 'sph',
  Peterbald: 'pete',
  Birman: 'birm',
  Abyssinian: 'abys',
  Persian: 'pers',
  Bengal: 'beng',
  Siamese: 'siam',
};

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Siamese' },
  { name: 'Mittens', age: '2', breed: 'Bengal' },
  { name: 'Shadow', age: '1', breed: 'Persian' },
  { name: 'Pumpkin', age: '3', breed: 'Abyssinian' },
  { name: 'Luna', age: '4', breed: 'Birman' },
  { name: 'Simba', age: '2', breed: 'Sphynx' },
  { name: 'Cleo', age: '1', breed: 'Peterbald' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [breed, setBreed] = useState('All Breeds');
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(
          availableCats.map((cat) => {
            const breedId = BREED_IDS[cat.breed];
            return fetch(
              `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`
            ).then((res) => res.json());
          })
        );

        const catsWithImages = availableCats.map((cat, index) => ({
          ...cat,
          image: responses[index][0]?.url || 'https://placekitten.com/300/200', // fallback
        }));

        setCats(catsWithImages);
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  }, []);

  const filteredCats = useMemo(() => {
    const q = query.toLowerCase();
    return cats.filter((c) => {
      const matchesBreed = breed === 'All Breeds' || c.breed === breed;
      const matchesName = c.name.toLowerCase().includes(q);
      return matchesBreed && matchesName;
    });
  }, [cats, breed, query]);

  return (
    <main>
      <div className="container">
        <h2 className="page-title">Available Cats</h2>

        <div className="filters">
          <select
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            className="filter-dropdown"
          >
            <option>All Breeds</option>
            {BREEDS.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>

          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name..."
            className="search-box"
          />
        </div>

        <div className="cat-grid">
          {filteredCats.map((cat, i) => (
            <div key={i} className="cat-card">
              <img src={cat.image} alt={cat.name} className="cat-image" />
              <div className="cat-info">
                <h3 className="cat-name">{cat.name}</h3>
                <p className="cat-breed"><strong>Breed:</strong> {cat.breed}</p>
                <p className="cat-age"><strong>Age:</strong> {cat.age}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
