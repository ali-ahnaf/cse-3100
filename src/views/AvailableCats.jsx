import { useEffect, useState } from 'react';

const breedList = ["Sphynx", "Peterbald", "Birman", "Abyssinian", "Persian", "Bengal", "Siamese"];

const initialCats = [
  { name: 'Micky mouse', age: '2', breed: 'Persian' },
  { name: 'Micky mouse', age: '2', breed: 'Siamese' },
  { name: 'Micky mouse', age: '2', breed: 'Bengal' },
  { name: 'Micky mouse', age: '2', breed: 'Sphynx' },
  { name: 'Micky mouse', age: '2', breed: 'Birman' },
  { name: 'Micky mouse', age: '2', breed: 'Abyssinian' },
  { name: 'Micky mouse', age: '2', breed: 'Peterbald' },
  { name: 'Micky mouse', age: '2', breed: 'Persian' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBreed, setSelectedBreed] = useState('');

  useEffect(() => {
    // API images loading...
    const loadImages = async () => {
        const responses = await Promise.all(
            initialCats.map(() => fetch('https://api.thecatapi.com/v1/images/search').then(res => res.json()))
        );
        const mapped = initialCats.map((cat, i) => ({...cat, image: responses[i][0].url}));
        setCats(mapped);
    };
    loadImages();
  }, []);

  const filteredCats = cats.filter(cat => 
    cat.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedBreed === '' || cat.breed === selectedBreed)
  );

  return (
    <section>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="h4">Available cats</h2>
        <div className="d-flex gap-2">
          <select className="form-select w-auto" onChange={(e) => setSelectedBreed(e.target.value)}>
            <option value="">select breed</option>
            {breedList.map(b => <option key={b} value={b}>{b}</option>)}
          </select>
          <input 
            type="text" 
            className="form-control w-auto" 
            placeholder="search by name" 
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="btn btn-submit">search</button>
        </div>
      </div>
      <hr />
      <div className="cats-container">
        {filteredCats.map((cat, i) => (
          <div key={i} className="cat-card">
            <div className="cat-image-area">
                <img src={cat.image} alt={cat.name} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
            </div>
            <div className="cat-info">
              <div className="fw-bold">{cat.name}</div>
              <div className="small text-muted">Age: {cat.age}</div>
              <div className="small text-muted">Breed: {cat.breed}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}