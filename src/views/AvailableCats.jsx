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
      <div className="available-header">

        <h2 className="available-title">Available cats</h2>
        <div className="filter-row">

          <select
            className="form-select filter-select"
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
            className="form-control filter-input"
            value={nameInsert}
            onChange={(e) => setNameInsert(e.target.value)}
          />

          <button
            onClick={handleSearch}
            className="filter-btn"
          >
            search
          </button>

        </div>
      </div>
      <p>Meet our adorable cats looking for their forever home!</p>
      <hr className="section-separator" />
      <div className="mt-2 row g-4 cats-container" id="cats-container">
        {filteredResults.map((cat, i) => (
          <div key={i} className="col-md-4">
            <div className="cat-card">
              <img
                src={cat.image}
                alt={cat.name}
                className="img-fluid mb-2 cat-image"
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
