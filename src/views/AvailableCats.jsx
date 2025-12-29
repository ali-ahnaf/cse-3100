import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Sphynx' },
  { name: 'Mittens', age: '2', breed: 'Persian' },
  { name: 'Shadow', age: '1', breed: 'Bengal' },
  { name: 'Pumpkin', age: '3', breed: 'Peterbald' },
  { name: 'Luna', age: '4', breed: 'Birman' },
  { name: 'Simba', age: '2', breed: 'Abyssinian' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [breedFilter, setBreedFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

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
  // derive list of breeds (unique) for the dropdown
  const breedOptions = ['All', ...Array.from(new Set(availableCats.map((c) => c.breed)))];

  const filteredCats = cats.filter((cat) => {
    const matchesBreed = breedFilter === 'All' || cat.breed === breedFilter;
    const matchesName = cat.name.toLowerCase().includes(searchTerm.trim().toLowerCase());
    return matchesBreed && matchesName;
  });

  return (
    <section className="text-center mt-4">
      <h2>Available Cats</h2>
      <p>Meet our adorable cats looking for their forever home!</p>

      <div className="filters mt-2">
        <label htmlFor="breed-select" className="sr-only">Filter by breed</label>
        <select
          id="breed-select"
          value={breedFilter}
          onChange={(e) => setBreedFilter(e.target.value)}
          aria-label="Filter cats by breed"
        >
          {breedOptions.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>

        <label htmlFor="name-search" className="sr-only">Search by name</label>
        <input
          id="name-search"
          type="search"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label="Search cats by name"
        />

        <button
          type="button"
          className="clear-btn"
          title="Clear filters"
          onClick={() => {
            setBreedFilter('All');
            setSearchTerm('');
            // optional: focus the search input after clearing
            const el = document.getElementById('name-search');
            if (el) el.focus();
          }}
        >
          Clear
        </button>
      </div>

      <div className="mt-2 cats-container" id="cats-container">
        {filteredCats.length === 0 ? (
          <p>No cats found for the selected filters.</p>
        ) : (
          filteredCats.map((cat, i) => (
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
                <p className="mb-0">
                  Breed:
                  <span className="breed-badge">{cat.breed}</span>
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
