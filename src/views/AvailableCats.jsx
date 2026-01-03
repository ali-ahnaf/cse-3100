import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Persian' },
  { name: 'Mittens', age: '2', breed: 'Siamese' },
  { name: 'Shadow', age: '1', breed: 'Bengal' },
  { name: 'Pumpkin', age: '3', breed: 'Abyssinian' },
  { name: 'Luna', age: '4', breed: 'Birman' },
  { name: 'Simba', age: '2', breed: 'Persian' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [selectedBreed, setSelectedBreed] = useState('All');
  const [searchResult, setSearchResult] = useState('');

  const allBreeds = ['All', 'Sphynx', 'Peterbald', 'Birman', 'Abyssinian', 'Persian', 'Bengal', 'Siamese'];

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

  const handleSearch = () => {
    setSearchResult(searchName);
  };

  const filteredCats = cats.filter(cat => {
    const nameMatch = cat.name.toLowerCase().includes(searchResult.toLowerCase());
    const breedMatch = selectedBreed === 'All' || cat.breed === selectedBreed;
    return nameMatch && breedMatch;
  });

  return (
    <div className="container mt-4">
      <div className="row mb-4">
        <div className="col-md-6">
          <h2 className="mb-0">Available Cats</h2>
        </div>
        <div className="col-md-6">
          <div className="row">
            <div className="col-4">
              <select
                className="form-select"
                value={selectedBreed}
                onChange={(e) => setSelectedBreed(e.target.value)}
                style={{ outline: 'none', boxShadow: 'none' }}
              >
                {allBreeds.map(breed => (
                  <option key={breed} value={breed}>
                    {breed === 'All' ? 'All Breeds' : breed}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-4">
              <input
                type="text"
                className="form-control"
                placeholder="Search cat..."
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
                style={{ outline: 'none', boxShadow: 'none' }}
              />
            </div>
            <div className="col-4">
              <button
                className="btn btn-primary w-100"
                onClick={handleSearch}
                style={{ outline: 'none', boxShadow: 'none' }}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        {filteredCats.map((cat, i) => (
          <div key={i} className="col-md-4 mb-4">
            <div className="card">
              <img
                src={cat.image}
                alt={cat.name}
                className="card-img-top"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{cat.name}</h5>
                <p className="card-text">Age: {cat.age}</p>
                <p className="card-text">Breed: {cat.breed}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}