import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Sphynx' },
  { name: 'Mittens', age: '2', breed: 'Peterbald' },
  { name: 'Shadow', age: '1', breed: 'Birman' },
  { name: 'Pumpkin', age: '3', breed: 'Abyssinian' },
  { name: 'Luna', age: '4', breed: 'Persian' },
  { name: 'Simba', age: '2', breed: 'Bengal' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);

  const [breedInsert, setBreedInsert] = useState("");
  const [nameInsert, setNameInsert] = useState("");
  const [selectedBreedFilter, setSelectedBreedFilter] = useState("");
  const [selectedNameFilter, setselectedNameFilter] = useState("");

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
    setSelectedBreedFilter(breedInsert);
    setselectedNameFilter(nameInsert);
  };

  const filteredResults = cats.filter((cat) => {
    const matchName = cat.name.toLowerCase().includes(selectedNameFilter.toLowerCase());
    const matchBreed = selectedBreedFilter === "" || cat.breed === selectedBreedFilter;
    return matchName && matchBreed;
  });

  const breeds = [...new Set(availableCats.map(cat => cat.breed))];

  return (
    <section className="text-center mt-4">
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>

        <h2 className="" style={{ textAlign: 'left' }}>Available cats</h2>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>

          <select
            className="form-select"
            style={{
              width: "180px",
              padding: "5px",
              borderRadius: "5px",
              border: "1px solid #333"
            }}
            value={breedInsert}
            onChange={(e) => setBreedInsert(e.target.value)}
          >
            <option value="">Select breed</option>
            {breeds.map((breed, index) => (
              <option key={index} value={breed}>{breed}</option>
            ))}
          </select>

          <input
            type="text"
            placeholder="Search by name"
            className="form-control"
            style={{
              width: "190px",
              padding: "7px",
              borderRadius: "5px",
              border: "1px solid #333"
            }}
            value={nameInsert}
            onChange={(e) => setNameInsert(e.target.value)}
          />

          <button
            onClick={handleSearch}
            style={{
              backgroundColor: '#90CDF4',
              border: '1px solid #333',
              borderRadius: '5px',
              padding: '5px 20px',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontFamily: 'inherit'
            }}
          >
            search
          </button>

        </div>
      </div>
      <p>Meet our adorable cats looking for their forever home!</p>
      <hr style={{ border: 'none', borderTop: '2px solid #333', opacity: 1, margin: '0 0 30px 0' }} />
      <div className="mt-2 row g-4 cats-container" id="cats-container">
        {filteredResults.map((cat, i) => (
          <div key={i} className="col-md-4">
            <div className="cat-card">
              <img
                src={cat.image}
                alt={cat.name}
                className="img-fluid mb-2"
                style={{
                  borderRadius: '8px',
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
