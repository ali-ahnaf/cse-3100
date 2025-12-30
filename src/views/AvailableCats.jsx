import { useEffect, useState, useCallback } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Siamese' },
  { name: 'Mittens', age: '2', breed: 'Bengal' },
  { name: 'Shadow', age: '1', breed: 'Persian' },
  { name: 'Pumpkin', age: '3', breed: 'Birman' },
  { name: 'Luna', age: '4', breed: 'Abyssinian' },
  { name: 'Simba', age: '2', breed: 'Peterbald' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [filteredCats, setFilteredCats] = useState([]);
  const [breedFilter, setBreedFilter] = useState('All Breeds');
  const [nameFilter, setNameFilter] = useState('');

  const fetchCatImages = useCallback(async () => {
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
      setFilteredCats(catsWithImages);
    } catch (error) {
      console.error('Error fetching cat images:', error);
    }
  }, []);

  useEffect(() => {
    fetchCatImages();
  }, [fetchCatImages]);

  useEffect(() => {
    const filtered = cats.filter((cat) => {
      const matchesBreed =
        breedFilter === 'All Breeds' || cat.breed === breedFilter;
      const matchesName = cat.name.toLowerCase().includes(nameFilter.toLowerCase());
      return matchesBreed && matchesName;
    });
    setFilteredCats(filtered);
  }, [breedFilter, nameFilter, cats]);

  return (
    <section className="text-center mt-4">
      <h2>Available Cats</h2>
      <p>Browse our wonderful selection of cats looking for their forever homes. Use the filters below to find the perfect match for your family!</p>

      <div className="filters">
        <select
          value={breedFilter}
          onChange={(e) => setBreedFilter(e.target.value)}
        >
          <option>All Breeds</option>
          <option>Siamese</option>
          <option>Bengal</option>
          <option>Persian</option>
          <option>Birman</option>
          <option>Abyssinian</option>
          <option>Peterbald</option>
        </select>

        <input
          type="text"
          placeholder="Search by name"
          value={nameFilter}
          onChange={(e) => setNameFilter(e.target.value)}
        />
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
