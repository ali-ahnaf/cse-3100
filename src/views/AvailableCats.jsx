
import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Persian' },
  { name: 'Mittens', age: '2', breed: 'Siamese' },
  { name: 'Shadow', age: '1', breed: 'Bengal' },
  { name: 'Pumpkin', age: '3', breed: 'Sphynx' },
  { name: 'Luna', age: '4', breed: 'Abyssinian' },
  { name: 'Simba', age: '2', breed: 'Birman' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBreed, setSelectedBreed] = useState('');

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

  // Filter logic
  const filteredCats = cats.filter(cat => {
    const matchesName = cat.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBreed = selectedBreed === "" || cat.breed === selectedBreed;
    return matchesName && matchesBreed;
  });

  return (
    <section>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Available cats</h2>
        
        {/* Filter Controls */}
        <div className="d-flex gap-2">
          <select className="form-select w-auto" onChange={(e) => setSelectedBreed(e.target.value)}>
            <option value="">Select breed</option>
            <option value="Persian">Persian</option>
            <option value="Siamese">Siamese</option>
            <option value="Bengal">Bengal</option>
            <option value="Sphynx">Sphynx</option>
            <option value="Abyssinian">Abyssinian</option>
            <option value="Birman">Birman</option>
          </select>
          <input 
            type="text" 
            className="form-control" 
            placeholder="search by name" 
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="btn btn-primary">Search</button>
        </div>
      </div>

      {/* The 'row' class enables the side-by-side grid */}
      <div className="row g-4">
        {filteredCats.map((cat, i) => (
          
          <div key={i} className="col-lg-3 col-md-4 col-sm-6">
            <div className="card h-100 shadow-sm text-center">
              <img 
                src={cat.image} 
                alt={cat.name} 
                className="card-img-top" 
                style={{ height: '180px', objectFit: 'cover' }} 
              />
              <div className="card-body">
                <h5 className="mb-0">{cat.name}</h5>
             
                <small className="text-muted d-block mb-2">{cat.breed}</small>
                <p className="mb-0">Age: {cat.age}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

