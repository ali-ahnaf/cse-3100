import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Siamese' },
  { name: 'Mittens', age: '2', breed: 'Persian' },
  { name: 'Shadow', age: '1', breed: 'Domestic Shorthair' },
  { name: 'Pumpkin', age: '3', breed: 'Maine Coon' },
  { name: 'Luna', age: '4', breed: 'Siamese' },
  { name: 'Simba', age: '2', breed: 'Domestic Shorthair' },
  { name: 'Oscar', age: '1', breed: 'Persian' },
  { name: 'Cleo', age: '2', breed: 'Maine Coon' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [breedFilter, setBreedFilter] = useState('All'); // New state for breed filter
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
    let results = cats.filter(cat =>
      cat.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (breedFilter !== 'All') {
      results = results.filter(cat => cat.breed === breedFilter);
    }

    setFilteredCats(results);
  }, [searchTerm, breedFilter, cats]); // Added breedFilter to dependencies

  // Dynamically get unique breeds for the filter dropdown
  const uniqueBreeds = ['All', ...new Set(availableCats.map(cat => cat.breed))];

  return (
    <section className="text-center mt-4">
      <h2>Available Cats</h2>
      <p>Meet our adorable cats looking for their forever home!</p>

      <div className="mb-3 d-flex justify-content-center">
        <input
          type="text"
          className="form-control me-2"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ maxWidth: '200px' }}
        />
        <select
          className="form-select"
          value={breedFilter}
          onChange={(e) => setBreedFilter(e.target.value)}
          style={{ maxWidth: '150px' }}
        >
          {uniqueBreeds.map(breed => (
            <option key={breed} value={breed}>{breed}</option>
          ))}
        </select>
      </div>

      <div className="mt-2 row g-4 cats-container" id="cats-container">
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