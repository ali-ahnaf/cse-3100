import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Persian' },
  { name: 'Mittens', age: '2', breed: 'Siamese' },
  { name: 'Shadow', age: '1', breed: 'Bengal' },
  { name: 'Pumpkin', age: '3', breed: 'Abyssinian' },
  { name: 'Luna', age: '4', breed: 'Birman' },
  { name: 'Simba', age: '2', breed: 'Sphynx' },
  { name: 'Garfield', age: '5', breed: 'Persian' },
  { name: 'Oreo', age: '1', breed: 'Peterbald' },
];

const breeds = ['All', 'Sphynx', 'Peterbald', 'Birman', 'Abyssinian', 'Persian', 'Bengal', 'Siamese'];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('All');
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
    const matchesBreed = selectedBreed === 'All' || cat.breed === selectedBreed;
    const matchesName = cat.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesBreed && matchesName;
  });

  return (
    <section>
      <div style={{ marginBottom: '2rem' }}>
        <h2>Available Cats</h2>
        <p>Meet our adorable cats looking for their forever home!</p>
      </div>

      <div className="filter-container mb-4" style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
        
        {/* Dropdown with Dark Border */}
        <select 
          className="form-control"
          style={{ 
            padding: '0.5rem', 
            borderRadius: '4px', 
            border: '2px solid #555', 
            minWidth: '200px' 
          }}
          value={selectedBreed} 
          onChange={(e) => setSelectedBreed(e.target.value)}
        >
          {breeds.map(breed => (
            <option key={breed} value={breed}>
              {breed === 'All' ? 'Select Breed' : breed}
            </option>
          ))}
        </select>

        {/* Input with Dark Border */}
        <input 
          type="text" 
          placeholder="Search by name" 
          className="form-control"
          style={{ 
            padding: '0.5rem', 
            borderRadius: '4px', 
            border: '2px solid #555', 
            minWidth: '200px' 
          }}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
        <button style={{ 
          backgroundColor: '#0d6efd', 
          color: 'white', 
          border: 'none', 
          padding: '0.5rem 1rem', 
          borderRadius: '4px',
          cursor: 'pointer' 
        }}>
          Search
        </button>
      </div>

      <div className="row cats-container">
        {filteredCats.map((cat, i) => (
          <div key={i}>
            {/* Card with Dark Border */}
            <div className="cat-card" style={{ 
              border: '2px solid #555', 
              borderRadius: '8px', 
              padding: '10px',
              height: '100%' 
            }}>
              
              {/* Image with Dark Border */}
              <img
                src={cat.image}
                alt={cat.name}
                style={{
                  borderRadius: '4px',
                  height: '200px',
                  width: '100%',
                  objectFit: 'cover',
                  marginBottom: '10px',
                  border: '2px solid #555' 
                }}
              />
              
              {/* Info Box with Dark Border */}
              <div className="cat-info" style={{ 
                border: '2px solid #555', 
                padding: '10px', 
                borderRadius: '4px',
                textAlign: 'left'
              }}>
                <h3 className="h5 mb-1" style={{ fontWeight: 'bold' }}>{cat.name}</h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                  <p className="mb-0">Age: {cat.age}</p>
                  <p className="mb-0"><strong>{cat.breed}</strong></p>
                </div>
              </div>
            </div>
          </div>
        ))}
        {filteredCats.length === 0 && (
           <p>No cats found matching your criteria.</p>
        )}
      </div>
    </section>
  );
}