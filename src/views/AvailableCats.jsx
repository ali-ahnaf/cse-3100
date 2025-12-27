import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2', breedClass: 'Persian' },
  { name: 'Mittens', age: '2', breedClass: 'Bengal' },
  { name: 'Shadow', age: '1', breedClass: 'Siamese' },
  { name: 'Pumpkin', age: '3', breedClass: 'Birman' },
  { name: 'Luna', age: '4', breedClass: 'Abyssinian' },
  { name: 'Simba', age: '2', breedClass: 'Sphynx' },
  { name: 'Micky', age: '3', breedClass: 'Birman' },
  { name: 'Fluffkin', age: '5', breedClass: 'Peterbald' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBreed, setSelectedBreed] = useState('Select breed');

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

  const filteredCats = cats.filter((cat) => {
    const matchesSearch = cat.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBreed = selectedBreed === 'Select breed' || cat.breedClass === selectedBreed;
    return matchesSearch && matchesBreed;
  });

  return (
    <section className="available-page">
      <div className="container-wrapper">
        <div className="available-header">
          <h2 className="main-title">Available cats</h2>
          
          <div className="filters-group">
            <select 
              className="filter-select" 
              value={selectedBreed}
              onChange={(e) => setSelectedBreed(e.target.value)}
            >
              <option>Select breed</option>
              <option>Abyssinian</option>
              <option>Bengal</option>
              <option>Birman</option>
              <option>Persian</option>
              <option>Peterbald</option>
              <option>Siamese</option>
              <option>Sphynx</option>
            </select>

            <div className="search-box">
              <input 
                type="text" 
                className="filter-input" 
                placeholder="search by name" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="filter-button">Search</button>
            </div>
          </div>
        </div>

        <hr className="styled-hr" />

        <div className="cats-grid">
          {filteredCats.length > 0 ? (
            filteredCats.map((cat, i) => (
              <div key={i} className="cat-card">
                <img src={cat.image} alt={cat.name} />
                <div className="cat-info">
                    <h3>{cat.name}</h3>
                    <p>Age: {cat.age} month/s</p>
                    <p>Breed Type: {cat.breedClass}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="no-results">No cats found matching your criteria.</p>
          )}
        </div>
      </div>
    </section>
  );
}
