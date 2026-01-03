import { useEffect, useState } from 'react';


const availableCats = [
  { name: 'Whiskers', age: '2' },
  { name: 'Mittens', age: '2' },
  { name: 'Shadow', age: '1' },
  { name: 'Pumpkin', age: '3' },
  { name: 'Luna', age: '4' },
  { name: 'Simba', age: '2' },
];


const BREEDS = ['Sphynx', 'Peterbald', 'Birman', 'Abyssinian', 'Persian', 'Bengal'];


const MAX_RETRIES = 3;

const FALLBACK_IMAGE = 'https://placekitten.com/600/400';


export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCats = cats.filter((cat) => {
    const matchesBreed = selectedBreed === 'All' || cat.breed === selectedBreed;
    const matchesName = cat.name.toLowerCase().includes(searchQuery.trim().toLowerCase());
    return matchesBreed && matchesName;
  });

  const fetchReplacement = async (index, attempt = 0) => {
    if (attempt >= MAX_RETRIES) {
      setCats((prev) =>
        prev.map((c, i) => (i === index ? { ...c, image: FALLBACK_IMAGE, imageFailed: false } : c))
      );
      return;
    }


    try {
      const res = await fetch('https://api.thecatapi.com/v1/images/search');
      const data = await res.json();
      const url = data && data[0] && data[0].url;
      if (url) {
        setCats((prev) => prev.map((c, i) => (i === index ? { ...c, image: url } : c)));
      } else {

        setTimeout(() => fetchReplacement(index, attempt + 1), 500);
      }
    } catch (err) {
  
      setTimeout(() => fetchReplacement(index, attempt + 1), 500);
    }
  };



  const handleImageError = (index) => {
    setCats((prev) => prev.map((c, i) => (i === index ? { ...c, image: FALLBACK_IMAGE, imageFailed: false } : c)));
  };



  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(
          availableCats.map(() =>
            fetch('https://api.thecatapi.com/v1/images/search')
              .then((res) => res.json())
              .catch(() => null)
          )
        );



        const catsWithImages = availableCats.map((cat, index) => {
          const url =
            responses[index] && Array.isArray(responses[index]) && responses[index][0] && responses[index][0].url
              ? responses[index][0].url
              : FALLBACK_IMAGE;
          return {
            ...cat,
            image: url,
            breed: cat.breed || BREEDS[index % BREEDS.length],
            retryCount: 0,
            imageFailed: false,
          };
        });

        setCats(catsWithImages);

        
        catsWithImages.forEach((c, index) => {         // if image missed then search again
          if (!c.image) fetchReplacement(index, 0);
        });
      } catch (error) {
        console.error('Error fetching cat images:', error);
        const initial = availableCats.map((cat) => ({ ...cat, image: FALLBACK_IMAGE, retryCount: 0, imageFailed: false }));
        setCats(initial);
        initial.forEach((_, index) => fetchReplacement(index, 0));
      }
    };

    fetchCatImages();
  }, []);





  
  return (
    <section className="mb-4">
      <div className="container">
        <div className="text-start mb-3">
          <h2 className="display-6 fw-bold">Available Cats</h2>
          <p className="text-muted">Meet our adorable cats looking for their forever home!</p>
        </div>

        <div className="row align-items-center mb-4 g-2 filters">
          <div className="col-6">
            <select className="form-select rounded-pill" value={selectedBreed} onChange={(e) => setSelectedBreed(e.target.value)}>
              <option value="All">All breeds</option>
              {BREEDS.map((b) => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
          </div>

          <div className="col-6">
            <input
              type="text"
              className="form-control form-control-lg rounded-pill"
              placeholder="Search by name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="row g-4 cats-container">
          {filteredCats.length === 0 ? (
            <div className="col-12"><p>No cats found.</p></div>
          ) : (
            filteredCats.map((cat, i) => (
              <div key={i} className="col-12 col-md-6 col-lg-4">
                <div className="cat-card">
                  {cat.image && !cat.imageFailed ? (
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="cat-image"
                      loading="lazy"
                      onError={() => handleImageError(i)}
                    />
                  ) : (
                    <div className="image-placeholder">Image unavailable</div>
                  )}

                  <div className="cat-info">
                    <h3 className="h5 mb-1">{cat.name}</h3>
                    <p className="mb-0">Breed: {cat.breed} • Age: {cat.age}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}