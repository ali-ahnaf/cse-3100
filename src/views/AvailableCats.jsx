import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2' ,breed: 'Sphynx'},
  { name: 'Mittens', age: '2' ,breed: 'Peterbald'},
  { name: 'Shadow', age: '1' ,breed: 'Birman'},
  { name: 'Pumpkin', age: '3' ,breed: 'Abyssinian'},
  { name: 'Luna', age: '4' ,breed: 'Persian'},
  { name: 'Simba', age: '2' ,breed: 'Bengal'},
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [filteredCats, setFilteredCats] = useState([]); //stores filtered list
  const [selectedBreed, setSelectedBreed] = useState('All'); //stores selected breed
  const [searchName, setSearchName] = useState(''); //stores search text

  const breeds = ['All', ...new Set(availableCats.map(cat => cat.breed))];//unique breeds for dropdown
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
        setFilteredCats(catsWithImages); // Initialize filteredCats with all cats
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  }, []);

  //filtering the cats
  useEffect(() => {
    if (cats.length === 0) return;

    let result = [...cats];

    // Filter by breed
    if (selectedBreed !== 'All') {
      result = result.filter(cat => cat.breed === selectedBreed);
    }

    // Filter by name
    if (searchName.trim() !== '') {
      const searchTerm = searchName.toLowerCase();
      result = result.filter(cat =>
        cat.breed.toLowerCase().includes(searchTerm)
      );
    }

    setFilteredCats(result);
  }, [selectedBreed, searchName, cats]);
  
  const handleBreedChange = (event) => {
    setSelectedBreed(event.target.value);
  };

  const handleNameSearch = (event) => {
    setSearchName(event.target.value);
  };


  return (
    <section className="text-center mt-4">
      <h2>Available Cats</h2>
      <p>Meet our adorable cats looking for their forever home!</p>
      
      {/* filter section */}
      <div className="row mb-4">
        <div className="col-md-6 mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by cat name..."
            value={searchName}
            onChange={handleNameSearch}
          />
        </div>
        <div className="col-md-6 mb-3">
          <select
            className="form-select"
            value={selectedBreed}
            onChange={handleBreedChange}
          >
            {breeds.map((breed, index) => (
              <option key={index} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </div>
      </div>
       
      <div className="mt-2 row g-4 cats-container" id="cats-container">
        {filteredCats.map((cat, i) => (
          <div key={i} className="col-md-4">
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
                <p className="mb-0">Breed: {cat.breed}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}