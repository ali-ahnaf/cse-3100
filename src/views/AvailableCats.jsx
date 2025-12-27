import { useEffect, useState, useMemo } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Abyssinian' },
  { name: 'Mittens', age: '2', breed: 'Persian' },
  { name: 'Shadow', age: '1', breed: 'Bengal' },
  { name: 'Pumpkin', age: '3', breed: 'Birman' },
  { name: 'Luna', age: '4', breed: 'Siamese' },
  { name: 'Simba', age: '2', breed: 'Sphynx' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);

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

  // Filter UI state
  const [filterBreed, setFilterBreed] = useState('All');
  const [searchName, setSearchName] = useState('');

  // breed options derived from available data
  const breeds = ['All', ...Array.from(new Set(cats.map((c) => c.breed)))];

  const filteredCats = useMemo(() => {
    const q = searchName.trim().toLowerCase();
    return cats.filter((cat) => {
      const matchesBreed = filterBreed === 'All' || cat.breed === filterBreed;
      const matchesName = cat.name.toLowerCase().includes(q);
      return matchesBreed && matchesName;
    });
  }, [cats, filterBreed, searchName]);

  return (
    <section className="text-center mt-4">
      <h2>Available Cats</h2>
      <p>Meet our adorable cats looking for their forever home!</p>

      <div className="mt-2 filters-container">
        <div className="filters mb-3" role="region" aria-label="Filters">
          <select id="breed-filter" value={filterBreed} onChange={(e) => setFilterBreed(e.target.value)} aria-label="Filter by breed">
            {breeds.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>

          <input
            id="name-search"
            type="text"
            placeholder="Search by name"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
            aria-label="Search by name"
          />

          <button type="button" className="clear-btn" onClick={() => { setFilterBreed('All'); setSearchName(''); }}>
            Clear
          </button>
        </div>

        <div className="cats-container" id="cats-container">
          {filteredCats.length === 0 ? (
            <p>No cats match your filters.</p>
          ) : (
            filteredCats.map((cat, i) => (
              <div key={i} className="cat-item">
                <div className="cat-card">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="cat-img img-fluid mb-2"
                  />
                  <div className="cat-info">
                    <h3 className="h5 mb-1">{cat.name}</h3>
                    <p className="mb-0">Age: {cat.age}</p>
                    <p className="mb-0">Breed: <span className="breed-badge">{cat.breed}</span></p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
