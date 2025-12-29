import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Persian' },
  { name: 'Mittens', age: '2', breed: 'Siamese' },
  { name: 'Shadow', age: '1', breed: 'Bengal' },
  { name: 'Pumpkin', age: '3', breed: 'Abyssinian' },
  { name: 'Luna', age: '4', breed: 'Birman' },
  { name: 'Simba', age: '2', breed: 'Sphynx' },
];

const BREEDS = [
  'All',
  'Sphynx',
  'Peterbald',
  'Birman',
  'Abyssinian',
  'Persian',
  'Bengal',
  'Siamese',
];
///
export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [breedFilter, setBreedFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

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
  }, []);

  return (
    <section className="mt-4">
      <h2>Available cats</h2>

      <div className="filters-row mb-4">
        <select
          value={breedFilter}
          onChange={(e) => setBreedFilter(e.target.value)}
          className="filter-select"
        >
          {BREEDS.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="search by name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="filter-input"
        />
      </div>

      <div className="available-cats-container">
        {cats
          .filter((cat) =>
            (breedFilter === 'All' || cat.breed === breedFilter) &&
            cat.name.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((cat, i) => (
            <div key={i} className="available-cat-card">
              <img src={cat.image} alt={cat.name} />
              <div className="cat-info">
                <h3>{cat.name}</h3>
                <p>Age: {cat.age}</p>
                <p>Breed: {cat.breed}</p>   {/* <-- ADD THIS LINE */}
              </div>
            </div>

          ))}
      </div>
    </section>
  );
}

