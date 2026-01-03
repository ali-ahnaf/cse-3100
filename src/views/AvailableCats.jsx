import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Persian' },
  { name: 'Mittens', age: '2', breed: 'Birman' },
  { name: 'Shadow', age: '1', breed: 'Siamese' },
  { name: 'Pumpkin', age: '3', breed: 'Bengal' },
  { name: 'Luna', age: '4', breed: 'Sphynx' },
  { name: 'Simba', age: '2', breed: 'Abyssinian' },
];

const breeds = ['All Breeds', 'Sphynx', 'Birman', 'Abyssinian', 'Persian', 'Bengal', 'Siamese'];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [search, setSearch] = useState('');
  const [breedFilter, setBreedFilter] = useState('All Breeds');

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(
          availableCats.map(() => fetch('https://api.thecatapi.com/v1/images/search').then((res) => res.json()))
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

  const filteredCats = cats.filter(cat => {
    const matchesSearch = cat.name.toLowerCase().includes(search.toLowerCase());
    const matchesBreed = breedFilter === 'All Breeds' || cat.breed === breedFilter;
    return matchesSearch && matchesBreed;
  });

  return (
    <div>
      <header>
        <Link to="/" className="logo">Purrfect Adoption</Link>
        <nav>
          <Link to="/available-cats">Available cats</Link>
          <Link to="/donate">Donate</Link>
        </nav>
      </header>

      <main>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
          <h2>Available Cats</h2>
          <div style={{ display: 'flex', gap: '10px' }}>
            <select className="form-select" onChange={(e) => setBreedFilter(e.target.value)} style={{ padding: '8px', borderRadius: '8px' }}>
              {breeds.map(b => <option key={b} value={b}>{b}</option>)}
            </select>
            <input 
              type="text" 
              placeholder="search by name" 
              className="form-control"
              onChange={(e) => setSearch(e.target.value)} 
              style={{ padding: '8px', borderRadius: '8px', border: '1px solid #ccc' }}
            />
          </div>
        </div>

        <div className="cat-grid">
          {filteredCats.map((cat, i) => (
            <div key={i} className="cat-card">
              <div className="cat-image-container">
                <img src={cat.image} alt={cat.name} />
              </div>
              <div className="cat-info">
                <h3>{cat.name}</h3>
                <p>Age: {cat.age} | {cat.breed}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}