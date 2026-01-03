import { useEffect, useState } from 'react';

const ALLOWED_BREEDS = ["Sphynx", "Peterbald", "Birman", "Abyssinian", "Persian", "Bengal", "Siamese"];

const initialData = [
  { name: 'Zoe', age: '1', breed: 'Sphynx' },
  { name: 'Leo', age: '3', breed: 'Bengal' },
  { name: 'Luna', age: '2', breed: 'Siamese' },
  { name: 'Milo', age: '4', breed: 'Abyssinian' },
  { name: 'Bella', age: '2', breed: 'Persian' },
  { name: 'Jasper', age: '1', breed: 'Peterbald' },
  { name: 'Coco', age: '3', breed: 'Birman' },
  { name: 'Simba', age: '2', breed: 'Bengal' },
  { name: 'Nala', age: '5', breed: 'Siamese' },
  { name: 'Daisy', age: '2', breed: 'Abyssinian' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [search, setSearch] = useState("");
  const [breed, setBreed] = useState("");

  useEffect(() => {
    const KEY = 'available_cats_lock';
    const cached = localStorage.getItem(KEY);

    if (cached) {
      setCats(JSON.parse(cached));
    } else {
      const fetchImages = async () => {
        const results = await Promise.all(
          initialData.map(() => fetch('https://api.thecatapi.com/v1/images/search').then(r => r.json()))
        );
        const locked = initialData.map((cat, i) => ({ ...cat, image: results[i][0].url }));
        localStorage.setItem(KEY, JSON.stringify(locked));
        setCats(locked);
      };
      fetchImages();
    }
  }, []);

  const filtered = cats.filter(c => 
    c.name.toLowerCase().includes(search.toLowerCase()) && 
    (breed === "" || c.breed === breed)
  );

  return (
    <section>
      <h2 className="section-title">Available Cats</h2>
      <div className="filters-container">
        <select className="filter-input" onChange={e => setBreed(e.target.value)}>
          <option value="">select breed</option>
          {ALLOWED_BREEDS.map(b => <option key={b} value={b}>{b}</option>)}
        </select>
        <input 
          className="filter-input" 
          placeholder="search by name" 
          onChange={e => setSearch(e.target.value)} 
        />
        <button className="btn-search">search</button>
      </div>

      <div className="cat-grid">
        {filtered.map((cat, i) => (
          <div key={i} className="cat-card">
            <img src={cat.image} className="cat-img" alt={cat.name} />
            <div className="cat-info">
              <h3>{cat.name}</h3>
              <p>Age: {cat.age}</p>
              <p className="breed-tag">{cat.breed}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}