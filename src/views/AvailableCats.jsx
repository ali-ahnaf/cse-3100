import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Persian' },
  { name: 'Mittens', age: '2', breed: 'Siamese' },
  { name: 'Shadow', age: '1', breed: 'Bengal' },
  { name: 'Pumpkin', age: '3', breed: 'Abyssinian' },
  { name: 'Luna', age: '4', breed: 'Birman' },
  { name: 'Simba', age: '2', breed: 'Sphynx' },
  { name: 'Fluffy', age: '1', breed: 'Peterbald' },
  { name: 'Oscar', age: '3', breed: 'Persian' },
  { name: 'Milo', age: '2', breed: 'Bengal' },
];

const breedOptions = [
  'All Breeds',
  'Sphynx',
  'Peterbald',
  'Birman',
  'Abyssinian',
  'Persian',
  'Bengal',
  'Siamese'
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [filteredCats, setFilteredCats] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('All Breeds');
  const [searchName, setSearchName] = useState('');

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
    let result = cats;

    // Filter by breed
    if (selectedBreed !== 'All Breeds') {
      result = result.filter(cat => cat.breed === selectedBreed);
    }

    // Filter by name search
    if (searchName.trim() !== '') {
      result = result.filter(cat =>
        cat.name.toLowerCase().includes(searchName.toLowerCase())
      );
    }

    setFilteredCats(result);
  }, [selectedBreed, searchName, cats]);

  return (
    <section className="text-center mt-4">
      <h2>Available Cats</h2>
      <p>Meet our adorable cats looking for their forever home!</p>

      {/* Filters Section */}
      <div className="filters-container mb-4">
        <div className="row justify-content-center">
          <div className="col-md-4 mb-3">
            <label htmlFor="breedFilter" className="form-label">Filter by Breed:</label>
            <select
              id="breedFilter"
              className="form-select"
              value={selectedBreed}
              onChange={(e) => setSelectedBreed(e.target.value)}
            >
              {breedOptions.map((breed, index) => (
                <option key={index} value={breed}>{breed}</option>
              ))}
            </select>
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="nameSearch" className="form-label">Search by Name:</label>
            <input
              id="nameSearch"
              type="text"
              className="form-control"
              placeholder="Enter cat name..."
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="mt-2 row g-4 cats-container" id="cats-container">
        {filteredCats.length > 0 ? (
          filteredCats.map((cat, i) => (
            <div key={i} className="col-md-4">
              <div className="cat-card">
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
                  <p className="mb-0">Age: {cat.age} years</p>
                  <p className="mb-0">Breed: {cat.breed}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12">
            <p className="text-muted">No cats found matching your filters.</p>
          </div>
        )}
      </div>
    </section>
  );
}