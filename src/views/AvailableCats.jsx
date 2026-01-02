import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Siamese' },
  { name: 'Mittens', age: '2', breed: 'Persian' },
  { name: 'Shadow', age: '1', breed: 'Bengal' },
  { name: 'Pumpkin', age: '3', breed: 'Sphynx' },
  { name: 'Luna', age: '4', breed: 'Birman' },
  { name: 'Simba', age: '2', breed: 'Abyssinian' },
  { name: 'Oliver', age: '3', breed: 'Peterbald' },
  { name: 'Bella', age: '1', breed: 'Siamese' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [filteredCats, setFilteredCats] = useState([]);
  const [breedFilter, setBreedFilter] = useState('All Breeds');
  const [nameFilter, setNameFilter] = useState('');

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
        setFilteredCats(catsWithImages);
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  }, []);

  useEffect(() => {
    let filtered = cats;

    // Filter by breed
    if (breedFilter !== 'All Breeds') {
      filtered = filtered.filter((cat) => cat.breed === breedFilter);
    }

    // Filter by name
    if (nameFilter.trim() !== '') {
      filtered = filtered.filter((cat) =>
        cat.name.toLowerCase().includes(nameFilter.toLowerCase())
      );
    }

    setFilteredCats(filtered);
  }, [breedFilter, nameFilter, cats]);

  return (
    <section className="text-center mt-4">
      <h2>Available Cats</h2>
      <p>Meet our adorable cats looking for their forever home!</p>

      <div className="filters-container">
        <div className="filter-group">
          <label htmlFor="breed-filter">Filter by Breed:</label>
          <select
            id="breed-filter"
            value={breedFilter}
            onChange={(e) => setBreedFilter(e.target.value)}
          >
            <option value="All Breeds">All Breeds</option>
            <option value="Sphynx">Sphynx</option>
            <option value="Peterbald">Peterbald</option>
            <option value="Birman">Birman</option>
            <option value="Abyssinian">Abyssinian</option>
            <option value="Persian">Persian</option>
            <option value="Bengal">Bengal</option>
            <option value="Siamese">Siamese</option>
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="name-filter">Search by Name:</label>
          <input
            id="name-filter"
            type="text"
            placeholder="Enter cat name..."
            value={nameFilter}
            onChange={(e) => setNameFilter(e.target.value)}
          />
        </div>
      </div>

      <div className="cats-container">
        {filteredCats.map((cat, i) => (
          <div key={i} className="cat-card">
            <img
              src={cat.image}
              alt={cat.name}
              style={{
                borderRadius: '8px',
                width: '100%',
                height: '200px',
                objectFit: 'cover',
              }}
            />
            <div className="cat-info">
              <h3 className="h5 mb-1">{cat.name}</h3>
              <p className="mb-0">Breed: {cat.breed}</p>
              <p className="mb-0">Age: {cat.age} years</p>
            </div>
          </div>
        ))}
      </div>

      {filteredCats.length === 0 && (
        <p style={{ marginTop: '2rem', fontSize: '1.2rem', color: '#666' }}>
          No cats found matching your filters.
        </p>
      )}
    </section>
  );
}
