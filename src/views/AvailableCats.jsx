import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Sphynx' },
  { name: 'Mittens', age: '2', breed: 'Siamese' },
  { name: 'Shadow', age: '1', breed: 'Peterbald' },
  { name: 'Oliver', age: '2', breed: 'Abyssinian' },
  { name: 'Simba', age: '4', breed: 'Persian' },
  { name: 'Chloe', age: '2', breed: 'Bengal' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [search, setSearch] = useState('');
  const [breed, setBreed] = useState('');

  useEffect(() => {
    const fetchCatImages = async () => {
      const responses = await Promise.all(
        availableCats.map(() => fetch('https://api.thecatapi.com/v1/images/search').then(res => res.json()))
      );
      setCats(availableCats.map((cat, i) => ({ ...cat, image: responses[i][0].url })));
    };
    fetchCatImages();
  }, []);


  const filteredCats = cats.filter(cat => 
    cat.name.toLowerCase().includes(search.toLowerCase()) &&
    (breed === '' || cat.breed === breed)
  );

  return (
    <section className="text-center mt-4">
      <h2>Available Cats</h2>
      

      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', margin: '20px 0' }}>
        <input type="text" placeholder="Search by name" onChange={(e) => setSearch(e.target.value)} />
        <select onChange={(e) => setBreed(e.target.value)}>
          <option value="">All Breeds</option>
          <option value="Sphynx">Sphynx</option>
          <option value="Siamese">Siamese</option>
          <option value="Persian">Persian</option>
        </select>
      </div>

      <div className="cats-container">
        {filteredCats.map((cat, i) => (
          <div key={i} className="cat-card">
            <img src={cat.image} alt={cat.name} className="cat-image" />
            <div className="cat-info">
              <h4>{cat.name}</h4>
              <p>Breed: {cat.breed}</p>
              <p>Age: {cat.age}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
