import { useEffect, useMemo, useState } from 'react';

const initialCats = [
  { id: 1, name: 'Whiskers', breed: 'Sphynx', age: '2 yrs', description: 'Affectionate and curious.' },
  { id: 2, name: 'Mittens', breed: 'Peterbald', age: '3 yrs', description: 'Playful and energetic.' },
  { id: 3, name: 'Shadow', breed: 'Birman', age: '1 yr', description: 'Gentle lap cat.' },
  { id: 4, name: 'Pumpkin', breed: 'Abyssinian', age: '4 yrs', description: 'Very active and loves to climb.' },
  { id: 5, name: 'Luna', breed: 'Persian', age: '5 yrs', description: 'Calm and sweet.' },
  { id: 6, name: 'Simba', breed: 'Bengal', age: '2 yrs', description: 'Energetic with striking markings.' },
  { id: 7, name: 'Sasha', breed: 'Siamese', age: '3 yrs', description: 'Vocal and social.' },
];

const BREEDS = [
  'All Breeds',
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
  const [breedFilter, setBreedFilter] = useState('All Breeds');
  const [nameFilter, setNameFilter] = useState('');

  useEffect(() => {
    // fetch one image per cat and attach to each cat object
    let mounted = true;

    const fetchImages = async () => {
      try {
        const responses = await Promise.all(
          initialCats.map(() => fetch('https://api.thecatapi.com/v1/images/search').then((r) => r.json()))
        );

        const catsWithImages = initialCats.map((cat, i) => ({
          ...cat,
          image: responses[i] && responses[i][0] ? responses[i][0].url : undefined,
        }));

        if (mounted) setCats(catsWithImages);
      } catch (err) {
        console.error('Error fetching cat images:', err);
        if (mounted) setCats(initialCats);
      }
    };

    fetchImages();

    return () => {
      mounted = false;
    };
  }, []);

  const filteredCats = useMemo(() => {
    return cats.filter((cat) => {
      const matchesBreed = breedFilter === 'All Breeds' || cat.breed === breedFilter;
      const matchesName = cat.name.toLowerCase().includes(nameFilter.trim().toLowerCase());
      return matchesBreed && matchesName;
    });
  }, [cats, breedFilter, nameFilter]);

  return (
    <section className="text-center mt-4">
      <h2>Available Cats</h2>
      <p>Meet our adorable cats looking for their forever home!</p>

      <div className="filters" role="region" aria-label="cat filters">
        <select value={breedFilter} onChange={(e) => setBreedFilter(e.target.value)}>
          {BREEDS.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>

        <input
          type="search"
          placeholder="Search by name"
          value={nameFilter}
          onChange={(e) => setNameFilter(e.target.value)}
        />
      </div>

      <div className="cats-grid" id="cats-container">
        {filteredCats.map((cat) => (
          <article key={cat.id} className="cat-card">
            <img src={cat.image} alt={cat.name} className="cat-image" />
            <div className="cat-info">
              <h3 className="h5 mb-1">{cat.name}</h3>
              <p className="cat-meta mb-1">Breed: {cat.breed} • Age: {cat.age}</p>
              <p className="mb-0">{cat.description}</p>
              <button className="adopt-button">Adopt Me</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
