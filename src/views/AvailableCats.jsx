import { useEffect, useState } from 'react';

const availableCats = [
  {
    name: 'Whiskers',
    age: '2',
    breed: 'Siamese',
    location: 'Shelter A',
    description: 'Playful and affectionate. Good with kids.',
  },
  {
    name: 'Mittens',
    age: '2',
    breed: 'Persian',
    location: 'Foster Home',
    description: 'Calm lap cat who enjoys naps and brushing.',
  },
  {
    name: 'Shadow',
    age: '1',
    breed: 'Abyssinian',
    location: 'Shelter B',
    description: 'Curious and energetic — loves to climb.',
  },
  {
    name: 'Pumpkin',
    age: '3',
    breed: 'Bengal',
    location: 'Shelter A',
    description: 'Active and playful; needs space to run.',
  },
  {
    name: 'Luna',
    age: '4',
    breed: 'Birman',
    location: 'Foster Home',
    description: 'Gentle and social; great with other pets.',
  },
  {
    name: 'Simba',
    age: '2',
    breed: 'Sphinx',
    location: 'Shelter C',
    description: 'Affectionate and attention-seeking.',
  },
];

const breeds = ['Siamese', 'Persian', 'Abyssinian', 'Bengal', 'Birman', 'Sphinx', 'Peterbald'];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [filteredCats, setFilteredCats] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('');
  const [searchName, setSearchName] = useState('');

  useEffect(() => {
    // Fetch cat images from an API endpoint and assign it to the availableCats list
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
    <section className="text-center mt-4">
      <h2>Available Cats</h2>
      <p>Meet our adorable cats looking for their forever home!</p>

      <div className="filters-row">
        <div>
          <label htmlFor="breed-filter" className="form-label visually-hidden">
            Breed
          </label>
          <select
            id="breed-filter"
            className="form-select"
            value={selectedBreed}
            onChange={(e) => setSelectedBreed(e.target.value)}
          >
            <option value="">All Breeds</option>
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="name-search" className="form-label visually-hidden">
            Search
          </label>
          <input
            id="name-search"
            type="text"
            className="form-control"
            placeholder="search by name"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
          />
        </div>

        <div>
          <button
            type="button"
            className="btn btn-primary search-btn"
            onClick={() => {}}
          >
            Search
          </button>
        </div>
      </div>

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
                  <p>
                    <strong>Age:</strong> {cat.age} &nbsp;•&nbsp; <strong>Breed:</strong> {cat.breed}
                  </p>
                  <p>
                    <strong>Location:</strong> {cat.location}
                  </p>
                  <p className="cat-desc">{cat.description}</p>
                  <div style={{ marginTop: '8px' }}>
                    <button className="btn btn-outline-primary btn-sm">Adopt</button>
                  </div>
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
    </section>
  );
}
