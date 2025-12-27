import { useEffect, useState, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Persian' },
  { name: 'Mittens', age: '2', breed: 'Bengal' },
  { name: 'Shadow', age: '1', breed: 'Siamese' },
  { name: 'Pumpkin', age: '3', breed: 'Peterbald' },
  { name: 'Luna', age: '4', breed: 'Birman' },
  { name: 'Simba', age: '2', breed: 'Abyssinian' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [breedFilter, setBreedFilter] = useState('All');
  const [nameQuery, setNameQuery] = useState('');

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(
          availableCats.map(() =>
            fetch('https://api.thecatapi.com/v1/images/search')
              .then(res => res.json())
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

  const navigate = useNavigate();
  const location = useLocation();

  // initialize filter from query param if present
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const q = params.get('breed');
    if (q) setBreedFilter(q);
  }, [location.search]);

  // push breed filter to URL
  useEffect(() => {
    const base = location.pathname;
    if (!breedFilter || breedFilter === 'All') {
      navigate(base, { replace: true });
    } else {
      navigate(`${base}?breed=${encodeURIComponent(breedFilter)}`, { replace: true });
    }
    // only when breedFilter changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [breedFilter]);

  // derive list of breeds for the dropdown
  const breedOptions = useMemo(() => {
    const breeds = Array.from(new Set(availableCats.map((c) => c.breed))).filter(Boolean);
    breeds.sort();
    return ['All', ...breeds];
  }, []);

  const filteredCats = useMemo(() => {
    return cats.filter((c) => {
      const matchesBreed = breedFilter === 'All' || c.breed === breedFilter;
      const matchesName = c.name.toLowerCase().includes(nameQuery.trim().toLowerCase());
      return matchesBreed && matchesName;
    });
  }, [cats, breedFilter, nameQuery]);

  return (
      <section className="text-center">
        <h2>Available Cats</h2>
        <p className="lead">Meet our adorable cats looking for their forever home!</p>
      <div className="filters">
        <div className="filter-group">
          <label htmlFor="breed-select">Filter by breed</label>
          <select id="breed-select" value={breedFilter} onChange={(e) => setBreedFilter(e.target.value)}>
            {breedOptions.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="name-search">Search by name</label>
          <input id="name-search" type="text" value={nameQuery} onChange={(e) => setNameQuery(e.target.value)} placeholder="e.g. Whiskers" />
        </div>

        <div className="filter-actions">
          <button className="filter-clear-btn" onClick={() => { setBreedFilter('All'); setNameQuery(''); }}>Clear filters</button>
        </div>
      </div>

      <div className="cats-container">
        {filteredCats.map((cat, i) => (
          <div key={i} className="cat-card">
            <img src={cat.image} alt={cat.name} />
            <div className="cat-info">
              <h3>{cat.name}</h3>
              <p>Breed: {cat.breed}</p>
              <p>Age: {cat.age}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
