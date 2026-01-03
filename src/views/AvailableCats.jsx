import { useEffect, useMemo, useState } from 'react';

const BREEDS = [
  'Sphynx',
  'Peterbald',
  'Birman',
  'Abyssinian',
  'Persian',
  'Bengal',
  'Siamese',
];

const availableCats = [
  {
    name: 'Whiskers', age: '2', breed: 'Bengal' 
  },
  {
    name: 'Mittens', age: '2', breed: 'Persian' 
  },
  { 
    name: 'Shadow', age: '1', breed: 'Siamese' 
  },
  { 
    name: 'Pumpkin', age: '3', breed: 'Abyssinian' 
  },
  { 
    name: 'Luna', age: '4', breed: 'Birman' 
  },
  { 
    name: 'Simba', age: '2', breed: 'Sphynx' 
  },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [breed, setBreed] = useState('All');
  const [searchInput, setSearchInput] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const responses = await Promise.all(
          availableCats.map(() =>
            fetch('https://api.thecatapi.com/v1/images/search').then(res => res.json())
          )
        );

        setCats(
          availableCats.map((cat, i) => ({
            ...cat,
            image: responses[i][0].url,
          }))
        );
      } catch {
        setCats(availableCats);
      }
    };

    fetchImages();
  }, []);

  const filteredCats = useMemo(() => {
    return cats.filter(cat => {
      const matchBreed = breed === 'All' || cat.breed === breed;
      const matchName = cat.name.toLowerCase().includes(search.toLowerCase());
      return matchBreed && matchName;
    });
  }, [cats, breed, search]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(searchInput);
  };

  return (
    <section className="section">
      <h2>Available cats</h2>

      <form className="filters" onSubmit={handleSearch}>
        <select
          className="filter-control"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
        >
          <option value="All">select breed</option>
          {BREEDS.map(b => (
            <option key={b} value={b}>{b}</option>
          ))}
        </select>

        <input
          className="filter-control"
          type="text"
          placeholder="search by name"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />

        <button className="btn">Search</button>
      </form>

      <div className="cats-grid">
        {filteredCats.map((cat, i) => (
          <div key={i} className="cat-card">
            {cat.image && <img src={cat.image} alt={cat.name} className="cat-img" />}
            <div className="cat-info">
              <div className="cat-name">{cat.name}</div>
              <div className="cat-meta">Age: {cat.age}</div>
              <div className="cat-meta">Breed: {cat.breed}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
