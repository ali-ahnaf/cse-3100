import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Sphynx' },
  { name: 'Mittens', age: '2', breed: 'Peterbald' },
  { name: 'Shadow', age: '1', breed: 'Birman' },
  { name: 'Pumpkin', age: '3', breed: 'Abyssinian' },
  { name: 'Luna', age: '4', breed: 'Persian' },
  { name: 'Simba', age: '2', breed: 'Bengal' },
  { name: 'Jebu', age: '7', breed: 'Siberian' },
  { name: 'Kurt', age: '5', breed: 'Bengal' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [filteredCats, setFilteredCats] = useState([]);

  const [selectedBreed, setSelectedBreed] = useState('');
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const fetchCatImages = async () => {
      const responses = await Promise.all(
        availableCats.map(() =>
          fetch('https://api.thecatapi.com/v1/images/search').then((r) =>
            r.json()
          )
        )
      );

      const catsWithImages = availableCats.map((cat, i) => ({
        ...cat,
        image: responses[i][0].url,
      }));

      setCats(catsWithImages);
      setFilteredCats(catsWithImages);
    };

    fetchCatImages();
  }, []);

  // Dropdown filter (instant)
  const handleDropdownChange = (value) => {
    setSelectedBreed(value);

    let result = cats;

    if (value) {
      result = result.filter((cat) => cat.breed === value);
    }

    // also apply search if already typed
    if (searchText.trim() !== '') {
      result = result.filter(
        (cat) =>
          cat.breed.toLowerCase() === searchText.trim().toLowerCase()
      );
    }

    setFilteredCats(result);
  };

  // Search button (exact match only) - now searches breed
  const handleSearch = () => {
    let result = cats;

    if (selectedBreed) {
      result = result.filter((cat) => cat.breed === selectedBreed);
    }

    if (searchText.trim() !== '') {
      result = result.filter(
        (cat) =>
          cat.breed.toLowerCase() === searchText.trim().toLowerCase()
      );
    }

    setFilteredCats(result);
  };

  // To populate dropdown with unique breed values
  const uniqueBreeds = Array.from(new Set(availableCats.map((cat) => cat.breed)));

  return (
    <section className="container mt-4">
      <h2 className="mb-3">Available Cats</h2>

      {/* FILTER BAR */}
      <div className="d-flex flex-wrap gap-2 align-items-center mb-4">
        {/* Dropdown */}
        <select
          className="form-select w-auto"
          value={selectedBreed}
          onChange={(e) => handleDropdownChange(e.target.value)}
        >
          <option value="">Select breed</option>
          {uniqueBreeds.map((breed, i) => (
            <option key={i} value={breed}>
              {breed}
            </option>
          ))}
        </select>

        {/* Search input */}
        <input
          type="text"
          className="form-control w-auto"
          placeholder="Enter full breed name"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        {/* Search button */}
        <button className="btn btn-primary" onClick={handleSearch}>
          Search
        </button>
      </div>

      {/* RESULTS */}
      <div className="row g-4">
        {filteredCats.length === 0 ? (
          <p className="text-muted">No cats found.</p>
        ) : (
          filteredCats.map((cat, i) => (
            <div key={i} className="col-lg-3 col-md-4 col-sm-6">
              <div className="cat-card h-100">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="img-fluid w-100"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="cat-info text-center p-2">
                  <h6 className="mb-1">{cat.name}</h6>
                  <p className="mb-0">Age: {cat.age}</p>
                  <p className="mb-0"><strong>Breed:</strong> {cat.breed}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
