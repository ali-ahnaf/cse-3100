import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Siamese' },
  { name: 'Mittens', age: '2', breed: 'Persian' },
  { name: 'Shadow', age: '1', breed: 'Bengal' },
  { name: 'Pumpkin', age: '3', breed: 'Abyssinian' },
  { name: 'Luna', age: '4', breed: 'Birman' },
  { name: 'Simba', age: '2', breed: 'Sphynx' },
  { name: 'Oliver', age: '1', breed: 'Peterbald' },
  { name: 'Bella', age: '3', breed: 'Siamese' },
  { name: 'Charlie', age: '2', breed: 'Persian' },
  { name: 'Nicky mouse', age: '2', breed: 'Bengal' },
  { name: 'Micky mouse', age: '1', breed: 'Abyssinian' },
  { name: 'Micky mouse', age: '2', breed: 'Birman' },
];

const ALL_BREEDS = ['Select breed', 'Sphynx', 'Peterbald', 'Birman', 'Abyssinian', 'Persian', 'Bengal', 'Siamese'];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [filteredCats, setFilteredCats] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('Select breed');
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

  const handleSearch = () => {
    let result = cats;
    
    if (selectedBreed !== 'Select breed') {
      result = result.filter(cat => cat.breed === selectedBreed);
    }
    
    if (searchName.trim() !== '') {
      result = result.filter(cat => 
        cat.name.toLowerCase().includes(searchName.toLowerCase())
      );
    }
    
    setFilteredCats(result);
  };

  return (
    <div style={styles.mainContent}>
      {/* Available cats title and filters in ONE LINE like PDF */}
      <div style={styles.titleBar}>
        <h2 style={styles.pageTitle}>Available cats</h2>
        <div style={styles.filterNavbar}>
          <select 
            style={styles.filterDropdown}
            value={selectedBreed}
            onChange={(e) => setSelectedBreed(e.target.value)}
          >
            {ALL_BREEDS.map((breed, index) => (
              <option key={index} value={breed}>{breed}</option>
            ))}
          </select>
          
          <input
            type="text"
            style={styles.filterInput}
            placeholder="search by name"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          />
          
          <button 
            style={styles.filterButton}
            onClick={handleSearch}
          >
            search
          </button>
        </div>
      </div>

      {/* Cat Cards Grid */}
      <div style={styles.catsGrid}>
        {filteredCats.map((cat, i) => (
          <div key={i} style={styles.catCard}>
            <img
              src={cat.image}
              alt={cat.name}
              style={styles.catImage}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://placekitten.com/250/200';
              }}
            />
            <div style={styles.catInfo}>
              <h3 style={styles.catName}>{cat.name}</h3>
              <p style={styles.catDetail}>Age: {cat.age} years</p>
              <p style={styles.catDetail}>Breed: {cat.breed}</p>
            </div>
          </div>
        ))}
      </div>
      
      {filteredCats.length === 0 && (
        <p style={styles.noResults}>No cats found matching your criteria.</p>
      )}
    </div>
  );
}

// Updated styling - NO header styles
const styles = {
  mainContent: {
    padding: '20px 0'
  },
  titleBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '30px',
    flexWrap: 'wrap',
    gap: '20px'
  },
  pageTitle: {
    fontSize: '28px',
    fontWeight: 'bold',
    margin: 0,
    color: '#000',
    textAlign: 'left'
  },
  filterNavbar: {
    display: 'flex',
    gap: '15px',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  filterDropdown: {
    padding: '10px 15px',
    fontSize: '16px',
    border: '2px solid #0066cc',
    borderRadius: '4px',
    minWidth: '180px',
    backgroundColor: 'white'
  },
  filterInput: {
    padding: '10px 15px',
    fontSize: '16px',
    border: '2px solid #0066cc',
    borderRadius: '4px',
    minWidth: '200px'
  },
  filterButton: {
    padding: '10px 25px',
    fontSize: '16px',
    fontWeight: 'bold',
    backgroundColor: '#0066cc',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  catsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '25px'
  },
  catCard: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
  },
  catImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover'
  },
  catInfo: {
    padding: '15px'
  },
  catName: {
    margin: '0 0 10px 0',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#333'
  },
  catDetail: {
    margin: '0 0 5px 0',
    fontSize: '14px',
    color: '#666'
  },
  noResults: {
    textAlign: 'center',
    fontSize: '18px',
    color: '#666',
    marginTop: '40px',
    padding: '20px',
    backgroundColor: '#f5f5f5',
    borderRadius: '5px'
  }
};