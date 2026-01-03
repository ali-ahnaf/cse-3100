import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Persian' },
  { name: 'Mittens', age: '2', breed: 'Abyssinian' },
  { name: 'Shadow', age: '1', breed: 'Siamese' },
  { name:  'Pumpkin', age: '3', breed: 'Maine Coon' },
  { name: 'Luna', age: '4', breed:  'Persian' },
  { name: 'Simba', age: '2', breed: 'Bengal' },
  { name: 'Tiger', age: '3', breed:  'Abyssinian' },
  { name: 'Cleo', age: '2', breed: 'Siamese' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [filteredCats, setFilteredCats] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

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
          image: responses[index][0]. url,
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

    if (selectedBreed) {
      filtered = filtered.filter((cat) => cat.breed === selectedBreed);
    }

    if (searchTerm) {
      filtered = filtered. filter((cat) =>
        cat.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredCats(filtered);
  }, [selectedBreed, searchTerm, cats]);

  const breeds = [...new Set(availableCats.map((cat) => cat.breed))];

  return (
    <section className="text-center mt-4">
      <h2>Available Cats</h2>
      <p>Meet our adorable cats looking for their forever home!</p>


      <div className="filters">
        <div className="filter-group">
          <label htmlFor="breed-filter">Filter by Breed:</label>
          <select
            id="breed-filter"
            value={selectedBreed}
            onChange={(e) => setSelectedBreed(e. target.value)}
          >
            <option value="">All Breeds</option>
            {breeds. map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </div>

        
        <div className="filter-group">
          <label htmlFor="search-box">Search by Name:</label>
          <input
            id="search-box"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Enter cat name..."
          />
        </div>
      </div>
      <div className="mt-2 row g-4" id="cats-container">
        {filteredCats.length > 0 ? (
          filteredCats.map((cat, i) => (
            <div key={i} className="col-md-3">
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
                  <h3 className="h5 mb-1">{cat. name}</h3>
                  <p className="mb-0">Age: {cat.age}</p>
                  <p className="mb-0">Breed: {cat.breed}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="no-results">
            No cats found matching your criteria. 
          </p>
        )}
      </div>
    </section>
  );
}