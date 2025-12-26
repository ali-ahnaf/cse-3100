import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Micky mouse', age: '2', breed: 'Sphynx' },
  { name: 'Micky mouse', age: '2', breed: 'Persian' },
  { name: 'Micky mouse', age: '2', breed: 'Birman' },
  { name: 'Micky mouse', age: '2', breed: 'Abyssinian' },
  { name: 'Micky mouse', age: '2', breed: 'Persian' },
  { name: 'Micky mouse', age: '2', breed: 'Bengal' },
  { name: 'Micky mouse', age: '2', breed: 'Siamese' },
  { name: 'Micky mouse', age: '2', breed: 'Peterbald' },
];

const breeds = ['select breed', 'Sphynx', 'Peterbald', 'Birman', 'Abyssinian', 'Persian', 'Bengal', 'Siamese'];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [filteredCats, setFilteredCats] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('select breed');
  const [searchName, setSearchName] = useState('');

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(
          availableCats.map(() =>
            fetch('https://api.thecatapi.com/v1/images/search').then((res) => res.json())
          )
        );
        const catsWithImages = availableCats.map((cat, index) => ({
          ...cat,
          image: responses[index][0]?.url || '',
        }));
        setCats(catsWithImages);
        setFilteredCats(catsWithImages);
      } catch (error) {
        console.error('Error fetching cat images:', error);
        setCats(availableCats);
        setFilteredCats(availableCats);
      }
    };
    fetchCatImages();
  }, []); 

  useEffect(() => {
    let result = cats;
    
    if (selectedBreed !== 'select breed') {
      result = result.filter((cat) => cat.breed === selectedBreed);
    }
    
    if (searchName.trim()) {
      result = result.filter((cat) =>
        cat.name.toLowerCase().includes(searchName.toLowerCase())
      );
    }
    
    setFilteredCats(result);
  }, [selectedBreed, searchName, cats]);

  const handleSearch = () => {
    
  };

  return (
    <main>
      <h1>Available cats</h1>
      
      <div className="filters">
        <select value={selectedBreed} onChange={(e) => setSelectedBreed(e.target.value)}>
          {breeds.map((breed) => (
            <option key={breed} value={breed}>
              {breed}
            </option>
          ))}
        </select>
        
        <input
          type="text"
          placeholder="search by name"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />
        
        <button onClick={handleSearch}>search</button>
      </div>

      <div className="cat-grid">
        {filteredCats.map((cat, i) => (
          <div key={i} className="cat-card">
            {cat.image && <img src={cat.image} alt={cat.name} />}
            <div className="cat-info">
              <div className="cat-name">{cat.name}</div>
              <div className="cat-age">Age: {cat.age}</div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
