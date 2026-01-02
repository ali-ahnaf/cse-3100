import { useEffect, useMemo, useState } from 'react';

const availableCats = [
  { id: 4, name: 'Pumpkin', breed: 'Persian', age: '3', description: 'Gentle lap cat.' },
  { id: 5, name: 'Luna', breed: 'Bengal', age: '4', description: 'Playful and striking.' },
  { id: 6, name: 'Simba', breed: 'Siamese', age: '2', description: 'Vocal and loving.' },
  { id: 7, name: 'Oliver', breed: 'Peterbald', age: '1', description: 'Sleek and friendly.' },
  { id: 8, name: 'Bella', breed: 'Birman', age: '5', description: 'Sweet and calm.' },
  { id: 9, name: 'Cleo', breed: 'Abyssinian', age: '3', description: 'Curious explorer.' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [breedFilter, setBreedFilter] = useState('All Breeds');
  const [nameFilter, setNameFilter] = useState('');

  useEffect(() => {
    // Fetch cat images from an API endpoint and assign it to the featuredCats list
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

  const breeds = useMemo(() => ['All Breeds', 'Sphynx', 'Peterbald', 'Birman', 'Abyssinian', 'Persian', 'Bengal', 'Siamese'], []);

  const filteredCats = useMemo(() => {
    return cats.filter((cat) => {
      const matchesBreed = breedFilter === 'All Breeds' || cat.breed === breedFilter;
      const matchesName = nameFilter.trim() === '' || cat.name.toLowerCase().includes(nameFilter.toLowerCase());
      return matchesBreed && matchesName;
    });
  }, [cats, breedFilter, nameFilter]);

  return (
    <section className="text-center mt-4">
      <h2>Available Cats</h2>
      <p>Meet our adorable cats looking for their forever home!</p>

      <div className="filters" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1rem' }}>
        <select value={breedFilter} onChange={(e) => setBreedFilter(e.target.value)}>
          {breeds.map((b) => (
            <option key={b} value={b}>{b}</option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Search by name"
          value={nameFilter}
          onChange={(e) => setNameFilter(e.target.value)}
        />
      </div>

      <div className="cats-container" id="cats-container">
        {filteredCats.map((cat) => (
          <article key={cat.id} className="cat-card">
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
              <p className="mb-0">Breed: {cat.breed}</p>
              <p className="mb-0">Age: {cat.age}</p>
            </div>
          </article>
        ))}

        {filteredCats.length === 0 && <p style={{ gridColumn: '1/-1' }}>No cats match your filters.</p>}
      </div>
    </section>
  );
}
