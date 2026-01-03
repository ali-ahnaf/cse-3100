import { useEffect, useState } from 'react';
import '../index.css';

const availableCats = [
  { name: 'Whiskers', age: 26, breed: 'Sphynx' },    // age in months
  { name: 'Mittens', age: 24, breed: 'Peterbald' },
  { name: 'Shadow', age: 14, breed: 'Birman' },
  { name: 'Pumpkin', age: 38, breed: 'Abyssinian' },
  { name: 'Luna', age: 50, breed: 'Persian' },
  { name: 'Simba', age: 28, breed: 'Bengal' },
  { name: 'Bella', age: 26, breed: 'Siamese' },
  { name: 'Oliver', age: 36, breed: 'Bengal' },
  { name: 'Chloe', age: 48, breed: 'Persian' },
  { name: 'Leo', age: 12, breed: 'Sphynx' },
  { name: 'Nala', age: 24, breed: 'Birman' },
  { name: 'Charlie', age: 36, breed: 'Abyssinian' },
];

// Helper to format months as "X years Y months"
const formatAge = (months) => {
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  let result = '';
  if (years > 0) result += `${years} year${years > 1 ? 's' : ''}`;
  if (remainingMonths > 0) result += `${years > 0 ? ' ' : ''}${remainingMonths} month${remainingMonths > 1 ? 's' : ''}`;
  return result || '0 month';
};

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [inputValue, setInputValue] = useState(""); // for typing only
  const [searchTerm, setSearchTerm] = useState(""); // applied on button click
  const [filterBreed, setFilterBreed] = useState("");
  const [searchClicked, setSearchClicked] = useState(false);

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(
          availableCats.map(() =>
            fetch('https://api.thecatapi.com/v1/images/search').then(res => res.json())
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

  // Filter cats only after search button click
  const filteredCats = searchClicked
    ? cats.filter(cat =>
        cat.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (filterBreed === "" || cat.breed === filterBreed)
      )
    : cats;

  return (
    <section className="text-center mt-4" style={{ padding: '40px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '12px' }}>Available Cats</h2>
      <p style={{ textAlign: 'center', marginBottom: '30px' }}>
        Meet our adorable cats looking for their forever home!
      </p>

      {/* Filters */}
      <div className="mb-3" style={{ marginBottom: '30px', display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
        <select
          value={filterBreed}
          onChange={(e) => setFilterBreed(e.target.value)}
          style={{ padding: '5px', minWidth: '120px' }}
        >
          <option value="">All</option>
          <option value="Sphynx">Sphynx</option>
          <option value="Peterbald">Peterbald</option>
          <option value="Birman">Birman</option>
          <option value="Abyssinian">Abyssinian</option>
          <option value="Persian">Persian</option>
          <option value="Bengal">Bengal</option>
          <option value="Siamese">Siamese</option>
        </select>

        <input
          type="text"
          placeholder="Search by name"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          style={{ padding: '5px', minWidth: '150px' }}
        />

        <button
          onClick={() => {
            setSearchTerm(inputValue); // apply search
            setSearchClicked(true);
          }}
          style={{ padding: '5px 12px', cursor: 'pointer' }}
        >
          Search
        </button>
      </div>

      {/* Cat Grid */}
      <div
        className="cat-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
        }}
      >
        {filteredCats.map((cat, i) => (
          <div key={i} className="cat-card" style={{ textAlign: 'center' }}>
            <img
              src={cat.image}
              alt={cat.name}
              style={{
                borderRadius: '8px',
                height: '220px',
                objectFit: 'cover',
                width: '100%',
              }}
            />
            <div className="cat-info" style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>{cat.name}</strong>
              <p className="mb-0">Age: {formatAge(cat.age)}</p>
              <p className="mb-0">Breed: {cat.breed}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
