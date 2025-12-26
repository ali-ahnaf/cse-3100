import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Persian' },
  { name: 'Mittens', age: '2', breed: 'Bengal' },
  { name: 'Shadow', age: '1', breed: 'Siamese' },
  { name: 'Pumpkin', age: '3', breed: 'Persian' },
  { name: 'Luna', age: '4', breed: 'Bengal' },
  { name: 'Simba', age: '2', breed: 'Siamese' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [nameSearch, setNameSearch] = useState('');
  const [breedSearch, setBreedSearch] = useState('');

  useEffect(() => {
    const fetchCatImages = async () => {
      const responses = await Promise.all(
        availableCats.map(() =>
          fetch('https://api.thecatapi.com/v1/images/search').then(res =>
            res.json()
          )
        )
      );

      const catsWithImages = availableCats.map((cat, index) => ({
        ...cat,
        image: responses[index][0].url,
      }));

      setCats(catsWithImages);
    };

    fetchCatImages();
  }, []);

  // 🔍 Filter logic
  const filteredCats = cats.filter(cat =>
    cat.name.toLowerCase().includes(nameSearch.toLowerCase()) &&
    cat.breed.toLowerCase().includes(breedSearch.toLowerCase())
  );

  return (
    <section className="text-center mt-4">
      <h2>Available Cats</h2>

      {/* 🔍 Search Inputs */}
      <div className="container mb-4">
        <div className="row g-3 justify-content-center">
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="Search by name"
              value={nameSearch}
              onChange={e => setNameSearch(e.target.value)}
            />
          </div>

          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="Search by breed"
              value={breedSearch}
              onChange={e => setBreedSearch(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row g-4">
          {filteredCats.length > 0 ? (
            filteredCats.map((cat, i) => (
              <div key={i} className="col-md-4 col-sm-6">
                <div className="cat-card">
                  <div className="cat-image">
                    <img src={cat.image} alt={cat.name} />
                  </div>
                  <div className="cat-info">
                    <h5 className="mb-1">{cat.name}</h5>
                    <p className="mb-0">Age: {cat.age}</p>
                    <p className="mb-0">Breed: {cat.breed}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-muted">No cats found</p>
          )}
        </div>
      </div>
    </section>
  );
}
