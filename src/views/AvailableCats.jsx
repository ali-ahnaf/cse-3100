import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Sphynx' },
  { name: 'Mittens', age: '2', breed: 'Persian' },
  { name: 'Shadow', age: '1', breed: 'Bengal' },
  { name: 'Pumpkin', age: '3', breed: 'Abyssinian' },
  { name: 'Luna', age: '4', breed: 'Birman' },
  { name: 'Simba', age: '2', breed: 'Siamese' },
  { name: 'Momo', age: '4', breed: 'Mixed' },
  { name: 'Coco', age: '2', breed: 'Mixed' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState(''); // For breed filter
  const [searchTerm, setSearchTerm] = useState(''); // For name search

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(
          availableCats.map(() =>
            fetch('https://api.thecatapi.com/v1/images/search').then((res) => res.json())
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

  // Filter the cats based on selected breed and search term
  const filteredCats = cats.filter((cat) => {
    const matchesBreed = selectedBreed ? cat.breed === selectedBreed : true;
    const matchesSearch = cat.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesBreed && matchesSearch;
  });

  return (
    <section className="mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Available Cats</h2>
        
        {/* Filter Section - Inline */}
        <div className="d-flex gap-3">
          {/* Breed Dropdown */}
          <select
            className="form-select"
            value={selectedBreed}
            onChange={(e) => setSelectedBreed(e.target.value)}
          >
            <option value="">All Breeds</option>
            <option value="Sphynx">Sphynx</option>
            <option value="Persian">Persian</option>
            <option value="Bengal">Bengal</option>
            <option value="Abyssinian">Abyssinian</option>
            <option value="Birman">Birman</option>
            <option value="Siamese">Siamese</option>
            <option value="Mixed">Mixed</option>
          </select>

          {/* Search Box */}
          <input
            type="text"
            className="form-control"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Cats List */}
      <div className="row g-4 cats-container">
        {filteredCats.map((cat, i) => (
          <div key={i} className="col-md-4">
            <div className="cat-card">
              <img
                src={cat.image}
                alt={cat.name}
                className="img-fluid mb-2"
                style={{ borderRadius: '8px', height: '200px', objectFit: 'cover' }}
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
