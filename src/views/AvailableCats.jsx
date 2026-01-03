import { useEffect, useState } from 'react';

const baseCats = [
  { id: 1, name: 'Whiskers', age: '2', breed: 'Persian' },
  { id: 2, name: 'Mittens', age: '2', breed: 'Siamese' },
  { id: 3, name: 'Shadow', age: '1', breed: 'Bengal' },
  { id: 4, name: 'Pumpkin', age: '3', breed: 'Abyssinian' },
  { id: 5, name: 'Luna', age: '4 months', breed: 'Birman' },
  { id: 6, name: 'Simba', age: '2', breed: 'Sphynx' },
  { id: 7, name: 'Oliver', age: '1', breed: 'Peterbald' },
  { id: 8, name: 'Bella', age: '3', breed: 'Persian' },
];

const breeds = ['All breeds', 'Sphynx', 'Peterbald', 'Birman', 'Abyssinian', 'Persian', 'Bengal', 'Siamese'];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [breedFilter, setBreedFilter] = useState('All breeds');
  const [nameSearch, setNameSearch] = useState('');
  const [loading, setLoading] = useState(true);

  // Fetch random images from The Cat API
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const responses = await Promise.all(
          baseCats.map(() =>
            fetch('https://api.thecatapi.com/v1/images/search').then(res => res.json())
          )
        );

        const catsWithImages = baseCats.map((cat, index) => ({
          ...cat,
          image: responses[index][0]?.url || 'https://via.placeholder.com/400?text=No+Image',
        }));

        setCats(catsWithImages);
      } catch (error) {
        console.error('Error fetching cat images:', error);
        // Fallback: use placeholder
        setCats(baseCats.map(cat => ({ ...cat, image: 'https://via.placeholder.com/400?text=Error' })));
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  // Filtering logic
  const filteredCats = cats.filter(cat => {
    if (breedFilter !== 'All breeds' && cat.breed !== breedFilter) return false;
    if (nameSearch && !cat.name.toLowerCase().includes(nameSearch.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4 display-4">Available cats</h1>

      {/* Filter Bar - Matches mockup exactly */}
      <div className="row justify-content-center mb-5">
        <div className="col-lg-8">
          <div className="d-flex flex-wrap gap-3 align-items-center justify-content-center">
            <select
              className="form-select w-auto"
              style={{ minWidth: '180px' }}
              value={breedFilter}
              onChange={(e) => setBreedFilter(e.target.value)}
            >
              {breeds.map(b => (
                <option key={b} value={b}>
                  {b === 'All breeds' ? 'select breed ▼' : b}
                </option>
              ))}
            </select>

            <input
              type="text"
              className="form-control w-auto"
              placeholder="search by name"
              style={{ minWidth: '200px' }}
              value={nameSearch}
              onChange={(e) => setNameSearch(e.target.value)}
            />

            <button className="btn btn-primary px-4">
              search
            </button>
          </div>
        </div>
      </div>

      {/* Loading state */}
      {loading && <p className="text-center">Loading adorable cats...</p>}

      {/* Cat Grid */}
      <div className="row g-4 justify-content-center">
        {filteredCats.map(cat => (
          <div key={cat.id} className="col-sm-6 col-md-4 col-lg-3">
            <div className="position-relative rounded-4 overflow-hidden shadow" style={{ height: '380px' }}>
              <img
                src={cat.image}
                alt={cat.name}
                className="w-100 h-100"
                style={{ objectFit: 'cover' }}
              />

              {/* Bottom banner with name, age, breed */}
              <div className="position-absolute bottom-0 start-0 end-0 p-3">
                <div className="bg-white rounded-5 px-4 py-3 text-center shadow-sm">
                  <h3 className="h5 mb-1 fw-bold">{cat.name}</h3>
                  <p className="mb-1 small text-muted">Age: {cat.age}</p>
                  <p className="mb-0 small text-muted">Breed: {cat.breed}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {!loading && filteredCats.length === 0 && (
        <p className="text-center mt-5 text-muted">No cats match your search. Try different filters!</p>
      )}
    </div>
  );
}