import { useEffect, useState, useMemo } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2', breed_type: 'Sphynx' },
  { name: 'Mittens', age: '2', breed_type: 'Peterbald' },
  { name: 'Shadow', age: '1', breed_type: 'Birman' },
  { name: 'Pumpkin', age: '3', breed_type: 'Abyssinian' },
  { name: 'Luna', age: '4', breed_type: 'Persian' },
  { name: 'Simba', age: '2', breed_type: 'Bengal' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const uniqueBreeds = useMemo(() => {
    const breeds = availableCats.map(cat => cat.breed_type);
    return ['All', ...new Set(breeds)];
  }, []);

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

  const filteredCats = useMemo(() => {
    return cats.filter(cat => {
      const breedMatch = selectedBreed === 'All' || cat.breed_type === selectedBreed;

      const nameMatch = cat.name.toLowerCase().includes(searchTerm.toLowerCase());

      return breedMatch && nameMatch;
    });
  }, [cats, selectedBreed, searchTerm]);


  const handleBreedChange = (event) => {
    setSelectedBreed(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <section className="text-center mt-4">
      <h2>Available Cats</h2>
      <p>Meet our adorable cats looking for their forever home!</p>

      {}
      <div className="d-flex justify-content-center gap-3 mb-4">
        {}
        <div className="form-group w-25">
          <label htmlFor="breed-filter" className="form-label visually-hidden">
            Filter by Breed
          </label>
          <select
            id="breed-filter"
            className="form-select"
            value={selectedBreed}
            onChange={handleBreedChange}
          >
            {uniqueBreeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </div>

        {}
        <div className="form-group w-25">
          <label htmlFor="name-search" className="form-label visually-hidden">
            Search by Name
          </label>
          <input
            type="text"
            id="name-search"
            className="form-control"
            placeholder="Search by cat name..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      <div className="mt-2 row g-4 cats-container" id="cats-container">
        {}
        {filteredCats.length > 0 ? (
          filteredCats.map((cat, i) => (
            <div key={i} className="col-md-4">
              <div className="cat-card">
                {}
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
                  <p className="mb-0">Breed Type: {cat.breed_type}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-muted">
            No cats match the current filter criteria.
          </p>
        )}
      </div>
    </section>
  );
}