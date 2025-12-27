import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Persian' },
  { name: 'Mittens', age: '2', breed: 'Siamese' },
  { name: 'Shadow', age: '1', breed: 'Bengal' },
  { name: 'Pumpkin', age: '3', breed: 'Sphynx' },
  { name: 'Luna', age: '4', breed: 'Birman' },
  { name: 'Simba', age: '2', breed: 'Abyssinian' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBreed, setSelectedBreed] = useState("");

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
  const filteredCats = cats.filter((cat) => {
    const matchesName = cat.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBreed = selectedBreed === "" || cat.breed === selectedBreed;
    return matchesName && matchesBreed;
  });

  return (
    <section className="text-center mt-4">
      <h2>Available Cats</h2>
      <p>Meet our adorable cats looking for their forever home!</p>

      <div className="filter-bar">
        <select onChange={(e) => setSelectedBreed(e.target.value)}>
          <option value="">select breed</option>
          <option value="Sphynx">Sphynx</option>
          <option value="Peterbald">Peterbald</option>
          <option value="Birman">Birman</option>
          <option value="Abyssinian">Abyssinian</option>
          <option value="Persian">Persian</option>
          <option value="Bengal">Bengal</option>
          <option value="Siamese">Siamese</option>
        </select>
        <input 
          type="text" 
          placeholder="search by name" 
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
        <button className="btn-search">search</button>
      </div>

      <div className="cats-container" id="cats-container">
        {filteredCats.map((cat, i) => (
          <div key={i} className="cat-card">
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
              <p className="mb-0"><strong>Breed: {cat.breed}</strong></p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
