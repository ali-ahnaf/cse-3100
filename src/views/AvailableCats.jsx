import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Siamese' },
  { name: 'Mittens', age: '2', breed: 'Persian' },
  { name: 'Shadow', age: '1', breed: 'Bengal' },
  { name: 'Pumpkin', age: '3', breed: 'Sphynx' },
  { name: 'Luna', age: '4', breed: 'Abyssinian' },
  { name: 'Simba', age: '2', breed: 'Birman' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBreed, setSelectedBreed] = useState('');

  useEffect(() => {
    // Fetch cat images from an API endpoint and assign it to the featuredCats list
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

  // Filter cats based on search term and breed
  const filteredCats = cats.filter((cat) => {
    const matchesSearch = cat.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBreed = !selectedBreed || cat.breed === selectedBreed;
    return matchesSearch && matchesBreed;
  });

  return (
    <section className="available-cats-section">
      <div className="section-content">
        <h2>Available Cats</h2>
        <p className="section-description">Meet our adorable cats looking for their forever home!</p>

        {/* Filter and search controls */}
        <div className="filter-section">
          <div className="row">
            <div className="col-auto">
              <label htmlFor="breed-select" className="form-label">
                Select Breed
              </label>
              <select
                id="breed-select"
                className="form-select"
                value={selectedBreed}
                onChange={(e) => setSelectedBreed(e.target.value)}
              >
                <option value="">All Breeds</option>
                {[...new Set(availableCats.map((cat) => cat.breed))].map((breed) => (
                  <option key={breed} value={breed}>
                    {breed}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-auto">
              <label htmlFor="search-input" className="form-label">
                Search
              </label>
              <input
                id="search-input"
                type="text"
                className="form-control"
                placeholder="Search by name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Cat grid - 4 columns on desktop, responsive on smaller screens */}
        <div className="cats-container" id="cats-container">
          {filteredCats.length > 0 ? (
            filteredCats.map((cat, i) => (
              <div key={i} className="cat-card">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="img-fluid"
                />
                <div className="cat-info">
                  <h3 className="h5 mb-1">{cat.name}</h3>
                  <p className="mb-2">Age: {cat.age}</p>
                  <p className="breed-badge">{cat.breed}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="no-results">
              <p className="text-muted">No cats found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
