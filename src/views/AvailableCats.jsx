import { useEffect, useRef, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Sphynx' },
  { name: 'Mittens', age: '2', breed: 'Persian' },
  { name: 'Shadow', age: '1', breed: 'Bengal' },
  { name: 'Pumpkin', age: '3', breed: 'Siamese' },
  { name: 'Luna', age: '4', breed: 'Birman' },
  { name: 'Simba', age: '2', breed: 'Abyssinian' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [selectedBreed, setSelectedBreed] = useState('');
  const [filteredCats, setFilteredCats] = useState([]);
  const fetchedRef = useRef(false);

  useEffect(() => {
    if (fetchedRef.current) return;
    fetchedRef.current = true;

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
        setFilteredCats(catsWithImages); // show all cats initially
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  }, []);

  // Filter function triggered by Search button
  const handleSearch = () => {
    const results = cats.filter(
      (cat) =>
        cat.name.toLowerCase().includes(searchText.toLowerCase()) &&
        (selectedBreed === '' || cat.breed === selectedBreed)
    );
    setFilteredCats(results);
  };

  return (
    <section className="text-center mt-4">
      <h2>Available Cats</h2>
      <p>Meet our adorable cats looking for their forever home!</p>

      {/* Filters */}
      <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
        <input
          type="text"
          placeholder="Search by name"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          style={{ padding: '0.5rem' }}
        />

        <select
          value={selectedBreed}
          onChange={(e) => setSelectedBreed(e.target.value)}
          style={{ padding: '0.5rem' }}
        >
          <option value="">All Breeds</option>
          <option value="Sphynx">Sphynx</option>
          <option value="Peterbald">Peterbald</option>
          <option value="Birman">Birman</option>
          <option value="Abyssinian">Abyssinian</option>
          <option value="Persian">Persian</option>
          <option value="Bengal">Bengal</option>
          <option value="Siamese">Siamese</option>
        </select>

        <button
          onClick={handleSearch}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#ff6b6b',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Search
        </button>
      </div>

      {/* Cat grid */}
      <div className="cats-container">
        {filteredCats.map((cat, i) => (
          <div key={i} className="cat-card">
            <img
              src={cat.image}
              alt={cat.name}
              style={{
                borderRadius: '8px',
                height: '200px',
                width: '100%',
                objectFit: 'cover',
              }}
            />
            <div className="cat-info">
              <h3>{cat.name}</h3>
              <p>Age: {cat.age} | Breed: {cat.breed}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
