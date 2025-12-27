import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Sphynx' },
  { name: 'Mittens', age: '2', breed: 'Peterbald' },
  { name: 'Shadow', age: '1', breed: 'Birman' },
  { name: 'Pumpkin', age: '3', breed: 'Abyssinian' },
  { name: 'Luna', age: '4', breed: 'Persian' },
  { name: 'Simba', age: '2', breed: 'Bengal' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [search, setSearch] = useState('');
  const [breed, setBreed] = useState('');

  useEffect(() => {
    const fetchImages = async () => {
      const responses = await Promise.all(
        availableCats.map(() =>
          fetch('https://api.thecatapi.com/v1/images/search').then(res =>
            res.json()
          )
        )
      );

      setCats(
        availableCats.map((cat, i) => ({
          ...cat,
          image: responses[i][0].url,
        }))
      );
    };

    fetchImages();
  }, []);

  /* Q4 filtering logic */
  const filteredCats = cats.filter(cat => {
    const nameMatch = cat.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const breedMatch = breed === '' || cat.breed === breed;

    return nameMatch && breedMatch;
  });

  return (
    <section className="mt-4">
      <h2>Available Cats</h2>
      <p>Meet our adorable cats looking for their forever home!</p>

      {/* Filters */}
      <div className="row mb-3">
        <div className="col-md-6">
          <input
            className="form-control"
            placeholder="Search by name"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>

        <div className="col-md-6">
          <select
            className="form-select"
            value={breed}
            onChange={e => setBreed(e.target.value)}
          >
            <option value="">All Breeds</option>
            {[...new Set(availableCats.map(c => c.breed))].map(b => (
              <option key={b}>{b}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Grid */}
      <div className="cats-container">
        {filteredCats.map((cat, i) => (
          <div key={i} className="cat-card">
            <img src={cat.image} alt={cat.name} />
            <div className="cat-info">
              <h5>{cat.name}</h5>
              <p>Age: {cat.age}</p>
              <p>Breed: {cat.breed}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
