import { useEffect, useState } from 'react';


const availableCats = [
  { name: 'Whiskers', age: '2' },
  { name: 'Mittens', age: '2' },
  { name: 'Shadow', age: '1' },
  { name: 'Pumpkin', age: '3' },
  { name: 'Luna', age: '4' },
  { name: 'Simba', age: '2' },
];


const BREEDS = ['Sphynx', 'Peterbald', 'Birman', 'Abyssinian', 'Persian', 'Bengal', 'Siamese'];


const MAX_RETRIES = 3;


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
      setCats((prev) => prev.map((c, i) => (i === index ? { ...c, imageFailed: true } : c)));
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
    setCats((prev) => {
      const c = prev[index] || {};
      const retries = (c.retryCount || 0) + 1;
      const updated = prev.map((x, i) => (i === index ? { ...x, retryCount: retries } : x));
      return updated;
    });

    
    setTimeout(() => fetchReplacement(index, 1), 0);
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
              : undefined;
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
        const initial = availableCats.map((cat) => ({ ...cat, image: undefined, retryCount: 0, imageFailed: false }));
        setCats(initial);
        initial.forEach((_, index) => fetchReplacement(index, 0));
      }
    };

    fetchCatImages();
  }, []);





  
  return (
    <section className="text-center mt-4">
      <h2>Available Cats</h2>
      <p>Meet our adorable cats looking for their forever home!</p>

      <div className="filters">
        <select value={selectedBreed} onChange={(e) => setSelectedBreed(e.target.value)}>
          <option value="All">All breeds</option>
          {BREEDS.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Search by name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="mt-2 cats-container">
        {filteredCats.length === 0 ? (
          <p>No cats found.</p>
        ) : (
          filteredCats.map((cat, i) => (
            <div key={i} className="cat-item">
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
                  <p className="mb-0">Breed: {cat.breed}</p>
                  <p className="mb-0">Age: {cat.age}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}