import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2 years', breed: 'Persian' },
  { name: 'Mittens', age: '3 years', breed: 'Siamese' },
  { name: 'Shadow', age: '1 year', breed: 'Bengal' },
  { name: 'Luna', age: '4 years', breed: 'Abyssinian' },
  { name: 'Simba', age: '2 years', breed: 'Birman' },
  { name: 'Oliver', age: '5 years', breed: 'Sphynx' },
  { name: 'Bella', age: '1 year', breed: 'Peterbald' },
  { name: 'Charlie', age: '3 years', breed: 'Persian' },
  { name: 'Lucy', age: '2 years', breed: 'Bengal' },
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

    if (selectedBreed !== 'All Breeds') {
      result = result.filter(cat => cat.breed === selectedBreed);
    }

    if (searchName.trim() !== '') {
      result = result.filter(cat =>
        cat.name.toLowerCase().includes(searchName.toLowerCase())
      );
    }

    setFilteredCats(result);
  }, [selectedBreed, searchName, cats]);

  return (
    <section className="text-center">
      <h2>Available cats</h2>
      <p>Meet our adorable cats looking for their forever home!</p>

      <div className="filters-container">
        <div className="row">
          <div className="col-md-4">
            <label className="form-label">Select breed:</label>
            <select
              className="form-select"
              value={selectedBreed}
              onChange={(e) => setSelectedBreed(e.target.value)}
            >
              {breedOptions.map((breed, index) => (
                <option key={index} value={breed}>{breed}</option>
              ))}
            </select>
          </div>
          <div className="col-md-4">
            <label className="form-label">Search by name:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="cats-container">
        {filteredCats.length > 0 ? (
          filteredCats.map((cat, i) => (
            <div className="cat-card" key={i}>
              <img
                src={cat.image}
                alt={cat.name}
              />
              <div className="cat-info">
                <h3>{cat.name}</h3>
                <p>Age: {cat.age}</p>
                <p>Breed: {cat.breed}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="no-results">
            <p>No cats found matching your filters.</p>
          </div>
        )}
      </div>
    </section>
  );
}