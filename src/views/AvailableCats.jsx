import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Sphynx' },
  { name: 'Mittens', age: '2', breed: 'Birman' },
  { name: 'Shadow', age: '1', breed: 'Persian' },
  { name: 'Pumpkin', age: '3', breed: 'Bengal' },
  { name: 'Luna', age: '4', breed: 'Siamese' },
  { name: 'Simba', age: '2', breed: 'Abyssinian' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
   const [search, setSearch] = useState('');       // FIX: state for search box
  const [breedFilter, setBreedFilter] = useState(''); // FIX: state for dropdown filter
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

  const filteredCats = cats.filter(cat => {
    return (
      cat.name.toLowerCase().includes(search.toLowerCase()) &&
      (breedFilter === '' || cat.breed === breedFilter)
    );
  });

  return (
    <section className="text-center mt-4">
      <h2>Available Cats</h2>
      <p>Meet our adorable cats looking for their forever home!</p>
       


 {/* FIX: Filters section */}
      <div className="filters mb-3 d-flex gap-3 justify-content-center">
        {/* Search box */}
        <input
          type="text"
          placeholder="Search by name"
          className="form-control"
          style={{ maxWidth: '200px' }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Dropdown for breed */}
        <select
          className="form-select"
          style={{ maxWidth: '200px' }}
          value={breedFilter}
          onChange={(e) => setBreedFilter(e.target.value)}
        >
          <option value="">All Breeds</option>
          <option value="Sphynx">Sphynx</option>
          <option value="Peterbald">Peterbald</option>
          <option value="Birman">Birman</option>
          <option value="Abyssinian">Abyssinian</option>
          <option value="Persian">Persian</option>
          <option value="Bengal">Bengal</option>
          <option value="Siamese">Siamese</option>
        </select>
      </div>







           {/* FIX: Removed duplicate id, rely on CSS class for grid */}
            {/* Cat cards grid */}
      <div className="mt-2 row g-4 cats-container">
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
                {/* FIX: Display breed in UI */}
                <p className="mb-0">Breed: {cat.breed}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}