import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Siamese' },
  { name: 'Mittens', age: '2', breed: 'Persian' },
  { name: 'Shadow', age: '1', breed: 'Bengal' },
  { name: 'Pumpkin', age: '3', breed: 'Abyssinian' },
  { name: 'Luna', age: '4', breed: 'Birman' },
  { name: 'Simba', age: '2', breed: 'Sphynx' },
  { name: 'Bella', age: '1', breed: 'Peterbald' },
  { name: 'Tiger', age: '3', breed: 'Siamese' },
  { name: 'Nala', age: '2', breed: 'Persian' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [filteredCats, setFilteredCats] = useState([]);
  const [breedFilter, setBreedFilter] = useState('All Breeds');
  const [nameFilter, setNameFilter] = useState('');

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
        setFilteredCats(catsWithImages);
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  }, []);

  useEffect(() => {
    let filtered = cats;
    if (breedFilter !== 'All Breeds') {
      filtered = filtered.filter(cat => cat.breed === breedFilter);
    }
    if (nameFilter) {
      filtered = filtered.filter(cat => cat.name.toLowerCase().includes(nameFilter.toLowerCase()));
    }
    setFilteredCats(filtered);
  }, [cats, breedFilter, nameFilter]);

  return (
    <section className="text-center mt-4">
      <h2>Available Cats</h2>
      <p>Meet our adorable cats looking for their forever home!</p>

      <div className="filters mb-4">
        <div className="filter-group">
          <label htmlFor="breed-filter">Filter by Breed:</label>
          <select id="breed-filter" value={breedFilter} onChange={(e) => setBreedFilter(e.target.value)}>
            <option>All Breeds</option>
            <option>Sphynx</option>
            <option>Peterbald</option>
            <option>Birman</option>
            <option>Abyssinian</option>
            <option>Persian</option>
            <option>Bengal</option>
            <option>Siamese</option>
          </select>
        </div>
        <div className="filter-group">
          <label htmlFor="name-filter">Search by Name:</label>
          <input
            type="text"
            id="name-filter"
            value={nameFilter}
            onChange={(e) => setNameFilter(e.target.value)}
            placeholder="Enter cat name"
          />
        </div>
      </div>

      <div className="mt-2 cats-container" id="cats-container">
        {filteredCats.map((cat, i) => (
          <div key={i} className="cat-card">
            <img
              src={cat.image}
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
              <p className="mb-0">Breed: {cat.breed}</p>
              <p className="mb-0">Age: {cat.age}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
