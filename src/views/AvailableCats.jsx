import { useEffect, useState } from 'react';
//cat object with name age and breed
const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Sphynx' },
  { name: 'Mittens', age: '2', breed: 'Persian' },
  { name: 'Shadow', age: '1', breed: 'Abyssinian' },
  { name: 'Pumpkin', age: '3', breed: 'Peterbald' },
  { name: 'Luna', age: '4', breed: 'Siamese' },
  { name: 'Simba', age: '2', breed: 'Bengal' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [filteredCats, setFilteredCats] = useState([]);// to store the filtered list of cats
  const [selectedBreed, setSelectedBreed] = useState('');//to track the selected breed for filtering
  const [searchTerm, setSearchTerm] = useState('');//to searching cat by name
  useEffect(() => {
    // Fetch cat images from an API endpoint and assign it to the featuredCats list
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(availableCats.map(() => fetch('https://api.thecatapi.com/v1/images/search').then((res) => res.json())));
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
  useEffect(() => {
    let filtered = cats;// filter cats for the selected breed
    if (selectedBreed) {
      filtered = filtered.filter(cat => cat.breed === selectedBreed);
    }
    //for searching cat logic
    if (searchTerm) {
      filtered = filtered.filter(cat => cat.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }
    setFilteredCats(filtered);//for updated selected breed cats
  }, [selectedBreed, cats,searchTerm]);

  // breeds for dropdown
  const breeds = ['Sphynx', 'Peterbald', 'Birman', 'Abyssinian', 'Persian', 'Bengal', 'Siamese'];
  return (
    <section className="text-center mt-4">
      <h2>Available Cats</h2>
      <p>Meet our adorable cats looking for their forever home!</p>

      <div className="filters mb-4">
        <input
          type="text"
          placeholder="Search by name"
          className="form-control mb-2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />


        <select
          value={selectedBreed}
          onChange={(e) => setSelectedBreed(e.target.value)}
          className="form-select"
        >
          <option value="">Filter by Breed</option>
          {breeds.map((breed, index) => (
            <option key={index} value={breed}>{breed}</option>
          ))}
        </select>
      </div>


      <div className="mt-2 row g-4 cats-container" id="cats-container">
        {filteredCats.map((cat, i) => (
          <div key={i} className="col-md-4">
            <div className="cat-card">
              <img src={cat.image} alt={cat.name} className="img-fluid mb-2" style={{ borderRadius: '8px', height: '180px', objectFit: 'cover' }} />
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
