import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Siamese' },
  { name: 'Mittens', age: '2', breed: 'Birman' },
  { name: 'Shadow', age: '1', breed: 'Persian' },
  { name: 'Pumpkin', age: '3', breed: 'Bengal' },
  { name: 'Luna', age: '4', breed: 'Abyssinian' },
  { name: 'Simba', age: '2', breed: 'Sphynx' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [breedFilter, setBreedFilter] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

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
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  }, []);

  return (
    <section className="text-center mt-4">
      <h2>Available Cats</h2>
      <p style={{ textAlign: 'center' }}>Meet our adorable cats looking for their forever home!</p>

      <div className="mt-2">
        <div className="filters">
          <div className="filter-item">
            <label htmlFor="breed-select">Filter by breed:&nbsp;</label>
            <select
              id="breed-select"
              value={breedFilter}
              onChange={(e) => setBreedFilter(e.target.value)}
            >
              <option value="">All Breeds</option>
              {Array.from(new Set(availableCats.map((c) => c.breed)))
                .sort()
                .map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
            </select>
          </div>

          <div className="filter-item">
            <label htmlFor="search-input">Search by name:&nbsp;</label>
            <input
              id="search-input"
              type="search"
              placeholder="e.g. Whiskers"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="cats-container">
          {cats
            .filter((cat) => {
              const matchesBreed = !breedFilter || cat.breed === breedFilter;
              const matchesSearch = cat.name
                .toLowerCase()
                .includes(searchQuery.trim().toLowerCase());
              return matchesBreed && matchesSearch;
            })
            .map((cat, i) => (
              <div key={i} className="cat-card">
            <img
              src={cat.image}
              alt={cat.name}
              className="img-fluid mb-2"
              style={{
                borderRadius: '8px',
                height: '200px',
                objectFit: 'cover',
              }}
            />
            <div className="cat-info">
              <h3 className="h5 mb-1">{cat.name}</h3>
              <p className="mb-0">Age: {cat.age}</p>
              <p className="mb-0">Breed: {cat.breed}</p>
            </div>
          </div>
          ))}
        </div>
        {cats.length > 0 &&
          cats.filter((cat) => {
            const matchesBreed = !breedFilter || cat.breed === breedFilter;
            const matchesSearch = cat.name
              .toLowerCase()
              .includes(searchQuery.trim().toLowerCase());
            return matchesBreed && matchesSearch;
          }).length === 0 && (
            <p style={{ marginTop: '1rem' }}>No cats match your filters.</p>
          )}
      </div>
    </section>
  );
}
