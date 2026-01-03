import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Sphynx' },
  { name: 'Mittens', age: '2', breed: 'Birman' },
  { name: 'Shadow', age: '1', breed: 'Bengal' },
  { name: 'Pumpkin', age: '3', breed: 'Persian' },
  { name: 'Luna', age: '4', breed: 'Abyssinian' },
  { name: 'Simba', age: '2', breed: 'Siamese' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [breedFilter, setBreedFilter] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [nameFilter, setNameFilter] = useState('');

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


  const breedOptions = Array.from(new Set(availableCats.map(cat => cat.breed)));

  const filteredCats = cats.filter(cat => {
    const matchesBreed = !breedFilter || cat.breed === breedFilter;
    const matchesName = !nameFilter || cat.name.toLowerCase() === nameFilter.toLowerCase();
    return matchesBreed && matchesName;
  });

  return (
    <section className="text-center mt-4">
      <h2>Available Cats</h2>
      <p>Meet our adorable cats looking for their forever home!</p>

      <div className="cat-filters" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', margin: '1.5rem 0' }}>
        <input
          type="text"
          placeholder="Search by name..."
          value={nameInput}
          onChange={e => setNameInput(e.target.value)}
          style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc', minWidth: 180 }}
        />
        <button
          onClick={() => setNameFilter(nameInput)}
          style={{ padding: '0.5rem 1rem', borderRadius: '4px', border: '1px solid #39f3b5ff', background: '#15cc86ff', color: '#fff', cursor: 'pointer' }}
        >
          Search
        </button>
        <select
          value={breedFilter}
          onChange={e => setBreedFilter(e.target.value)}
          style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc', minWidth: 160 }}
        >
          <option value="">All Breeds</option>
          {breedOptions.map(breed => (
            <option key={breed} value={breed}>{breed}</option>
          ))}
        </select>
      </div>

      <div className="cats-container mt-2" id="cats-container">
        {filteredCats.length === 0 ? (
          <p>No cats found.</p>
        ) : (
          filteredCats.map((cat, i) => (
            <div key={i} className="cat-card">
              <img
                src={cat.image}
                alt={cat.name}
                className="cat-img"
              />
              <div className="cat-info">
                <h3 className="h5 mb-1">{cat.name}</h3>
                <p className="mb-0">Age: {cat.age}</p>
                <p className="mb-0"><strong>Breed:</strong> {cat.breed}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
