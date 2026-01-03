import { useEffect, useMemo, useState } from 'react';

const AVAILABLE_CATS = [
  { name: 'Whiskers', age: '2', breed: 'Birman' },
  { name: 'Mittens', age: '2', breed: 'Persian' },
  { name: 'Shadow', age: '1', breed: 'Siamese' },
  { name: 'Pumpkin', age: '3', breed: 'Bengal' },
  { name: 'Luna', age: '4', breed: 'Abyssinian' },
  { name: 'Simba', age: '2', breed: 'Sphynx' },
  { name: 'Cleo', age: '3', breed: 'Peterbald' },
  { name: 'Nala', age: '1', breed: 'Persian' },
  { name: 'Jinx', age: '2', breed: 'Bengal' },
  { name: 'Mocha', age: '5', breed: 'Birman' },
  { name: 'Ziggy', age: '1', breed: 'Siamese' },
  { name: 'Ginger', age: '3', breed: 'Abyssinian' },
  { name: 'Pepper', age: '2', breed: 'Peterbald' },
  { name: 'Mango', age: '4', breed: 'Sphynx' },
  { name: 'Poppy', age: '2', breed: 'Persian' },
  { name: 'Ollie', age: '3', breed: 'Bengal' },
];

const ALL_BREEDS = [
  'All',
  'Sphynx',
  'Peterbald',
  'Birman',
  'Abyssinian',
  'Persian',
  'Bengal',
  'Siamese',
];
const breedDescriptions = {
  Sphynx: 'Hairless, affectionate and energetic — needs regular skin care.',
  Peterbald: 'Slim, elegant, playful; often hairless or with fine coat.',
  Birman: 'Gentle, sociable, and striking blue eyes.',
  Abyssinian: 'Active, intelligent and very curious.',
  Persian: 'Calm, long-haired, requires regular grooming.',
  Bengal: 'Vibrant, playful, and loves to climb.',
  Siamese: 'Vocal, intelligent, and highly social.',
};

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [breedFilter, setBreedFilter] = useState('All');
  const [searchInput, setSearchInput] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // fetch images once for each card
  useEffect(() => {
    let cancelled = false;

    const fetchImages = async () => {
      try {
        const responses = await Promise.all(
          AVAILABLE_CATS.map(() =>
            fetch('https://api.thecatapi.com/v1/images/search').then((r) => r.json())
          )
        );

        const withImages = AVAILABLE_CATS.map((c, i) => ({
          ...c,
          image: responses[i] && responses[i][0] ? responses[i][0].url : '',
        }));

        if (!cancelled) setCats(withImages);
      } catch (err) {
        console.error('Error fetching cat images', err);
        if (!cancelled) {
          // fallback to empty images
          setCats(AVAILABLE_CATS.map((c) => ({ ...c, image: '' })));
        }
      }
    };

    fetchImages();
    return () => { cancelled = true; };
  }, []);

  // apply filters
  const filtered = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    return cats.filter((c) => {
      const matchesBreed = breedFilter === 'All' || c.breed === breedFilter;
      const matchesName = c.name.toLowerCase().includes(term);
      return matchesBreed && matchesName;
    });
  }, [cats, breedFilter, searchTerm]);

  function handleSearchClick() {
    setSearchTerm(searchInput);
  }

  function clearFilters() {
    setBreedFilter('All');
    setSearchInput('');
    setSearchTerm('');
  }

  return (
    <section>
      <h2 style={{ marginTop: 0 }}>Available cats</h2>
      <p className="muted" style={{ marginTop: 4 }}>
        Browse our adoptable cats. Use filters to refine results.
      </p>

      <div className="available-controls" aria-label="Available cats filters">
        <label htmlFor="breed-select" style={{ display: 'none' }}>Filter by breed</label>
        <select
          id="breed-select"
          value={breedFilter}
          onChange={(e) => setBreedFilter(e.target.value)}
          className="filter-select"
        >
          {ALL_BREEDS.map((b) => (
            <option key={b} value={b}>{b}</option>
          ))}
        </select>

        <input
          type="search"
          placeholder="Search by name"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') handleSearchClick(); }}
          className="filter-search"
          aria-label="Search cats by name"
        />

        <button type="button" onClick={handleSearchClick} className="btn-primary filter-btn">Search</button>
        <button type="button" onClick={clearFilters} className="btn-outline filter-btn">Clear</button>

        <div style={{ marginLeft: 'auto', color: 'var(--muted)', fontSize: '0.95rem' }}>
          {filtered.length} of {cats.length || AVAILABLE_CATS.length}
        </div>
      </div>

      <hr style={{ marginTop: 12, marginBottom: 12, borderColor: 'rgba(0,0,0,0.06)' }} />

      <div className="cats-grid" role="list" aria-live="polite">
        {filtered.length === 0 ? (
          <p>No cats match your search.</p>
        ) : (
          filtered.map((cat, i) => (
            <article
              key={i}
              className="cat-card card-enter"
              role="listitem"
              aria-label={`${cat.name}, ${cat.breed}`}
              style={{ animationDelay: `${i * 40}ms` }}
            >
              <div className="card-media">
                {cat.image ? (
                  <img src={cat.image} alt={cat.name} />
                ) : (
                  <div style={{ height: '100%', background: 'linear-gradient(90deg,#eee,#f7f7f7)' }} />
                )}
              </div>

              <div className="cat-info">
                <h4 className="cat-name">{cat.name}</h4>
                <p className="cat-age">Age: {cat.age}</p>
                <span
                  className="cat-breed"
                  data-desc={breedDescriptions[cat.breed] || 'Breed information'}
                  tabIndex={0}
                >
                  {cat.breed}
                </span>
              </div>
            </article>
          ))
        )}
      </div>
    </section>
  );
}