import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Micky mouse', age: '2', breed: 'Siamese' },
  { name: 'Micky mouse', age: '2', breed: 'Persian' },
  { name: 'Micky mouse', age: '2', breed: 'Bengal' },
  { name: 'Micky mouse', age: '2', breed: 'Abyssinian' },
  { name: 'Bob Doe', age: '3', breed: 'Sphynx' },
  { name: 'Micky Doe', age: '2', breed: 'Birman' },
  { name: 'Micky mouse', age: '2', breed: 'Peterbald' },
  { name: 'Micky mouse', age: '2', breed: 'Siamese' },
];

const breeds = ['All', 'Sphynx', 'Peterbald', 'Birman', 'Abyssinian', 'Persian', 'Bengal', 'Siamese'];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('All');
  const [searchName, setSearchName] = useState('');

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

  const filteredCats = cats.filter((cat) => {
    const matchesBreed = selectedBreed === 'All' || cat.breed === selectedBreed;
    const matchesName = cat.name.toLowerCase().includes(searchName.toLowerCase());
    return matchesBreed && matchesName;
  });

  return (
    <section className="available-cats-page">
      <div className="available-cats-header">
        <h2>Available cats</h2>

        <div className="filter-controls">
          <select
            className="breed-filter"
            value={selectedBreed}
            onChange={(e) => setSelectedBreed(e.target.value)}
          >
            <option value="All">select breed</option>
            {breeds.filter(b => b !== 'All').map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>

          <input
            type="text"
            className="name-search"
            placeholder="search by name"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
          />

          <button className="search-btn">search</button>
        </div>
      </div>

      <div className="available-cats-grid">
        {filteredCats.map((cat, i) => (
          <div key={i} className="available-cat-card">
            <div className="available-cat-image">
              <img src={cat.image} alt={cat.name} />
            </div>
            <div className="available-cat-info">
              <h3>{cat.name}</h3>
              <p>Age: {cat.age}</p>
              <p className="cat-breed">Breed: {cat.breed}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
