import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Persian' },
  { name: 'Mittens', age: '2', breed: 'Siamese' },
  { name: 'Shadow', age: '1', breed: 'Bengal' },
  { name: 'Pumpkin', age: '3', breed: 'Abyssinian' },
  { name: 'Luna', age: '4', breed: 'Birman' },
  { name: 'Simba', age: '2', breed: 'Sphynx' },
  { name: 'Oscar', age: '1', breed: 'Peterbald' },
  { name: 'Bella', age: '3', breed: 'Persian' },
];

const ALL_BREEDS = ['All','Sphynx','Peterbald','Birman','Abyssinian','Persian','Bengal','Siamese'];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [filteredCats, setFilteredCats] = useState([]);
  const [breedFilter, setBreedFilter] = useState('All');
  const [nameSearch, setNameSearch] = useState('');

  useEffect(() => {
    let cancelled = false;

    const fetchImages = async () => {
      try {
        const responses = await Promise.all(
          availableCats.map(() =>
            fetch('https://api.thecatapi.com/v1/images/search').then(r => r.json())
          )
        );
        if (cancelled) return;

        const catsWithImages = availableCats.map((cat, i) => ({
          ...cat,
          image: responses[i]?.[0]?.url || '',
        }));

        setCats(catsWithImages);
        setFilteredCats(catsWithImages);
      } catch(e) { console.error(e); }
    };
    fetchImages();
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    let result = [...cats];
    if (breedFilter !== 'All') result = result.filter(c => c.breed === breedFilter);
    if (nameSearch.trim() !== '') {
      const term = nameSearch.toLowerCase();
      result = result.filter(c => c.name.toLowerCase().includes(term));
    }
    setFilteredCats(result);
  }, [cats, breedFilter, nameSearch]);

  return (
    <section className="text-center mt-4">
      <h2>Available Cats</h2>
      <p>Meet our adorable cats looking for their forever home!</p>

      <div className="filters d-flex justify-content-center gap-3 mb-4 flex-wrap">
        <div>
          <label>Filter by Breed:</label>
          <select value={breedFilter} onChange={e => setBreedFilter(e.target.value)}>
            {ALL_BREEDS.map(b => <option key={b} value={b}>{b}</option>)}
          </select>
        </div>

        <div>
          <label>Search by Name:</label>
          <input
            type="text"
            placeholder="Enter name..."
            value={nameSearch}
            onChange={e => setNameSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="cats-grid mt-2">
        {filteredCats.length ? filteredCats.map((cat, i) => (
          <div key={i} className="cat-card">
            <img src={cat.image} alt={cat.name} />
            <div className="cat-info">
              <h3>{cat.name}</h3>
              <p>Age: {cat.age}</p>
              <p>Breed: {cat.breed}</p>
            </div>
          </div>
        )) : (
          <p>No cats match your criteria.</p>
        )}
      </div>
    </section>
  );
}
