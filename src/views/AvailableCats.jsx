import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '3', breed: 'Sphynx' },
  { name: 'Mittens', age: '2', breed: 'Peterbald' },
  { name: 'Shadow', age: '1', breed: 'Birman' },
  { name: 'Pumpkin', age: '3', breed: 'Abyssinian' },
  { name: 'Luna', age: '4', breed: 'Persian' },
  { name: 'Simba', age: '2', breed: 'Bengal' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [breedFilter, setBreedFilter] = useState('');
  const [nameFilter, setNameFilter] = useState('');

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(
          availableCats.map(() =>
            fetch('https://api.thecatapi.com/v1/images/search').then((res) => res.json())
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

  const filteredCats = cats.filter(
    (cat) =>
      (breedFilter === '' || cat.breed === breedFilter) &&
      (nameFilter === '' || cat.name.toLowerCase().includes(nameFilter.toLowerCase()))
  );

  return (
    <section className="text-center mt-4">
      <h2>Available Cats</h2>
      <p>Meet our adorable cats looking for their forever home!</p>
      <div className="filters mb-4">
        <div className="filter-group">
          <label htmlFor="breedFilter" className="me-2">
            Breed Filter
          </label>
          <select
            id="breedFilter"
            value={breedFilter}
            onChange={(e) => setBreedFilter(e.target.value)}
          >
            <option value="">Breeds</option>
            <option value="Sphynx">Sphynx</option>
            <option value="Birman">Birman</option>
            <option value="Bengal">Bengal</option>
            <option value="Siamese">Siamese</option>
            <option value="Persian">Persian</option>
            <option value="Abyssinian">Abyssinian</option>
          </select>
        </div>
        <div className="filter-group mt-3">
          <label htmlFor="nameFilter" className="me-2">
            Search by Name:
          </label>
          <input
            id="nameFilter"
            type="text"
            placeholder="Enter the kitty's name:"
            value={nameFilter}
            onChange={(e) => setNameFilter(e.target.value)}
          />
        </div>
      </div>
      <div className="mt-2 row g-4 cats-container" id="cats-container">
        {filteredCats.map((cat, i) => (
          <div key={i} className="col-md-4">
            <div className="cat-card">
              <img
                src={cat.image}
                alt={cat.name}
                className="img-fluid mb-2"
                style={{ borderRadius: '8px', height: '200px', objectFit: 'cover' }}
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
