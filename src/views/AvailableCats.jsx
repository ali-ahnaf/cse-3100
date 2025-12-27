import { useEffect, useState } from 'react';
import { fetchCatImages } from '../utils/fetchCats';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Abyssinian' },
  { name: 'Mittens', age: '2', breed: 'Birman' },
  { name: 'Shadow', age: '1', breed: 'Siamese' },
  { name: 'Pumpkin', age: '3', breed: 'Persian' },
  { name: 'Luna', age: '4', breed: 'Bengal' },
  { name: 'Simba', age: '2', breed: 'Sphynx' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [breedFilter, setBreedFilter] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

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

      <div className="d-flex align-items-center gap-2 mb-3">
        <select
          value={breedFilter}
          onChange={(e) => setBreedFilter(e.target.value)}
          aria-label="Filter by breed"
          className="form-select"
          style={{ maxWidth: 240 }}
        >
          <option value="">All breeds</option>
          {Array.from(new Set((cats.length ? cats : availableCats).map((c) => c.breed).filter(Boolean))).map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>

        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by name"
          aria-label="Search by name"
          className="form-control"
          style={{ maxWidth: 320 }}
        />

        <button className="btn btn-outline-secondary" onClick={() => { setSearchTerm(''); setBreedFilter(''); }}>
          Clear
        </button>
      </div>

      <div className="mt-2 cats-container">
        {loading && <p>Loading cats…</p>}
        {error && <p className="text-danger">Failed to load cats.</p>}
        {!loading && !error && (
          (() => {
            const q = searchTerm.trim().toLowerCase();
            const normalize = (s) => (s || '').toString().toLowerCase().trim().replace(/\s+/g, ' ');
            const qnorm = normalize(searchTerm);
            const filtered = cats.filter((cat) => {
              if (breedFilter && cat.breed !== breedFilter) return false;
              if (qnorm && !normalize(cat.name).includes(qnorm)) return false;
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
