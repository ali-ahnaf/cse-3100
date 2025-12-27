import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Tabby'  },
  { name: 'Mittens', age: '2', breed: 'Persian' },
  { name: 'Shadow', age: '1' ,breed: 'Black Cat'  },
  { name: 'Pumpkin', age: '3',breed: 'Orange Tabby' },
  { name: 'Luna', age: '4', breed: 'Siamese' },
  { name: 'Simba', age: '2', breed: 'Maine Coon' },
  { name: 'Bella', age: '3', breed: 'Calico' },
  { name: 'Oliver', age: '1', breed: 'Tabby' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [filteredCats, setFilteredCats] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [selectedBreed, setSelectedBreed] = useState('');

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
        setFilteredCats(catsWithImages);
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  }, []);
  const handleSearch = () => {
    let filtered = cats;

    if (selectedBreed) {
      filtered = filtered.filter((cat) => cat.breed === selectedBreed);
    }

    if (searchName) {
      filtered = filtered.filter((cat) =>
        cat.name.toLowerCase().includes(searchName.toLowerCase())
      );
    }

    setFilteredCats(filtered);
  };

  const breeds = [...new Set(availableCats.map((cat) => cat.breed))];

  return (
    <section className="text-center mt-4">
      <h2>Available Cats</h2>
      <p>Meet our adorable cats looking for their forever home!</p>

      <div className="d-flex gap-2 mt-3 mb-4">
        <select
          className="form-select"
          value={selectedBreed}
          onChange={(e) => setSelectedBreed(e.target.value)}
          style={{ maxWidth: '200px' }}
        >
          <option value="">Select breed</option>
          {breeds.map((breed) => (
            <option key={breed} value={breed}>
              {breed}
            </option>
          ))}
        </select>

        <input
          type="text"
          className="form-control"
          placeholder="Search by name"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          style={{ maxWidth: '300px' }}
        />

        <button className="btn btn-primary" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className="mt-2 row g-4 cats-container" id="cats-container">
        {filteredCats.map((cat, i) => (
          <div key={i} className="col-md-3">
            <div className="cat-card">
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
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
