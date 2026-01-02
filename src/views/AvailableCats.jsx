import { useEffect, useMemo, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Bengal' },
  { name: 'Mittens', age: '2', breed: 'Persian' },
  { name: 'Shadow', age: '1', breed: 'Siamese' },
  { name: 'Pumpkin', age: '3', breed: 'Birman' },
  { name: 'Luna', age: '4', breed: 'Abyssinian' },
  { name: 'Simba', age: '2', breed: 'Sphynx' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('All');
  const [nameQuery, setNameQuery] = useState('');

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
          image: responses[index]?.[0]?.url,
        }));

        setCats(catsWithImages);
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  }, []);

  const breedOptions = useMemo(() => {
    const unique = Array.from(new Set(availableCats.map((c) => c.breed)));
    return ['All', ...unique];
  }, []);

  const filteredCats = useMemo(() => {
    return cats.filter((cat) => {
      const breedOk = selectedBreed === 'All' || cat.breed === selectedBreed;
      const nameOk =
        nameQuery.trim() === '' ||
        cat.name.toLowerCase().includes(nameQuery.trim().toLowerCase());
      return breedOk && nameOk;
    });
  }, [cats, selectedBreed, nameQuery]);

  return (
    <section className="mt-4">
      <div className="d-flex align-items-center flex-wrap gap-3 mb-3">
        <h2 className="m-0">Available Cats</h2>

        <div className="flex-grow-1" />

        {/* filters */}
        <select
          className="form-select"
          style={{ width: 180 }}
          value={selectedBreed}
          onChange={(e) => setSelectedBreed(e.target.value)}
        >
          {breedOptions.map((b) => (
            <option key={b} value={b}>
              {b === 'All' ? 'select breed' : b}
            </option>
          ))}
        </select>

        <input
          className="form-control"
          style={{ width: 220 }}
          placeholder="search by name"
          value={nameQuery}
          onChange={(e) => setNameQuery(e.target.value)}
        />

        <button
          className="btn btn-primary"
          type="button"
          onClick={() => {}}
          title="Filters apply automatically"
        >
          search
        </button>
      </div>

      <p className="text-muted">
        Meet our adorable cats looking for their forever home!
      </p>

      <div className="cats-container">
        {filteredCats.map((cat) => (
          <div key={cat.name} className="cat-card">
            <img
              src={cat.image}
              alt={cat.name}
              className="img-fluid"
              style={{ height: '200px', width: '100%', objectFit: 'cover' }}
            />
            <div className="cat-info">
              <h3 className="h5 mb-1">{cat.name}</h3>
              <p className="mb-0">Age: {cat.age}</p>
              <p className="mb-0">Breed: {cat.breed}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
