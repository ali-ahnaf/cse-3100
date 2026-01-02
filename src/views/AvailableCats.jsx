import { useEffect, useState } from 'react';

const availableCats = [
  { id: 1, name: 'Whiskers', breed: 'Siamese', age: '2' },
  { id: 2, name: 'Mittens', breed: 'Persian', age: '2' },
  { id: 3, name: 'Shadow', breed: 'Bengal', age: '1' },
  { id: 4, name: 'Pumpkin', breed: 'Abyssinian', age: '3' },
  { id: 5, name: 'Luna', breed: 'Sphynx', age: '4' },
  { id: 6, name: 'Simba', breed: 'Birman', age: '2' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [breedFilter, setBreedFilter] = useState('All Breeds');
  const [nameFilter, setNameFilter] = useState('');
  const [filteredCats, setFilteredCats] = useState([]);

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

  useEffect(() => {
    let filtered = cats;

    if (breedFilter !== 'All Breeds') {
      filtered = filtered.filter((cat) => cat.breed === breedFilter);
    }

    if (nameFilter.trim() !== '') {
      filtered = filtered.filter((cat) =>
        cat.name.toLowerCase().includes(nameFilter.toLowerCase())
      );
    }

    setFilteredCats(filtered);
  }, [cats, breedFilter, nameFilter]);

  const breeds = ['All Breeds', 'Sphynx', 'Peterbald', 'Birman', 'Abyssinian', 'Persian', 'Bengal', 'Siamese'];

  return (
    <section className="text-center mt-4">
      <h2>Available Cats</h2>
      <p>Meet our adorable cats looking for their forever home!</p>

      <div style={{ marginTop: '2em', marginBottom: '2em', textAlign: 'left' }}>
        <div style={{ marginBottom: '1em' }}>
          <label htmlFor="breed-filter" style={{ marginRight: '0.5em' }}>
            Filter by Breed:
          </label>
          <select
            id="breed-filter"
            value={breedFilter}
            onChange={(e) => setBreedFilter(e.target.value)}
            style={{ padding: '0.5em 1em', fontSize: '1em' }}
          >
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="name-filter" style={{ marginRight: '0.5em' }}>
            Search by Name:
          </label>
          <input
            id="name-filter"
            type="text"
            placeholder="Enter cat name..."
            value={nameFilter}
            onChange={(e) => setNameFilter(e.target.value)}
            style={{ padding: '0.5em 1em', fontSize: '1em', width: '200px' }}
          />
        </div>
      </div>

      <div className="cats-container">
        {filteredCats.length > 0 ? (
          filteredCats.map((cat) => (
            <div key={cat.id}>
              <div className="cat-card">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="img-fluid mb-2"
                  style={{
                    borderRadius: '8px',
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
          ))
        ) : (
          <p style={{ gridColumn: '1 / -1' }}>
            No cats found matching your filters.
          </p>
        )}
      </div>
    </section>
  );
}
