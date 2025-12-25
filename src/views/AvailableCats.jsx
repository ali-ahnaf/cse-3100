import { useEffect, useState } from 'react';

// Added breeds to the data source
const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Persian' },
  { name: 'Mittens', age: '2', breed: 'Siamese' },
  { name: 'Shadow', age: '1', breed: 'Bengal' },
  { name: 'Pumpkin', age: '3', breed: 'Abyssinian' },
  { name: 'Luna', age: '4', breed: 'Sphynx' },
  { name: 'Simba', age: '2', breed: 'Birman' },
  { name: 'Mew', age: '2', breed: 'Persian' },
  { name: 'Goew', age: '2', breed: 'Siamese' },
  { name: 'Jambo', age: '1', breed: 'Bengal' },
  { name: 'Duke', age: '3', breed: 'Abyssinian' },
  { name: 'haki', age: '4', breed: 'Sphynx' },
  { name: 'Kimba', age: '2', breed: 'Birman' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  
  // State 1: Holds the value of the inputs while you type/select (Does NOT filter yet)
  const [breedInput, setBreedInput] = useState("");
  const [nameInput, setNameInput] = useState("");

  // State 2: Holds the "Active" filters (Used to update the grid)
  const [activeBreedFilter, setActiveBreedFilter] = useState("");
  const [activeNameFilter, setActiveNameFilter] = useState("");

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

  // Handler: When user clicks "Search" button
  const handleSearch = () => {
    setActiveBreedFilter(breedInput);
    setActiveNameFilter(nameInput);
  };

  // Filter Logic: Uses the ACTIVE filters, not the input values
  const filteredCats = cats.filter((cat) => {
    const matchesName = cat.name.toLowerCase().includes(activeNameFilter.toLowerCase());
    const matchesBreed = activeBreedFilter === "" || cat.breed === activeBreedFilter;
    return matchesName && matchesBreed;
  });

  const breeds = [...new Set(availableCats.map(cat => cat.breed))];

  return (
    <section className="mt-4">
      
      {/* HEADER SECTION: Flexbox for Side-by-Side layout */}
      <div style={{ display: 'flex', justifyContent: 'space-between',  marginBottom: '5px' }}>
        
        {/* Left Side: Title */}
        <h2 className="" style={{textAlign: 'left'}}>Available cats</h2>

        {/* Right Side: Search Controls */}
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          
          {/* 1. Breed Dropdown */}
          <select 
            className="form-select"
            style={{ 
              width: "180px", 
              padding: "5px", 
              borderRadius: "5px", 
              border: "1px solid #333" 
            }}
            value={breedInput}
            onChange={(e) => setBreedInput(e.target.value)}
          >
            <option value="">Select breed</option>
            {breeds.map((breed, index) => (
               <option key={index} value={breed}>{breed}</option>
            ))}
          </select>

          {/* 2. Search Box */}
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
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
          />

          {/* 3. Search Button (Blue) */}
          <button 
            onClick={handleSearch}
            style={{
              backgroundColor: '#90CDF4', // Light blue like mockup
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

      {/* The Black Border Divider */}
      <hr style={{ border: 'none', borderTop: '2px solid #333', opacity: 1, margin: '0 0 30px 0' }} />

      {/* THE GRID */}
      <div className="mt-2 row g-4 cats-container" id="cats-container">
        {filteredCats.map((cat, i) => (
          <div key={i} className="col-md-4">
            <div className="cat-card">
              <img
                src={cat.image}
                alt={cat.name}
                className="img-fluid mb-2"
                style={{
                  borderRadius: "8px",
                  
                  objectFit: "cover",
                }}
              />
              <div className="cat-info">
                <h3 className="h5 mb-1">{cat.name}</h3>
                <p className="mb-0 text-muted" style={{ fontStyle: 'italic', fontSize: '0.8rem' }}>{cat.breed}</p>
                <p className="mb-0">Age: {cat.age}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
