

/*
import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2' },
  { name: 'Mittens', age: '2' },
  { name: 'Shadow', age: '1' },
  { name: 'Pumpkin', age: '3' },
  { name: 'Luna', age: '4' },
  { name: 'Simba', age: '2' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);

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
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  }, []);

  return (
    <section className="text-center mt-4">
      <h2>Available Cats</h2>
      <p>Meet our adorable cats looking for their forever home!</p>

      <div className="mt-2 row g-4 cats-container" id="cats-container">
        {cats.map((cat, i) => (
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
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

*/

import { useEffect, useState } from 'react';

const availableBreeds = ['Sphynx', 'Peterbald', 'Birman', 'Abyssinian', 'Persian', 'Bengal', 'Siamese'];

const availableCats = [
  { id: 1, name: 'Whiskers', age: '2', breed: 'Persian' },
  { id: 2, name: 'Mittens', age: '2', breed: 'Siamese' },
  { id: 3, name: 'Shadow', age: '1', breed: 'Bengal' },
  { id: 4, name: 'Pumpkin', age: '3', breed: 'Abyssinian' },
  { id: 5, name: 'Luna', age: '4', breed: 'Sphynx' },
  { id: 6, name: 'Simba', age: '2', breed: 'Birman' },
  { id: 7, name: 'Oliver', age: '1', breed: 'Peterbald' },
  { id: 8, name: 'Bella', age: '3', breed: 'Persian' },
  { id: 9, name: 'Charlie', age: '2', breed: 'Siamese' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [filteredCats, setFilteredCats] = useState([]);
  const [breedFilter, setBreedFilter] = useState('');
  const [nameFilter, setNameFilter] = useState('');

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
        setFilteredCats(catsWithImages);
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  }, []);


  useEffect(() => {
    let result = cats;
    
    if (breedFilter) {
      result = result.filter(cat => cat.breed === breedFilter);
    }
    
    if (nameFilter) {
      result = result.filter(cat => 
        cat.name.toLowerCase().includes(nameFilter.toLowerCase())
      );
    }
    
    setFilteredCats(result);
  }, [breedFilter, nameFilter, cats]);

  return (
    <section className="text-center mt-4">
      <h2>Available Cats</h2>
      <p>Meet our adorable cats looking for their forever home!</p>


      <div className="filter-container justify-content-center">
        <div>
          <label htmlFor="breedFilter" className="form-label">Filter by Breed:</label>
          <select 
            id="breedFilter" 
            className="form-select"
            value={breedFilter}
            onChange={(e) => setBreedFilter(e.target.value)}
          >
            <option value="">All Breeds</option>
            {availableBreeds.map(breed => (
              <option key={breed} value={breed}>{breed}</option>
            ))}
          </select>
        </div>
        
        <div>
          <label htmlFor="nameFilter" className="form-label">Search by Name:</label>
          <input
            type="text"
            id="nameFilter"
            className="form-control"
            placeholder="Type cat name..."
            value={nameFilter}
            onChange={(e) => setNameFilter(e.target.value)}
          />
        </div>
      </div>

      <div className="cats-container row g-4">
        {filteredCats.length > 0 ? (
          filteredCats.map((cat) => (
            <div key={cat.id} className="col-md-4 col-lg-3">
              <div className="cat-card h-100">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="img-fluid"
                  style={{
                    borderRadius: '8px 8px 0 0',
                    height: '200px',
                    objectFit: 'cover',
                    width: '100%'
                  }}
                />
                <div className="cat-info">
                  <h3 className="h5 mb-1">{cat.name}</h3>
                  <p className="mb-1">Age: {cat.age} years</p>
                  <p className="mb-0">Breed: {cat.breed}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12">
            <p className="text-muted">No cats found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
}