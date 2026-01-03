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
    breed: 'Sphynx',
    location: 'Shelter C',
    description: 'Affectionate and attention-seeking.',
    image: 'https://cdn2.thecatapi.com/images/ee.jpg',
  },
];

const BREEDS = [
  'All',
  'Siamese',
  'Persian',
  'Abyssinian',
  'Bengal',
  'Birman',
  'Sphynx',
  'Peterbald',
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [filteredCats, setFilteredCats] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('All');
  const [searchName, setSearchName] = useState('');

  // initialize cats (NO LOOP)
  useEffect(() => {
    setCats(availableCats);
    setFilteredCats(availableCats);
  }, []);

  // filtering logic
  useEffect(() => {
    let result = [...cats];

    if (selectedBreed !== 'All') {
      result = result.filter((cat) => cat.breed === selectedBreed);
    }

    if (searchName.trim() !== '') {
      result = result.filter((cat) =>
        cat.name.toLowerCase().includes(searchName.toLowerCase())
      );
    }

    setFilteredCats(result);
  }, [cats, selectedBreed, searchName]);

  return (
    <section className="available-cats-section">
      <div className="container">
        <h2 className="text-center mb-3">Available Cats</h2>

        {/* Filters */}
        <div className="filters-row">
          <select
            className="breed-select"
            value={selectedBreed}
            onChange={(e) => setSelectedBreed(e.target.value)}
          >
            {BREEDS.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>

          <input
            type="text"
            className="name-search"
            placeholder="Search by name"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
          />
        </div>

        <hr className="cats-divider" />

        {/* Cats Grid */}
        <div className="cats-grid">
          {filteredCats.length > 0 ? (
            filteredCats.map((cat, i) => (
              <div key={i} className="cat-card">
                <div
                  className="cat-image"
                  style={{ backgroundImage: `url(${cat.image})` }}
                />
                <div className="cat-info">
                  <h3>{cat.name}</h3>
                  <p>
                    <strong>Age:</strong> {cat.age}
                  </p>
                  <p>
                    <strong>Breed:</strong> {cat.breed}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No cats found.</p>
          )}
        </div>
      </div>
    </section>
  );
}
