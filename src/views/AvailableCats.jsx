import { useEffect, useState } from 'react';
import { fetchCatImages } from '../utils/fetchCats';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Abyssinian' },
  { name: 'Mittens', age: '2', breed: 'Birman' },
  { name: 'Shadow', age: '1', breed: 'Siamese' },
  { name: 'Pumpkin', age: '3', breed: 'Persian' },
  { name: 'Luna', age: '4', breed: 'Bengal' },
  { name: 'Simba', age: '2', breed: 'Sphynx' },
  { name: 'Bella', age: '1', breed: 'Peterbald' },
  { name: 'Oliver', age: '5', breed: 'Persian' },
  { name: 'Chloe', age: '2', breed: 'Siamese' },
  { name: 'Leo', age: '4', breed: 'Bengal' },
  { name: 'Milo', age: '1', breed: 'Abyssinian' },
  { name: 'Nala', age: '3', breed: 'Birman' },
  { name: 'Coco', age: '2', breed: 'Peterbald' },
  { name: 'Tiger', age: '5', breed: 'Sphynx' },
  { name: 'Lily', age: '1', breed: 'Persian' },
  { name: 'Rocky', age: '4', breed: 'Bengal' },
  { name: 'Zoe', age: '2', breed: 'Birman' },
  { name: 'Oscar', age: '3', breed: 'Abyssinian' },
  { name: 'Daisy', age: '1', breed: 'Siamese' },
  { name: 'Max', age: '5', breed: 'Peterbald' }
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [breedFilter, setBreedFilter] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [nameSearch, setNameSearch] = useState('');
  const [generalSearch, setGeneralSearch] = useState('');

  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        const catsWithImages = await fetchCatImages(availableCats, controller.signal);
        setCats(catsWithImages);
      } catch (err) {
        if (err.name !== 'AbortError') setError(err);
      } finally {
        setLoading(false);
      }
    })();
    return () => controller.abort();
  }, []);

  return (
    <section className="text-center mt-4">
      <h2>Available Cats</h2>
      <p>Meet our adorable cats looking for their forever home!</p>

      <div className="d-flex align-items-center gap-2 mb-3" style={{flexWrap: 'wrap'}}>
        <input
          type="text"
          value={nameSearch}
          onChange={(e) => setNameSearch(e.target.value)}
          placeholder="Search by name"
          aria-label="Search by name"
          className="form-control"
          style={{ maxWidth: 260 }}
        />

        <select
          value={breedFilter}
          onChange={(e) => setBreedFilter(e.target.value)}
          aria-label="Filter by breed"
          className="form-select"
          style={{ maxWidth: 220 }}
        >
          <option value="">All breeds</option>
          {Array.from(new Set((cats.length ? cats : availableCats).map((c) => c.breed).filter(Boolean))).map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>

        <input
          type="search"
          value={generalSearch}
          onChange={(e) => setGeneralSearch(e.target.value)}
          placeholder="General search (name, breed, age)"
          aria-label="General search"
          className="form-control"
          style={{ maxWidth: 340 }}
        />

        <button className="btn btn-outline-secondary" onClick={() => { setSearchTerm(''); setBreedFilter(''); setNameSearch(''); setGeneralSearch(''); }}>
          Clear
        </button>
      </div>

      <div className="mt-2 cats-container">
        {loading && <p>Loading cats…</p>}
        {error && <p className="text-danger">Failed to load cats.</p>}
        {!loading && !error && (
          (() => {
            const normalize = (s) => (s || '').toString().toLowerCase().trim().replace(/\s+/g, ' ');
            const nameQ = normalize(nameSearch);
            const genQ = normalize(generalSearch);
            const filtered = cats.filter((cat) => {
              if (breedFilter && cat.breed !== breedFilter) return false;
              if (nameQ && !normalize(cat.name).includes(nameQ)) return false;
              if (genQ) {
                const hay = [cat.name, cat.breed, cat.age].map(normalize).join(' ');
                if (!hay.includes(genQ)) return false;
              }
              return true;
            });
            if (filtered.length === 0) return <p>No cats found.</p>;
            return filtered.map((cat) => (
              <div key={cat.name} className="cat-item">
                <div className="cat-card">
                  <img src={cat.image} alt={cat.name} className="img-fluid mb-2" />
                  <div className="cat-info">
                    <h3 className="h5 mb-1">{cat.name}</h3>
                    <p className="mb-0">Age: {cat.age}</p>
                    <p className="mb-0">Breed: {cat.breed}</p>
                  </div>
                </div>
              </div>
            ));
          })()
        )}
      </div>
    </section>
  );
}
