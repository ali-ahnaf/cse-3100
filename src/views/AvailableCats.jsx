import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Persian' },
  { name: 'Mittens', age: '2', breed: 'Siamese' },
  { name: 'Shadow', age: '1', breed: 'Bengal' },
  { name: 'Pumpkin', age: '3', breed: 'Abyssinian' },
  { name: 'Luna', age: '4', breed: 'Sphynx' },
  { name: 'Simba', age: '2', breed: 'Birman' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBreed, setSelectedBreed] = useState("");

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

  const filteredCats = cats.filter((cat) => {
    const matchesName = cat.name.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesBreed = selectedBreed === "" || cat.breed === selectedBreed;
    
    return matchesName && matchesBreed;
  });
  
  const breeds = [...new Set(availableCats.map(cat => cat.breed))];

  return (
    <section className="text-center mt-4">
      <h2>Available Cats</h2>
      <p>Meet our adorable cats looking for their forever home!</p>

      {/* Search and Filter Section */}
      <div className="d-flex justify-content-center gap-3 mb-4" style={{margin: "20px"}}>
        {/* Search Input */}
        <input 
          type="text" 
          placeholder="Search by name..." 
          className="form-control" 
          style={{maxWidth: "300px", padding: "10px", borderRadius: "5px", border: "1px solid #ccc"}}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Breed Dropdown */}
        <select 
          className="form-select"
          style={{maxWidth: "200px", padding: "10px", borderRadius: "5px", border: "1px solid #ccc"}}
          value={selectedBreed}
          onChange={(e) => setSelectedBreed(e.target.value)}
        >
          <option value="">All Breeds</option>
          {breeds.map((breed, index) => (
             <option key={index} value={breed}>{breed}</option>
          ))}
        </select>
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
              <p className="mb-0 text-muted" style={{ fontStyle: 'italic' }}>{cat.breed}</p>
              <p className="mb-0">Age: {cat.age}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
