import { useEffect, useState } from 'react';

const allCats = [
  { name: 'Whiskers', age: '2', breed: 'Siamese' },
  { name: 'Mittens', age: '2', breed: 'Persian' },
  { name: 'Shadow', age: '1', breed: 'Maine Coon' },
  { name: 'Luna', age: '3', breed: 'Siberian' },
  { name: 'Simba', age: '4', breed: 'Bengal' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [search, setSearch] = useState('');
  const [filterBreed, setFilterBreed] = useState('');

  useEffect(() => {
    const fetchImages = async () => {
      const responses = await Promise.all(
        allCats.map(() =>
          fetch('https://api.thecatapi.com/v1/images/search').then((res) =>
            res.json()
          )
        )
      );
      const catsWithImages = allCats.map((cat, i) => ({
        ...cat,
        image: responses[i][0].url,
      }));
      setCats(catsWithImages);
    };
    fetchImages();
  }, []);

  const filteredCats = cats.filter((cat) => {
    return (
      cat.name.toLowerCase().includes(search.toLowerCase()) &&
      (filterBreed === '' || cat.breed === filterBreed)
    );
  });

  const uniqueBreeds = [...new Set(cats.map((c) => c.breed))];

  return (
    <div className="container">
      <h2>Available Cats</h2>
      <div className="filters">
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={filterBreed} onChange={(e) => setFilterBreed(e.target.value)}>
          <option value="">All Breeds</option>
          {uniqueBreeds.map((b, i) => (
            <option key={i} value={b}>{b}</option>
          ))}
        </select>
      </div>
      <div className="cat-grid">
        {filteredCats.map((cat, i) => (
          <div key={i} className="cat-card">
            <img src={cat.image} alt={cat.name} className="cat-img" />
            <h3>{cat.name}</h3>
            <p>Age: {cat.age}</p>
            <p>Breed: {cat.breed}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
