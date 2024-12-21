import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2', Breed: 'Sphynx'},
  { name: 'Mittens', age: '2', Breed: 'Birman' },
  { name: 'Shadow', age: '1', Breed: 'Abyssinian'},
  { name: 'Pumpkin', age: '3', Breed: 'Persian' },
  { name: 'Luna', age: '4', Breed: 'Bengal' },
  { name: 'Simba', age: '2', Breed: 'Siamese'},
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [filteredCats, setFilteredCats] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [selectedBreed, setSelectedBreed] = useState('All');

  useEffect(() => {
    // Fetch cat images from an API endpoint and assign it to the featuredCats list
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(availableCats.map(() => fetch('https://api.thecatapi.com/v1/images/search').then((res) => res.json())));
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

    if (searchText) {
      filtered = filtered.filter((cat) =>
        cat.name.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    if (selectedBreed !== 'All') {
      filtered = filtered.filter((cat) => cat.Breed === selectedBreed);
    }

    setFilteredCats(filtered);
  }, [searchText, selectedBreed, cats]);

  return (
    <section className="text-center mt-4">
      <h2>Available Cats</h2>
      <p>Meet our adorable cats looking for their forever home!</p>

      <div className="filters d-flex justify-content-center gap-3 mt-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search by name"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          style={{ maxWidth: '300px' }}
        />

        <select
          className="form-select"
          value={selectedBreed}
          onChange={(e) => setSelectedBreed(e.target.value)}
          style={{ maxWidth: '200px' }}
        >
          <option value="All">All Breeds</option>
          {[...new Set(availableCats.map((cat) => cat.Breed))].map((breed, index) => (
            <option key={index} value={breed}>
              {breed}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-4 row g-4 cats-container" id="cats-container">
        {filteredCats.length > 0 ? (
          filteredCats.map((cat, i) => (
            <div key={i} className="col-md-4">
              <div className="cat-card">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="img-fluid mb-2"
                  style={{ borderRadius: '8px', height: '180px', objectFit: 'cover' }}
                />
                <div className="cat-info">
                  <h3 className="h5 mb-1">{cat.name}</h3>
                  <p className="mb-0">Age: {cat.age}</p>
                  <p className="mb-0">Breed: {cat.Breed}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No cats found matching your criteria.</p>
        )}
      </div>
    </section>
  );
}