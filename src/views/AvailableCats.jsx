import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Siamese' },
  { name: 'Mittens', age: '2', breed: 'Persian' },
  { name: 'Shadow', age: '1', breed: 'Abyssinian' },
  { name: 'Pumpkin', age: '3', breed: 'Bengal' },
  { name: 'Luna', age: '4', breed: 'Birman' },
  { name: 'Simba', age: '2', breed: 'Sphynx' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]); // displayed/filtered cats
  const [allCats, setAllCats] = useState([]); // full fetched list
  const [filterBreed, setFilterBreed] = useState('all');
  const [searchName, setSearchName] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');

  useEffect(() => {
    // Fetch cat images from an API endpoint and assign it to the featuredCats list
    const fetchCatImages = async () => {
      try {
        // Example: fetch images for each available cat from a placeholder API (or random API)
        const responses = await Promise.all(
          availableCats.map(() =>
            fetch('https://api.thecatapi.com/v1/images/search').then((r) =>
              r.json()
            )
          )
        );

        const catsWithImages = availableCats.map((cat, index) => ({
          ...cat,
          image: responses[index][0].url,
        }));

        setAllCats(catsWithImages);
        setCats(catsWithImages);
      } catch (error) {
        console.error('Error fetching cat images:', error);
        // Fallback: attach placeholder images
        const catsWithPlaceholders = availableCats.map((cat) => ({
          ...cat,
          image: 'https://via.placeholder.com/400x300?text=Cat',
        }));
        setAllCats(catsWithPlaceholders);
        setCats(catsWithPlaceholders);
      }
    };

    fetchCatImages();
  }, []);

  // Debounce the search input to improve UX on large lists
  useEffect(() => {
    const t = setTimeout(() => setDebouncedSearch(searchName), 300);
    return () => clearTimeout(t);
  }, [searchName]);

  // Apply filters whenever data, selected breed or debounced search changes
  useEffect(() => {
    const filtered = allCats.filter((c) =>
      (filterBreed === 'all' || c.breed === filterBreed) &&
      c.name.toLowerCase().includes(debouncedSearch.toLowerCase())
    );
    setCats(filtered);
  }, [allCats, filterBreed, debouncedSearch]);

  return (
    <section className="text-center mt-4">
      <h2>Available Cats</h2>
      <p>Meet our adorable cats looking for their forever home!</p>

      <div className="mt-2">
        <div className="filter-bar">
          <div>
            <label htmlFor="breed-select">Filter by breed:</label>
            <select
              id="breed-select"
              value={filterBreed}
              onChange={(e) => setFilterBreed(e.target.value)}
            >
              <option value="all">All breeds</option>
              {Array.from(new Set(availableCats.map((c) => c.breed))).map(
                (b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                )
              )}
            </select>
          </div>

          <div>
            <label htmlFor="name-search">Search by name:</label>
            <input
              id="name-search"
              type="search"
              placeholder="e.g. Whiskers"
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
            />
          </div>
        </div>
        <div className="cats-container" id="cats-container">
          {cats.length === 0 ? (
            <div className="cat-item">
              <p className="no-results">No cats match your filters.</p>
            </div>
          ) : (
            cats.map((cat, i) => (
              <div key={i} className="cat-item">
                <div className="cat-card">
                  <img
                    src={cat.image || 'https://via.placeholder.com/400x300?text=No+Image'}
                    alt={cat.name}
                    className="img-fluid mb-2"
                    style={{
                      borderRadius: '8px',
                      height: '200px',
                      objectFit: 'cover',
                    }}
                  />
                  <div className="cat-info">
                    <h3 className="h5 mb-1">{cat.name}</h3>
                    <p className="mb-0">Age: {cat.age}</p>
                    <p className="mb-0">Breed: {cat.breed}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}