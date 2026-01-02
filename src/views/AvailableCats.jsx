import { useEffect, useState } from 'react';

const availableCats = [
  { id: 1, name: 'Whiskers', age: '2 years', breed: 'Siamese', description: 'A playful and affectionate Siamese cat with striking blue eyes.' },
  { id: 2, name: 'Mittens', age: '2 years', breed: 'Persian', description: 'A fluffy Persian with a gentle temperament and long, luxurious fur.' },
  { id: 3, name: 'Shadow', age: '1 year', breed: 'Bengal', description: 'An energetic Bengal with beautiful spotted coat, loves to play.' },
  { id: 4, name: 'Pumpkin', age: '3 years', breed: 'Abyssinian', description: 'A curious Abyssinian with ticked coat and adventurous spirit.' },
  { id: 5, name: 'Luna', age: '4 years', breed: 'Birman', description: 'A sacred Birman with striking blue eyes and silky fur.' },
  { id: 6, name: 'Simba', age: '2 years', breed: 'Sphynx', description: 'A hairless Sphynx with wrinkled skin and loving personality.' },
  { id: 7, name: 'Bella', age: '1 year', breed: 'Peterbald', description: 'A sleek Peterbald with elegant features and friendly demeanor.' },
  { id: 8, name: 'Tiger', age: '3 years', breed: 'Bengal', description: 'A wild-looking Bengal with leopard-like spots and playful nature.' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [filteredCats, setFilteredCats] = useState([]);
  const [breedFilter, setBreedFilter] = useState('All Breeds');
  const [nameFilter, setNameFilter] = useState('');

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
        setFilteredCats(catsWithImages);
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  }, []);

  useEffect(() => {
    let filtered = cats;
    if (breedFilter !== 'All Breeds') {
      filtered = filtered.filter(cat => cat.breed === breedFilter);
    }
    if (nameFilter) {
      filtered = filtered.filter(cat => cat.name.toLowerCase().includes(nameFilter.toLowerCase()));
    }
    setFilteredCats(filtered);
  }, [cats, breedFilter, nameFilter]);

  const breeds = ['All Breeds', 'Sphynx', 'Peterbald', 'Birman', 'Abyssinian', 'Persian', 'Bengal', 'Siamese'];

  return (
    <section className="text-center mt-4">
      <h2>Available Cats</h2>
      <p>Meet our adorable cats looking for their forever home!</p>

      <div className="filters mt-4">
        <div className="mb-3">
          <label htmlFor="breedFilter" className="form-label">Filter by Breed:</label>
          <select
            id="breedFilter"
            className="form-select"
            value={breedFilter}
            onChange={(e) => setBreedFilter(e.target.value)}
          >
            {breeds.map(breed => (
              <option key={breed} value={breed}>{breed}</option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="nameFilter" className="form-label">Search by Name:</label>
          <input
            type="text"
            id="nameFilter"
            className="form-control"
            value={nameFilter}
            onChange={(e) => setNameFilter(e.target.value)}
            placeholder="Enter cat name..."
          />
        </div>
      </div>

      <div className="mt-4 cats-container">
        {filteredCats.map((cat) => (
          <div key={cat.id} className="cat-card">
            <img
              src={cat.image}
              alt={cat.name}
              className="img-fluid"
            />
            <div className="cat-info">
              <h3 className="h5 mb-1">{cat.name}</h3>
              <p className="mb-1">Breed: {cat.breed}</p>
              <p className="mb-1">Age: {cat.age}</p>
              <p className="mb-0">{cat.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
