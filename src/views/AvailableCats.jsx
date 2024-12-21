import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Sphynx' },
  { name: 'Mittens', age: '2', breed: 'Bengal' },
  { name: 'Shadow', age: '1', breed: 'Persian' },
  { name: 'Pumpkin', age: '3', breed: 'Birman' },
  { name: 'Luna', age: '4', breed: 'Abyssinian' },
  { name: 'Simba', age: '2', breed: 'Siamese' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [filteredCats, setFilteredCats] = useState([]);
  const [breedFilter, setBreedFilter] = useState('');
  const [nameFilter, setNameFilter] = useState('');

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(availableCats.map(() => fetch('https://api.thecatapi.com/v1/images/search').then((res) => res.json())));
        const catsWithImages = availableCats.map((cat, index) => ({
          ...cat,
          image: responses[index][0].url,
        }));

        setCats(catsWithImages);
        setFilteredCats(catsWithImages);
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  }, []);

  useEffect(() => {
    const applyFilters = () => {
      let filtered = [...cats];
      if (breedFilter) filtered = filtered.filter((cat) => cat.breed === breedFilter);
      if (nameFilter) filtered = filtered.filter((cat) => cat.name.toLowerCase().includes(nameFilter.toLowerCase()));
      setFilteredCats(filtered);
    };

    applyFilters();
  }, [breedFilter, nameFilter, cats]);

  return (
    <section className="text-center mt-4">
      <h2>Available Cats</h2>
      <p>Meet our adorable cats looking for their forever home!</p>

      <div className="filters d-flex justify-content-center gap-3 mt-3">
        <select onChange={(e) => setBreedFilter(e.target.value)} className="form-select w-auto">
          <option value="">All Breeds</option>
          {Array.from(new Set(availableCats.map((cat) => cat.breed))).map((breed, i) => (
            <option key={i} value={breed}>
              {breed}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Search by name"
          className="form-control w-auto"
          onChange={(e) => setNameFilter(e.target.value)}
        />
      </div>

      <div className="mt-4 row g-4">
        {filteredCats.map((cat, i) => (
          <div key={i} className="col-md-4">
            <div className="cat-card">
              <img src={cat.image} alt={cat.name} className="img-fluid mb-2" style={{ borderRadius: '8px', height: '160px', objectFit: 'cover' }} />
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
