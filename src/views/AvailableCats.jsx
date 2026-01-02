import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Micky mouse', age: '2', breed: 'Bengal' },
  { name: 'Micky mouse', age: '2', breed: 'Persian' },
  { name: 'Micky mouse', age: '2', breed: 'Siamese' },
  { name: 'Micky mouse', age: '2', breed: 'Birman' },
  { name: 'Micky mouse', age: '2', breed: 'Sphynx' },
  { name: 'Micky mouse', age: '2', breed: 'Abyssinian' },
  { name: 'Micky mouse', age: '2', breed: 'Peterbald' },
  { name: 'Micky mouse', age: '2', breed: 'Bengal' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [filteredCats, setFilteredCats] = useState([]);
  const [breed, setBreed] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchImages = async () => {
      const responses = await Promise.all(
        availableCats.map(() =>
          fetch('https://api.thecatapi.com/v1/images/search')
            .then(res => res.json())
        )
      );

      const data = availableCats.map((cat, i) => ({
        ...cat,
        image: responses[i][0].url,
      }));

      setCats(data);
      setFilteredCats(data);
    };

    fetchImages();
  }, []);

  const handleSearch = () => {
    const result = cats.filter(cat => {
      const breedMatch = breed === '' || cat.breed === breed;
      const nameMatch = cat.name.toLowerCase().includes(search.toLowerCase());
      return breedMatch && nameMatch;
    });

    setFilteredCats(result);
  };

  return (
    <>
      {/* TITLE + FILTERS ON SAME LINE */}
      <div className="page-header">
        <h2 className="page-title">Available cats</h2>

        <div className="filter-bar">
          <select
            className="filter-select"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          >
            <option value="">Select breed</option>
            <option>Sphynx</option>
            <option>Peterbald</option>
            <option>Birman</option>
            <option>Abyssinian</option>
            <option>Persian</option>
            <option>Bengal</option>
            <option>Siamese</option>
          </select>

          <input
            type="text"
            className="filter-input"
            placeholder="Search by name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button
            className="filter-button"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>

      {/* CAT GRID */}
      <div className="available-cats-grid">
        {filteredCats.map((cat, i) => (
          <div className="cat-card" key={i}>
            <img src={cat.image} alt={cat.name} />
            <div className="cat-info">
              {cat.name}<br />
              Age: {cat.age}<br />
              Breed: {cat.breed}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
