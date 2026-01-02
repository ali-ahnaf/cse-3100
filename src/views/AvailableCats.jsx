import { useEffect, useState } from 'react';

const availableCats = [
  { id: 1, name: 'Whiskers', breed: 'Sphynx', age: '2' },
  { id: 2, name: 'Mittens', breed: 'Peterbald', age: '2' },
  { id: 3, name: 'Shadow', breed: 'Birman', age: '1' },
  { id: 4, name: 'Pumpkin', breed: 'Abyssinian', age: '3' },
  { id: 5, name: 'Luna', breed: 'Persian', age: '4' },
  { id: 6, name: 'Simba', breed: 'Bengal', age: '2' },
  { id: 7, name: 'Bella', breed: 'Siamese', age: '3' },
  { id: 8, name: 'Oliver', breed: 'Sphynx', age: '1' },
];

const BREEDS = ['All Breeds', 'Sphynx', 'Peterbald', 'Birman', 'Abyssinian', 'Persian', 'Bengal', 'Siamese'];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('All Breeds');
  const [searchName, setSearchName] = useState('');
  const [filteredCats, setFilteredCats] = useState([]);

  useEffect(() => {
    // Fetch cat images from an API endpoint and assign it to the availableCats list
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

  useEffect(() => {
    // Filter cats based on breed and name
    const filtered = cats.filter((cat) => {
      const breedMatch = selectedBreed === 'All Breeds' || cat.breed === selectedBreed;
      const nameMatch = cat.name.toLowerCase().includes(searchName.toLowerCase());
      return breedMatch && nameMatch;
    });
    setFilteredCats(filtered);
  }, [cats, selectedBreed, searchName]);

  return (
    <section>
      <h2>Available Cats</h2>
      <p>Meet our adorable cats looking for their forever home!</p>

      <div className="filter-container">
        <select
          value={selectedBreed}
          onChange={(e) => setSelectedBreed(e.target.value)}
        >
          {BREEDS.map((breed) => (
            <option key={breed} value={breed}>
              {breed}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Search by cat name..."
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />
      </div>

      <div className="cats-container">
        {filteredCats.map((cat) => (
          <div key={cat.id} className="cat-card">
            <img
              src={cat.image}
              alt={cat.name}
              className="cat-image"
            />
            <div className="cat-info">
              <h3 className="cat-name">{cat.name}</h3>
              <p className="cat-breed">{cat.breed}</p>
              <p className="cat-age">Age: {cat.age}</p>
            </div>
          </div>
        ))}
      </div>

      {filteredCats.length === 0 && (
        <p style={{ textAlign: 'center', marginTop: '2em', color: '#666' }}>
          No cats found matching your criteria.
        </p>
      )}
    </section>
  );
}
