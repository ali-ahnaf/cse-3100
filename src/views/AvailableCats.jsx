import { useEffect, useState } from 'react';

const availableCats = [
  /* TASK 3: cat details */
  { name: 'Whiskers', age: '2', breed: 'Siamese' },
  { name: 'Mittens', age: '2', breed: 'Persian' },
  { name: 'Shadow', age: '1', breed: 'Bengal' },
  { name: 'Luna', age: '3', breed: 'Abyssinian' },
  { name: 'Leo', age: '2', breed: 'Bengal' },
  { name: 'Bella', age: '1', breed: 'Sphynx' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  /* TASK 4 (Breed Dropdown */
  const [selectedBreed, setSelectedBreed] = useState('');

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=6');
      const data = await response.json();
      setCats(availableCats.map((cat, i) => ({
        ...cat,
        image: data[i]?.url || 'https://via.placeholder.com/200'
      })));
    };
    fetchImages();
  }, []);

  /* TASK 4 Search Text + Breed Dropdown */
  const filteredCats = cats.filter(cat => {
    const matchesSearch = cat.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBreed = selectedBreed === '' || cat.breed === selectedBreed;
    return matchesSearch && matchesBreed;
  });

  return (
    <div className="container">
      <h1 className="text-center mb-5 fw-bold">Available Cats</h1>

      {/* TASK 4*/}
      <div className="row mb-4 g-3">
        {/* Search kora  */}
        <div className="col-md-6">
          <input 
            type="text" 
            className="form-control" 
            placeholder="Search by cat name..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        {/* Breed Dropdown Menu */}
        <div className="col-md-6">
          <select 
            className="form-select" 
            value={selectedBreed}
            onChange={(e) => setSelectedBreed(e.target.value)}
          >
            <option value="">All Breeds</option>
            <option value="Siamese">Siamese</option>
            <option value="Persian">Persian</option>
            <option value="Bengal">Bengal</option>
            <option value="Abyssinian">Abyssinian</option>
            <option value="Sphynx">Sphynx</option>
          </select>
        </div>
      </div>

      {/* TASK 1 */}
      <div className="row">
        {filteredCats.map((cat, i) => (
          <div key={i} className="col-md-4 mb-4">
            <div className="card shadow-sm border-0 rounded-4 overflow-hidden">
              <img src={cat.image} className="card-img-top" alt={cat.name} style={{ height: '250px', objectFit: 'cover' }} />
              <div className="card-body">
                <h2 className="h4 fw-bold">{cat.name}</h2>
                {/* TASK 3 */}
                <p className="badge bg-info text-dark">{cat.breed}</p>
                <p className="fw-bold text-primary mt-2">Age: {cat.age} Years</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}