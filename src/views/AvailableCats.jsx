import { useEffect, useState } from 'react';

const breedList = ["Sphynx", "Peterbald", "Birman", "Abyssinian", "Persian", "Bengal", "Siamese"];
const initialCats = [
  { name: 'Micky mouse', age: '2', breed: 'Persian' },
  { name: 'Micky mouse', age: '2', breed: 'Siamese' },
  { name: 'Micky mouse', age: '2', breed: 'Bengal' },
  { name: 'Micky mouse', age: '2', breed: 'Sphynx' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedBreed, setSelectedBreed] = useState('');

  useEffect(() => {
    const load = async () => {
      const responses = await Promise.all(
        initialCats.map(() => fetch('https://api.thecatapi.com/v1/images/search').then(res => res.json()))
      );
      setCats(initialCats.map((cat, i) => ({ ...cat, image: responses[i][0].url })));
    };
    load();
  }, []);

  const filtered = cats.filter(c => 
    c.name.toLowerCase().includes(search.toLowerCase()) &&
    (selectedBreed === '' || c.breed === selectedBreed)
  );

  return (
    <section>
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <h2>Available cats</h2>
        <div>
          <select className="form-control" style={{width:'auto', display:'inline', marginRight:'10px'}} 
                  onChange={(e) => setSelectedBreed(e.target.value)}>
            <option value="">select breed</option>
            {breedList.map(b => <option key={b} value={b}>{b}</option>)}
          </select>
          <input type="text" className="form-control" style={{width:'auto', display:'inline', marginRight:'10px'}} 
                 placeholder="search by name" onChange={(e) => setSearch(e.target.value)} />
          <button className="btn-sketch">search</button>
        </div>
      </div>
      <div className="cats-container">
        {filtered.map((cat, i) => (
          <div key={i} className="cat-card">
            <img src={cat.image} alt={cat.name} style={{width:'100%', height:'150px', objectFit:'cover'}} />
            <div className="cat-info">
              <strong>{cat.name}</strong><br/>
              <span className="small">Age: {cat.age}</span><br/>
              <span className="small">Breed: {cat.breed}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}