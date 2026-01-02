import { useEffect, useState } from 'react';

const availableCats = [
  {
    name: 'Whiskers',
    age: '2',
    breed: 'Siamese',
    location: 'Shelter A',
    description: 'Playful and affectionate. Good with kids.',
    image: 'https://cdn2.thecatapi.com/images/9j7.jpg',
  },
  {
    name: 'Mittens',
    age: '2',
    breed: 'Persian',
    location: 'Foster Home',
    description: 'Calm lap cat who enjoys naps and brushing.',
    image: 'https://cdn2.thecatapi.com/images/ae.jpg',
  },
  {
    name: 'Shadow',
    age: '1',
    breed: 'Abyssinian',
    location: 'Shelter B',
    description: 'Curious and energetic — loves to climb.',
    image: 'https://cdn2.thecatapi.com/images/bb.jpg',
  },
  {
    name: 'Pumpkin',
    age: '3',
    breed: 'Bengal',
    location: 'Shelter A',
    description: 'Active and playful; needs space to run.',
    image: 'https://cdn2.thecatapi.com/images/cc.jpg',
  },
  {
    name: 'Luna',
    age: '4',
    breed: 'Birman',
    location: 'Foster Home',
    description: 'Gentle and social; great with other pets.',
    image: 'https://cdn2.thecatapi.com/images/dd.jpg',
  },
  {
    name: 'Simba',
    age: '2',
    breed: 'Sphinx',
    location: 'Shelter C',
    description: 'Affectionate and attention-seeking.',
    image: 'https://cdn2.thecatapi.com/images/ee.jpg',
  },
];

const breeds = ['Siamese', 'Persian', 'Abyssinian', 'Bengal', 'Birman', 'Sphinx', 'Peterbald'];

export default function AvailableCats() {
  const [cats, setCats] = useState(availableCats);
  const [filteredCats, setFilteredCats] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('');
  const [searchName, setSearchName] = useState('');

  useEffect(() => {
    setCats(availableCats);
  }, []);

  useEffect(() => {
    let result = cats;

    // Filter by breed
    if (selectedBreed) {
      result = result.filter((cat) => cat.breed === selectedBreed);
    }

    // Filter by name
    if (searchName) {
      result = result.filter((cat) =>
        cat.name.toLowerCase().includes(searchName.toLowerCase())
      );
    }

    setFilteredCats(result);
  }, [cats, selectedBreed, searchName]);

  return (
    <section className="available-cats-section">
      <div className="container">
        <div className="cats-header">
          <h2>Available cats</h2>
          <div className="filters-row">
            <label htmlFor="breed-filter" className="visually-hidden">
              Breed
            </label>
            <select
              id="breed-filter"
              className="breed-select"
              value={selectedBreed}
              onChange={(e) => setSelectedBreed(e.target.value)}
            >
              <option value="">select breed</option>
              {breeds.map((breed) => (
                <option key={breed} value={breed}>
                  {breed}
                </option>
              ))}
            </select>

            <label htmlFor="name-search" className="visually-hidden">
              Search
            </label>
            <input
              id="name-search"
              type="text"
              className="name-search"
              placeholder="search by name"
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
            />

            <button
              type="button"
              className="search-btn"
              onClick={() => {}}
            >
              search
            </button>
          </div>
        </div>

        <hr className="cats-divider" />

        <div className="cats-grid" id="cats-container">
          {filteredCats.length > 0 ? (
            filteredCats.map((cat, i) => (
              <div key={i}>
                <div className="cat-card">
                  <div
                    className="cat-image"
                    role="img"
                    aria-label={cat.name}
                    style={{ backgroundImage: `url(${cat.image})` }}
                  />
                  <div className="cat-info">
                    <h3>{cat.name}</h3>
                    <p className="cat-age">Age: {cat.age}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12">
              <p>No cats found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
