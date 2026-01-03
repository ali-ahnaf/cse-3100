import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Sphynx' },
  { name: 'Mittens', age: '2', breed: 'Peterbald' },
  { name: 'Shadow', age: '1', breed: 'Birman' },
  { name: 'Pumpkin', age: '3', breed: 'Abyssinian' },
  { name: 'Luna', age: '4', breed: 'Persian' },
  { name: 'Simba', age: '2', breed: 'Siamese' },
];

const breeds = [
  'All',
  'Sphynx',
  'Peterbald',
  'Birman',
  'Abyssinian',
  'Persian',
  'Bengal',
  'Siamese',
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);

  const [selectedBreed, setSelectedBreed] = useState('All');
  const [searchDraft, setSearchDraft] = useState('');
  const [searchApplied, setSearchApplied] = useState('');

  useEffect(() => {
    // Fetch cat images from an API endpoint and assign it to the featuredCats list
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

  const filteredCats = cats
    .filter((c) => selectedBreed === 'All' || c.breed === selectedBreed)
    .filter((c) => {
      const q = searchApplied.trim().toLowerCase();
      if (!q) return true;
      return (c.name ?? '').toLowerCase().includes(q);
    });

  return (
    <section className="text-center mt-4">
      <h2>Available Cats</h2>
      <p>Meet our adorable cats looking for their forever home!</p>

      <div className="filters-row mt-3 mb-3">
        <select
          className="form-select"
          value={selectedBreed}
          onChange={(e) => setSelectedBreed(e.target.value)}
        >
          {breeds.map((b) => (
            <option key={b} value={b}>
              {b === 'All' ? 'select breed' : b}
            </option>
          ))}
        </select>

        <input
          className="form-control"
          value={searchDraft}
          onChange={(e) => setSearchDraft(e.target.value)}
          placeholder="search by name"
        />

        <button
          className="btn btn-dark"
          type="button"
          onClick={() => setSearchApplied(searchDraft)}
        >
          search
        </button>
      </div>

      <div className="mt-2 row g-4">
        {filteredCats.map((cat) => (
          <div key={cat.name} className="col-lg-3 col-md-4 col-sm-6">
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
