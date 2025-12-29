import { useEffect, useState, useMemo } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Siamese' },
  { name: 'Mittens', age: '2', breed: 'Persian' },
  { name: 'Shadow', age: '1', breed: 'Bengal' },
  { name: 'Pumpkin', age: '3', breed: 'Sphynx' },
  { name: 'Luna', age: '4', breed: 'Birman' },
  { name: 'Simba', age: '2', breed: 'Abyssinian' },
];

const breeds = ['All', 'Sphynx', 'Peterbald', 'Birman', 'Abyssinian', 'Persian', 'Bengal', 'Siamese'];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [breedFilter, setBreedFilter] = useState('All');
  const [nameSearch, setNameSearch] = useState('');

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

  const filteredCats = useMemo(() => {
    return cats.filter((cat) => {
      const matchesBreed = breedFilter === 'All' || cat.breed === breedFilter;
      const matchesName = cat.name.toLowerCase().includes(nameSearch.toLowerCase());
      return matchesBreed && matchesName;
    });
  }, [cats, breedFilter, nameSearch]);

  return (
    <section className="text-center mt-4">
      <h2>Available Cats</h2>
      <p>Meet our adorable cats looking for their forever home!</p>

      <div className="filters mb-4" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', maxWidth: '600px', margin: '0 auto 2rem' }}>
        <div style={{ flex: 1 }}>
          <label htmlFor="breed-filter" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Filter by Breed:</label>
          <select 
            id="breed-filter"
            value={breedFilter} 
            onChange={(e) => setBreedFilter(e.target.value)}
            style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ddd' }}
          >
            {breeds.map((breed) => (
              <option key={breed} value={breed}>{breed}</option>
            ))}
          </select>
        </div>
        <div style={{ flex: 1 }}>
          <label htmlFor="name-search" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Search by Name:</label>
          <input 
            id="name-search"
            type="text" 
            value={nameSearch} 
            onChange={(e) => setNameSearch(e.target.value)}
            placeholder="Search cats..."
            style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ddd' }}
          />
        </div>
      </div>

      <div className="mt-2" id="cats-container">
        {filteredCats.map((cat, i) => (
          <div key={i} className="cat-card">
            <img
              src={cat.image}
              alt={cat.name}
            />
            <div className="cat-info">
              <div className="breed-badge">{cat.breed}</div>
              <h3 className="h5 mb-1">{cat.name}</h3>
              <p className="mb-0">Age: {cat.age} years</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
