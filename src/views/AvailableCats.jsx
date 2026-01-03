import { useEffect, useState } from 'react';

const availableCats = [
  { id: 1, name: 'Whiskers', age: '2', breed: 'Sphynx' },
  { id: 2, name: 'Mittens', age: '2', breed: 'Birman' },
  { id: 3, name: 'Shadow', age: '1', breed: 'Abyssinian' },
  { id: 4, name: 'Pumpkin', age: '3', breed: 'Persian' },
  { id: 5, name: 'Luna', age: '4', breed: 'Bengal' },
  { id: 6, name: 'Simba', age: '2', breed: 'Siamese' },
  { id: 7, name: 'Nala', age: '3', breed: 'Peterbald' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
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
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  }, []);

  const breedOptions = [
    'All Breeds',
    'Sphynx',
    'Peterbald',
    'Birman',
    'Abyssinian',
    'Persian',
    'Bengal',
    'Siamese',
  ];

  const filteredCats = cats.filter((cat) => {
    const matchesBreed =
      breedFilter === 'All Breeds' ? true : cat.breed === breedFilter;
    const matchesName = cat.name.toLowerCase().includes(nameFilter.toLowerCase());
    return matchesBreed && matchesName;
  });

  return (
    <section className="mt-4">
      <h2 className="text-center">Available Cats</h2>
      <p className="text-center">Meet our adorable cats looking for their forever home!</p>

      <div className="filters" style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginBottom: '16px' }}>
        <select value={breedFilter} onChange={(e) => setBreedFilter(e.target.value)}>
          {breedOptions.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Search by name"
          value={nameFilter}
          onChange={(e) => setNameFilter(e.target.value)}
        />
      </div>

      <div className="cats-container">
        {filteredCats.map((cat) => (
          <div key={cat.id} className="cat-card">
            <img src={cat.image} alt={cat.name} className="cat-image" />
            <div className="cat-info">
              <h3 className="h5 mb-1">{cat.name}</h3>
              <p className="mb-0">Age: {cat.age}</p>
              <p className="mb-0">Breed: {cat.breed}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
