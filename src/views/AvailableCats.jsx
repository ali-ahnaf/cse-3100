import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Persian' },
  { name: 'Mittens', age: '2', breed: 'Bengal' },
  { name: 'Shadow', age: '1', breed: 'Siamese' },
  { name: 'Pumpkin', age: '3', breed: 'Birman' },
  { name: 'Luna', age: '4', breed: 'Abyssinian' },
  { name: 'Simba', age: '2', breed: 'Sphynx' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(
          availableCats.map(() =>
            fetch('https://api.thecatapi.com/v1/images/search')
              .then(res => res.json())
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

  const filteredCats = cats.filter(cat => {
    const matchBreed =
      selectedBreed === '' || cat.breed === selectedBreed;

    const matchName =
      cat.name.toLowerCase().includes(searchText.toLowerCase());

    return matchBreed && matchName;
  });

  return (
    <section className="mt-4">
      <div className="container">
        <h2 className="text-center">Available Cats</h2>
        <p className="text-center">
          Meet our adorable cats looking for their forever home!
        </p>

        {/* Filters */}
        <div className="row g-3 my-4">
          <div className="col-md-4">
            <select
              className="form-select"
              value={selectedBreed}
              onChange={(e) => setSelectedBreed(e.target.value)}
            >
              <option value="">All Breeds</option>
              <option value="Persian">Persian</option>
              <option value="Bengal">Bengal</option>
              <option value="Siamese">Siamese</option>
              <option value="Birman">Birman</option>
              <option value="Abyssinian">Abyssinian</option>
              <option value="Sphynx">Sphynx</option>
            </select>
          </div>

          <div className="col-md-6 d-flex gap-2">
            <input
              type="text"
              className="form-control"
              placeholder="Search by cat name"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />

            <button
              className="btn btn-primary"
              onClick={() => setSearchText(searchInput)}
            >
              Search
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="row g-4">
          {filteredCats.length === 0 && (
            <p className="text-center text-muted">No cats found</p>
          )}

          {filteredCats.map((cat, i) => (
            <div key={i} className="col-md-4">
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
                <div className="cat-info text-center">
                  <h3 className="h5 mb-1">{cat.name}</h3>
                  <p className="mb-0">Age: {cat.age}</p>
                  <p>Breed: {cat.breed}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
