import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Sphynx' },
  { name: 'Mittens', age: '2', breed: 'Birman' },
  { name: 'Shadow', age: '1', breed: 'Abyssinian' },
  { name: 'Pumpkin', age: '3', breed: 'Persian' },
  { name: 'Luna', age: '4', breed: 'Bengal' },
  { name: 'Simba', age: '2', breed: 'Siamese' },
];

const breeds = ['All', 'Sphynx', 'Peterbald', 'Birman', 'Abyssinian', 'Persian', 'Bengal', 'Siamese'];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBreed, setSelectedBreed] = useState('All');

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
    const matchesName = cat.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBreed = selectedBreed === 'All' || cat.breed === selectedBreed;
    return matchesName && matchesBreed;
  });

  return (
    <section className="text-center mt-4">
      <h2>Available Cats</h2>
      <p>Meet our adorable cats looking for their forever home!</p>

      <div className="filters mb-3 d-flex flex-column flex-sm-row justify-content-center gap-2">
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="form-control"
          style={{ maxWidth: '200px' }}
        />
        <select
          value={selectedBreed}
          onChange={(e) => setSelectedBreed(e.target.value)}
          className="form-select"
          style={{ maxWidth: '200px' }}
        >
          {breeds.map((breed, i) => (
            <option key={i} value={breed}>
              {breed}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-2 row g-4 cats-container">
        {filteredCats.map((cat, i) => (
          <div key={i} className="col-12 col-sm-6 col-md-4">
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
                <h3 className="h5 mb-1">{cat.name}</h3>
                <p className="mb-0">Age: {cat.age}</p>
                <p className="mb-0">Breed: {cat.breed}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
