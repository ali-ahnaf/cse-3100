import { useEffect, useMemo, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Sphynx' },
  { name: 'Mittens', age: '2', breed: 'Peterbald' },
  { name: 'Shadow', age: '1', breed: 'Birman' },
  { name: 'Pumpkin', age: '3', breed: 'Abyssinian' },
  { name: 'Luna', age: '4', breed: 'Persian' },
  { name: 'Simba', age: '2', breed: 'Bengal' },
  { name: 'Nala', age: '2', breed: 'Siamese' },
  { name: 'Cleo', age: '1', breed: 'Siamese' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [search, setSearch] = useState('');
  const [breed, setBreed] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [breedInput, setBreedInput] = useState('');

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(
          availableCats.map(() =>
            fetch('https://api.thecatapi.com/v1/images/search').then((res) =>
              res.json()
            )
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

  const filteredCats = useMemo(() => {
    const name = search.trim().toLowerCase();
    return cats.filter((c) => {
      const matchesName = c.name.toLowerCase().includes(name);
      const matchesBreed = breed ? c.breed === breed : true;
      return matchesName && matchesBreed;
    });
  }, [cats, search, breed]);

  const breeds = [
    'Sphynx',
    'Peterbald',
    'Birman',
    'Abyssinian',
    'Persian',
    'Bengal',
    'Siamese',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(searchInput);
    setBreed(breedInput);
  };

  return (
    <section className="mt-4">
      <div className="titlebar">
        <h2 className="titlebar-heading">Available cats</h2>
        <form onSubmit={handleSubmit} className="search-bar">
          <select
            className="form-select"
            value={breedInput}
            onChange={(e) => setBreedInput(e.target.value)}
          >
            <option value="">select breed</option>
            {breeds.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
          <input
            className="form-control"
            placeholder="search by name"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button className="btn btn-primary" type="submit">search</button>
        </form>
      </div>

      <hr />

      <div className="mt-2 cats-grid-4" id="cats-container">
        {filteredCats.map((cat, i) => (
          <div key={i}>
            <div className="cat-card">
              <img
                src={cat.image}
                alt={cat.name}
                className="img-fluid mb-2"
                style={{ borderRadius: '8px', height: '200px', objectFit: 'cover' }}
              />
              <div className="cat-info">
                <h3 className="h5 mb-1">{cat.name}</h3>
                <p className="mb-0">Age: {cat.age}</p>
                <p className="mb-0">Breed: {cat.breed}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
