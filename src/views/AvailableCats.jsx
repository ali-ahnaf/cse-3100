import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Persian' },
  { name: 'Mittens', age: '2', breed: 'Bengal' },
  { name: 'Shadow', age: '1', breed: 'Siamese' },
  { name: 'Pumpkin', age: '3', breed: 'Birman' },
  { name: 'Luna', age: '4', breed: 'Abyssinian' },
  { name: 'Simba', age: '2', breed: 'Sphynx' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [breed, setBreed] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchCatImages = async () => {
      const responses = await Promise.all(
        availableCats.map(() =>
          fetch('https://api.thecatapi.com/v1/images/search').then(res =>
            res.json()
          )
        )
      );

      const catsWithImages = availableCats.map((cat, index) => ({
        ...cat,
        image: responses[index][0].url,
      }));

      setCats(catsWithImages);
    };

    fetchCatImages();
  }, []);

  const filteredCats = cats.filter(cat =>
    (breed === '' || cat.breed === breed) &&
    cat.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="text-center mt-4">
      <h2>Available Cats</h2>

      {/* FILTERS */}
      <div className="mb-3">
        <select onChange={e => setBreed(e.target.value)}>
          <option value="">All Breeds</option>
          <option value="Sphynx">Sphynx</option>
          <option value="Birman">Birman</option>
          <option value="Persian">Persian</option>
          <option value="Bengal">Bengal</option>
          <option value="Siamese">Siamese</option>
        </select>

        <input
          type="text"
          placeholder="Search by name"
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      {/* GRID */}
      <div className="cat-grid">
        {filteredCats.map((cat, i) => (
          <div key={i} className="cat-card">
            <img src={cat.image} alt={cat.name} />
            <div className="cat-info">
              <h3>{cat.name}</h3>
              <p>Age: {cat.age}</p>
              <p>Breed: {cat.breed}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
