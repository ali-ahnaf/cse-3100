import { useEffect, useState, useMemo } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Sphynx' },
  { name: 'Mittens', age: '2', breed: 'Peterbald' },
  { name: 'Shadow', age: '1', breed: 'Birman' },
  { name: 'Pumpkin', age: '3', breed: 'Abyssinian' },
  { name: 'Luna', age: '4', breed: 'Persian' },
  { name: 'Simba', age: '2', breed: 'Bengal' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [breedFilter, setBreedFilter] = useState('All');

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

  const breeds = useMemo(
    () => ['All', ...Array.from(new Set(availableCats.map((c) => c.breed)))],
    []
  );

  const filteredCats = useMemo(() => {
    return cats.filter((cat) => {
      const matchesName = cat.name
        .toLowerCase()
        .includes(nameFilter.toLowerCase());

      const matchesBreed =
        breedFilter === 'All' || cat.breed === breedFilter;

      return matchesName && matchesBreed;
    });
  }, [cats, nameFilter, breedFilter]);

  return (
    <>
      <section className="hero-section text-center py-5 bg-light">
        <div className="container">
          <h2 className="display-5 fw-bold mb-3">Available Cats</h2>
          <p className="lead">
            Meet our adorable cats looking for their forever home!
          </p>
        </div>
      </section>

      <section className="container mt-4">

        <div className="row g-4 mb-4">
          <div className="col-md-6">
            <label className="form-label fw-semibold">Search by name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Type a cat name"
              value={nameFilter}
              onChange={(e) => setNameFilter(e.target.value)}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label fw-semibold">Filter by breed</label>
            <select
              className="form-select"
              value={breedFilter}
              onChange={(e) => setBreedFilter(e.target.value)}
            >
              {breeds.map((b) => (
                <option key={b} value={b}>
                  {b === 'All' ? 'All Breeds' : b}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="cats-container">
          {filteredCats.map((cat, i) => (
            <div key={i} className="cat-card">
              <img src={cat.image} alt={cat.name} />
              <div className="cat-info">
                <h3 className="h5 mb-1">{cat.name}</h3>
                <p className="mb-0">Age: {cat.age}</p>
                <p className="mb-0">Breed: {cat.breed}</p>
              </div>
            </div>
          ))}

          {filteredCats.length === 0 && (
            <p className="text-center mt-4">No cats found.</p>
          )}
        </div>
      </section>
    </>
  );
}
