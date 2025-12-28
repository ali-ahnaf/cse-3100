import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Siamese' },
  { name: 'Mittens', age: '2', breed: 'Persian' },
  { name: 'Shadow', age: '1', breed: 'Bengal' },
  { name: 'Pumpkin', age: '3', breed: 'Abyssinian' },
  { name: 'Luna', age: '4', breed: 'Birman' },
  { name: 'Simba', age: '2', breed: 'Sphynx' },
  { name: 'Oliver', age: '1', breed: 'Peterbald' },
  { name: 'Bella', age: '3', breed: 'Persian' },
  { name: 'Charlie', age: '2', breed: 'Bengal' },
];

const breedOptions = ['All Breeds', 'Sphynx', 'Peterbald', 'Birman', 'Abyssinian', 'Persian', 'Bengal', 'Siamese'];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [filteredCats, setFilteredCats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedBreed, setSelectedBreed] = useState('All Breeds');
  const [searchName, setSearchName] = useState('');

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        setLoading(true);
        const responses = await Promise.all(
          availableCats.map(() =>
            fetch('https://api.thecatapi.com/v1/images/search')
              .then(res => res.json())
          )
        );
        
        const catsWithImages = availableCats.map((cat, index) => ({
          ...cat,
          image: responses[index][0]?.url || 'https://images.unsplash.com/photo-1514888286974-6d03bde4ba34?w=400&h=300&fit=crop'
        }));

        setCats(catsWithImages);
        setFilteredCats(catsWithImages);
      } catch (error) {
        console.error('Error fetching cat images:', error);
        const catsWithPlaceholders = availableCats.map(cat => ({
          ...cat,
          image: 'https://images.unsplash.com/photo-1514888286974-6d03bde4ba34?w=400&h=300&fit=crop'
        }));
        setCats(catsWithPlaceholders);
        setFilteredCats(catsWithPlaceholders);
      } finally {
        setLoading(false);
      }
    };

    fetchCatImages();
  }, []);


  useEffect(() => {
    let result = cats;
    
    if (selectedBreed !== 'All Breeds') {
      result = result.filter(cat => cat.breed === selectedBreed);
    }
    
    if (searchName.trim() !== '') {
      result = result.filter(cat => 
        cat.name.toLowerCase().includes(searchName.toLowerCase())
      );
    }
    
    setFilteredCats(result);
  }, [selectedBreed, searchName, cats]);

  const handleBreedChange = (e) => {
    setSelectedBreed(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchName(e.target.value);
  };

  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <section className="container-fluid px-lg-5 px-md-4 px-3 py-4">
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bold mb-3">Available Cats</h1>
        <p className="lead fs-4">Meet our adorable cats looking for their forever home!</p>
      </div>

      {}
      <div className="row justify-content-center mb-5">
        <div className="col-lg-10">
          <div className="filter-section p-4 bg-white rounded-4 shadow-sm border">
            <h3 className="h5 mb-4 text-center">Find Your Perfect Companion</h3>
            <div className="row g-4 align-items-end">
              <div className="col-md-5">
                <div className="filter-group">
                  <label htmlFor="breedFilter" className="form-label fw-semibold">
                    <i className="bi bi-filter-circle me-2"></i>Filter by Breed
                  </label>
                  <select 
                    id="breedFilter" 
                    className="form-select form-select-lg"
                    value={selectedBreed}
                    onChange={handleBreedChange}
                  >
                    {breedOptions.map((breed, index) => (
                      <option key={index} value={breed}>{breed}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="col-md-5">
                <div className="filter-group">
                  <label htmlFor="nameSearch" className="form-label fw-semibold">
                    <i className="bi bi-search me-2"></i>Search by Name
                  </label>
                  <input
                    type="text"
                    id="nameSearch"
                    className="form-control form-control-lg"
                    placeholder="Enter cat name..."
                    value={searchName}
                    onChange={handleSearchChange}
                  />
                </div>
              </div>
              <div className="col-md-2">
                <button 
                  className="btn btn-outline-secondary btn-lg w-100"
                  onClick={() => {
                    setSelectedBreed('All Breeds');
                    setSearchName('');
                  }}
                >
                  <i className="bi bi-arrow-clockwise"></i> Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {}
      <div className="row justify-content-center mb-4">
        <div className="col-lg-10">
          <div className="d-flex justify-content-between align-items-center">
            <h3 className="h4 mb-0">
              Showing <span className="text-primary">{filteredCats.length}</span> of{" "}
              <span className="text-muted">{cats.length}</span> cats
            </h3>
            {selectedBreed !== 'All Breeds' && (
              <span className="badge bg-primary fs-6 px-3 py-2">
                Breed: {selectedBreed}
              </span>
            )}
          </div>
        </div>
      </div>

      {}
      <div className="row justify-content-center">
        <div className="col-xxl-10">
          <div className="row g-4">
            {filteredCats.length > 0 ? (
              filteredCats.map((cat, i) => (
                <div key={i} className="col-xxl-4 col-lg-6 col-md-6 col-sm-12">
                  <div className="cat-card h-100 border-0 rounded-4 overflow-hidden shadow-lg hover-shadow-xl transition-all duration-300">
                    <div className="position-relative" style={{ height: '350px', overflow: 'hidden' }}>
                      <img
                        src={cat.image}
                        alt={cat.name}
                        className="img-fluid w-100 h-100"
                        style={{
                          objectFit: 'cover',
                          transition: 'transform 0.5s ease'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                      />
                      <div className="position-absolute top-0 end-0 m-3">
                        <span className="badge bg-success fs-6 px-3 py-2">
                          <i className="bi bi-heart-fill me-1"></i> Available
                        </span>
                      </div>
                    </div>
                    <div className="cat-info p-4 bg-white">
                      <div className="d-flex justify-content-between align-items-start mb-3">
                        <h3 className="h3 fw-bold text-dark mb-0">{cat.name}</h3>
                        <span className="badge bg-info text-dark fs-6 px-3">
                          {cat.age} year{cat.age > 1 ? 's' : ''} old
                        </span>
                      </div>
                      <div className="mb-3">
                        <div className="d-flex align-items-center mb-2">
                          <i className="bi bi-tag-fill text-primary me-2 fs-5"></i>
                          <span className="fs-5 fw-semibold">Breed: {cat.breed}</span>
                        </div>
                        <p className="text-muted mb-0">
                          <i className="bi bi-info-circle me-2"></i>
                          This lovely {cat.breed.toLowerCase()} is looking for a loving home.
                        </p>
                      </div>
                      <div className="d-grid">
                        <button className="btn btn-primary btn-lg">
                          <i className="bi bi-person-plus-fill me-2"></i> Adopt {cat.name}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-12">
                <div className="text-center py-5 my-5">
                  <div className="display-1 text-muted mb-4">
                    <i className="bi bi-emoji-frown"></i>
                  </div>
                  <h2 className="h1 mb-3">No cats found</h2>
                  <p className="lead mb-4">
                    Try adjusting your filters or search term to find your perfect match.
                  </p>
                  <button 
                    className="btn btn-primary btn-lg px-4"
                    onClick={() => {
                      setSelectedBreed('All Breeds');
                      setSearchName('');
                    }}
                  >
                    <i className="bi bi-arrow-clockwise me-2"></i> Reset Filters
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {}
      {filteredCats.length > 0 && (
        <div className="row justify-content-center mt-5">
          <div className="col-lg-8 text-center">
            <div className="card border-0 bg-light rounded-4 p-5">
              <h3 className="h2 mb-3">Ready to Adopt?</h3>
              <p className="lead mb-4">
                Found a cat that stole your heart? Contact us to schedule a meet and greet!
              </p>
              <div className="d-flex justify-content-center gap-3">
                <button className="btn btn-primary btn-lg px-5">
                  <i className="bi bi-telephone-fill me-2"></i> Call Now
                </button>
                <button className="btn btn-outline-primary btn-lg px-5">
                  <i className="bi bi-envelope-fill me-2"></i> Email Us
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}