import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Mochi', age: '1', breed: 'Sphynx' },
  { name: 'Hazel', age: '2', breed: 'Peterbald' },
  { name: 'Pippa', age: '3', breed: 'Birman' },
  { name: 'Leo', age: '4', breed: 'Abyssinian' },
  { name: 'Nala', age: '5', breed: 'Persian' },
  { name: 'Jasper', age: '2', breed: 'Bengal' },
  { name: 'Zoe', age: '7 months', breed: 'Siamese' },
  { name: 'Archie', age: '6 months', breed: 'Persian' },
  { name: 'Biscuit', age: '3', breed: 'Sphynx' },
  { name: 'Toby', age: '1', breed: 'Peterbald' },
  { name: 'Mabel', age: '2', breed: 'Birman' },
  { name: 'Koda', age: '5', breed: 'Abyssinian' },
  { name: 'Poppy', age: '6', breed: 'Persian' },
  { name: 'Rio', age: '9 months', breed: 'Bengal' },
  { name: 'Sunny', age: '11 months', breed: 'Siamese' },
  { name: 'Pebble', age: '8 months', breed: 'Persian' },
];

const breeds = [
  'Sphynx',
  'Peterbald',
  'Birman',
  'Abyssinian',
  'Persian',
  'Bengal',
  'Siamese',
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [breedFilter, setBreedFilter] = useState('');
  const [nameQuery, setNameQuery] = useState('');

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
          image: responses[index][0]?.url,
        }));

        setCats(catsWithImages);
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  }, []);

  const filteredCats = cats.filter((cat) => {
    const matchesBreed = breedFilter ? cat.breed === breedFilter : true;
    const matchesName = nameQuery
      ? cat.name.toLowerCase().includes(nameQuery.toLowerCase())
      : true;
    return matchesBreed && matchesName;
  });

  return (
    <section>
      <h2 className="section-title">Available cats</h2>

      <div className="filters">
        <select
          value={breedFilter}
          onChange={(e) => setBreedFilter(e.target.value)}
          aria-label="Select breed"
        >
          <option value="">select breed</option>
          {breeds.map((breed) => (
            <option key={breed} value={breed}>
              {breed}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="search by name"
          value={nameQuery}
          onChange={(e) => setNameQuery(e.target.value)}
        />
        <button type="button" onClick={() => setNameQuery('')}>
          clear
        </button>
      </div>

      <div className="cats-grid" id="cats-container">
        {filteredCats.map((cat, i) => (
          <div key={`${cat.name}-${cat.breed}-${i}`} className="cat-card">
            <img src={cat.image} alt={cat.name} />
            <div className="cat-info">
              <h3>{cat.name}</h3>
              <p>Age: {cat.age}</p>
              <p>Breed: {cat.breed}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
