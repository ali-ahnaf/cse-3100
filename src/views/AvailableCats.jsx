import { useEffect, useState } from 'react';

const availableCats = [
  { id: 1, name: 'Whiskers', age: '2', breed: 'Sphynx' },
  { id: 2, name: 'Mittens', age: '2', breed: 'Peterbald' },
  { id: 3, name: 'Shadow', age: '1', breed: 'Birman' },
  { id: 4, name: 'Pumpkin', age: '3', breed: 'Abyssinian' },
  { id: 5, name: 'Luna', age: '4', breed: 'Persian' },
  { id: 6, name: 'Simba', age: '2', breed: 'Bengal' },
  { id: 7, name: 'Bella', age: '3', breed: 'Siamese' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [filteredCats, setFilteredCats] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('All Breeds');
  const [searchName, setSearchName] = useState('');

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

  // Filter cats when breed, name, or cats list changes
  useEffect(() => {
    let filtered = cats;

    // Filter by breed
    if (selectedBreed !== 'All Breeds') {
      filtered = filtered.filter((cat) => cat.breed === selectedBreed);
    }

    // Filter by name
    if (searchName.trim() !== '') {
      filtered = filtered.filter((cat) =>
        cat.name.toLowerCase().includes(searchName.toLowerCase())
      );
    }

    setFilteredCats(filtered);
  }, [cats, selectedBreed, searchName]);

  const breeds = [
    'All Breeds',
    'Sphynx',
    'Peterbald',
    'Birman',
    'Abyssinian',
    'Persian',
    'Bengal',
    'Siamese',
  ];

  return (
    <section className="text-center mt-4">
      <h2>Available Cats</h2>
      <p>Meet our adorable cats looking for their forever home!</p>

      <div className="filter-container">
        <select
          value={selectedBreed}
          onChange={(e) => setSelectedBreed(e.target.value)}
        >
          {breeds.map((breed) => (
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

      <p className="mt-3">Showing {filteredCats.length} cat(s)</p>

      <div className="cats-container">
        {filteredCats.map((cat) => (
          <div key={cat.id}>
            <div className="cat-card">
              <img
                src={cat.image}
                alt={cat.name}
                className="img-fluid mb-2"
                style={{
                  borderRadius: '8px 8px 0 0',
                  height: '200px',
                  objectFit: 'cover',
                  width: '100%',
                }}
              />
              <div className="cat-info">
                <h3 className="h5 mb-1">{cat.name}</h3>
                <p className="mb-1">Breed: {cat.breed}</p>
                <p className="mb-0">Age: {cat.age}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredCats.length === 0 && (
        <p className="mt-4 text-muted">No cats found matching your filters.</p>
      )}
    </section>
  );
}
