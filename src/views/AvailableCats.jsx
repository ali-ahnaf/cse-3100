import { useEffect, useState } from 'react';

const availableCatsData = [
  { name: 'Whiskers', age: '2', breed: 'Persian' },
  { name: 'Mittens', age: '2', breed: 'Bengal' },
  { name: 'Shadow', age: '1', breed: 'Siamese' },
  { name: 'Pumpkin', age: '3', breed: 'Abyssinian' },
  { name: 'Luna', age: '4', breed: 'Birman' },
  { name: 'Simba', age: '2', breed: 'Sphynx' },
  { name: 'Zorro', age: '5', breed: 'Peterbald' },
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
  const [allCats, setAllCats] = useState([]);
  const [cats, setCats] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBreed, setSelectedBreed] = useState('All');

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(
          availableCatsData.map(() =>
            fetch('https://api.thecatapi.com/v1/images/search').then((res) =>
              res.json()
            )
          )
        );
        const catsWithImages = availableCatsData.map((cat, index) => ({
          ...cat,
          id: responses[index][0].id,
          image: responses[index][0].url,
        }));
        setAllCats(catsWithImages);
        setCats(catsWithImages);
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  }, []);

  useEffect(() => {
    let filteredCats = allCats;

    if (selectedBreed !== 'All') {
      filteredCats = filteredCats.filter(
        (cat) => cat.breed === selectedBreed
      );
    }

    if (searchTerm) {
      filteredCats = filteredCats.filter((cat) =>
        cat.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setCats(filteredCats);
  }, [searchTerm, selectedBreed, allCats]);

  return (
    <section className="container mt-4">
      <h2 className="text-center">Available Cats</h2>
      <p className="text-center">
        These are our current feline friends waiting to find their forever
        homes. Use the filters to find your purrfect match!
      </p>

      <div className="row g-3 my-4 justify-content-center">
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="col-md-3">
          <select
            className="form-select"
            value={selectedBreed}
            onChange={(e) => setSelectedBreed(e.target.value)}
          >
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="cats-container">
        {cats.length > 0 ? (
          cats.map((cat) => (
            <div
              key={cat.id}
              className="cat-card"
              style={{ backgroundImage: `url(${cat.image})` }}
            >
              <div className="cat-info">
                <h3 className="h5 mb-1">{cat.name}</h3>
                <p className="mb-0">Breed: {cat.breed}</p>
                <p className="mb-0">Age: {cat.age}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center w-100">
            No cats match your criteria. Try adjusting your filters!
          </p>
        )}
      </div>
    </section>
  );
}
