import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Siamese' },
  { name: 'Mittens', age: '2', breed: 'Persian' },
  { name: 'Shadow', age: '1', breed: 'Bengal' },
  { name: 'Pumpkin', age: '3', breed: 'Birman' },
  { name: 'Luna', age: '4', breed: 'Abyssinian' },
  { name: 'Simba', age: '2', breed: 'Sphynx' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [breedFilter, setBreedFilter] = useState('');
  const [search, setSearch] = useState('');
  const [appliedSearch, setAppliedSearch] = useState('');


  useEffect(() => {
    // Fetch cat images from an API endpoint and assign it to the featuredCats list
    const fetchImages = async () => {
      try {
        const responses = await Promise.all(
          availableCats.map(() =>
            fetch('https://api.thecatapi.com/v1/images/search').then(r =>
              r.json()
            )
          )
        );
        const catsWithImages = availableCats.map((cat, i) => ({
          ...cat,
          image: responses[i][0].url,
        }));

        setCats(catsWithImages);
      } catch (err) {
        console.error(err);
      }
    };

    fetchImages();
  }, []);

  const filteredCats = cats.filter(cat => { 
    return (cat.name.toLowerCase().includes(appliedSearch.toLowerCase()) &&  
    (breedFilter ? cat.breed === breedFilter : true));
  });

  const breeds = [...new Set(availableCats.map(c => c.breed))];

  return (
    <>
    <section className="text-center mt-4">
      <h2>Available Cats</h2>
      <div className="d-flex justify-content-center gap-2 my-3">
        <input type="text" placeholder="Search by name..." value={search} onChange={e=>setSearch(e.target.value)} className="form-control" style={{maxWidth: '200px'}}/>
        <button className="search-btn" onClick={() => setAppliedSearch(search)}>
        Search
        </button>

        <select value={breedFilter} onChange={e=>setBreedFilter(e.target.value)} className="form-select" style={{maxWidth: '200px'}}>
          <option value=''>All Breeds</option>
          {breeds.map(b=>(<option key={b} value={b}>{b}</option>))}
          </select>
      </div>

      <div className="row g-4">
        {filteredCats.map((cat, i) => (
          <div key={i} className="col-md-4">
            <div className="cat-card">
              <img
                src={cat.image}
                alt={cat.name}
                style={{
                  borderRadius: '8px',
                  height: '200px',
                  objectFit: 'cover',
                }}
              />
              <div className="cat-info">
                <h3 >{cat.name}</h3>
                <p>Age: {cat.age}</p>
                <p>Breed: {cat.breed}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  );
}
