import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2',breed: 'Siamese' },
  { name: 'Mittens', age: '2', breed: 'Bengal'  },
  { name: 'Shadow', age: '1', breed: 'Abyssinian' },
  { name: 'Pumpkin', age: '3', breed: 'Birman' },
  { name: 'Luna', age: '4', breed: 'Persian' },
  { name: 'Simba', age: '2', breed: 'Bengal' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('All');
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
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  }, []);

  return (
    <section className="text-center mt-4">
      <h2>Available Cats</h2>
      <p>Meet our adorable cats looking for their forever home!</p>

      <div className="mt-3 d-flex justify-content-start gap-3 align-items-center" style={{ paddingLeft: '1rem' }}>
        <select
          value={selectedBreed}
          onChange={(e) => setSelectedBreed(e.target.value)}
          className="form-select form-control-lg filter-gradient-1"
          style={{ width: 300, height: 44 }}
        >
          <option value="All">All breeds</option>
          {[...new Set(availableCats.map((c) => c.breed))].map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>

        <input
          type="search"
          placeholder="Search by name"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          className="form-control form-control-lg filter-gradient-2"
          style={{ width: 420, height: 44 }}
        />
      </div>

  <div className="mt-4 cat-grid cats-container" id="cats-container" style={{ paddingTop: 12 }}>
        {cats
          .filter((cat) =>
            selectedBreed === 'All' ? true : cat.breed === selectedBreed
          )
          .filter((cat) =>
            cat.name.toLowerCase().includes(searchName.toLowerCase())
          )
          .map((cat, i) => (
          <div key={i}>
            <div className="cat-card">
              <img
                src={cat.image}
                alt={cat.name}
                className="img-fluid mb-2"
                style={{
                  borderRadius: '8px',
                  width: '100%',
                  maxHeight: '200px',
                  objectFit: 'cover',
                }}
              />
              <div className="cat-info">
                <h3 className="h5 mb-1">{cat.name}</h3>
                <p className="mb-0">Age: {cat.age}</p>
                <p className="mb-0"><span className="breed-badge">{cat.breed}</span></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
