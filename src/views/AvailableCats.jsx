import { useEffect, useState, useMemo } from 'react';
import { getCats, BREEDS } from '../lib/getCats';

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    let mounted = true;
    
    getCats(16).then((data) => {
      if (mounted) setCats(data);
    });
    return () => (mounted = false);
  }, []);

  const filteredCats = useMemo(() => {
    const normalize = (s = '') =>
      s
        .toString()
        .normalize('NFD')
        .replace(/\p{Diacritic}/gu, '')
        .toLowerCase();

    const q = normalize(searchTerm.trim());

    return cats.filter((cat) => {
      const matchesBreed = selectedBreed === 'all' || cat.breed === selectedBreed;
      if (!q) return matchesBreed;
      const name = normalize(cat.name);
      const matchesSearch = name.includes(q);
      return matchesBreed && matchesSearch;
    });
  }, [cats, selectedBreed, searchTerm]);

  return (
    <section className="text-center mt-4">
      <h2>Available Cats</h2>

      <div className="filters">
        <label htmlFor="cats">Select Breed:</label>
        <select
          name="cats"
          id="cats"
          className="filter-select"
          value={selectedBreed}
          onChange={(e) => setSelectedBreed(e.target.value)}
        >
          <option value="all">All breeds</option>
          {BREEDS.map((b) => (
            <option key={b} value={b}>{b}</option>
          ))}
        </select>

        <input
          type="text"
          className="filter-search"
          placeholder="Search by name..."
          aria-label="Search cats by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="mt-2 row g-4 cats-container" id="cats-container">
        {filteredCats.map((cat, i) => (
          <div key={i} className="col-md-4">
            <div className="cat-card">
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
                <p className="mb-0">Breed: {cat.breed}</p>
                <p className="mb-0">Age: {cat.age}</p>
              </div>
            </div>
          </div>
        ))}
        {filteredCats.length === 0 && (
          <div style={{ width: '100%', textAlign: 'center', padding: '2rem 0' }}>
            <p style={{ color: '#666' }}>No cats match your search.</p>
          </div>
        )}
      </div>
    </section>
  );
}
