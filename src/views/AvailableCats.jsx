import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Siamese' },
  { name: 'Mittens', age: '2', breed: 'Persian' },
  { name: 'Shadow', age: '1', breed: 'Bengal' },
  { name: 'Pumpkin', age: '3', breed: 'Birman' },
  { name: 'Luna', age: '4', breed: 'Abyssinian' },
  { name: 'Simba', age: '2', breed: 'Sphynx' },
];

const breeds = ['All', 'Siamese', 'Persian', 'Bengal', 'Birman', 'Abyssinian', 'Sphynx'];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCat, setSelectedCat] = useState(null);

  // URL params
  const [searchParams, setSearchParams] = useSearchParams();

  const [breedFilter, setBreedFilter] = useState(searchParams.get('breed') || 'All');
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');

  useEffect(() => {
    const fetchImages = async () => {
      const responses = await Promise.all(
        availableCats.map(() =>
          fetch('https://api.thecatapi.com/v1/images/search').then(res => res.json())
        )
      );

      setCats(
        availableCats.map((cat, i) => ({
          ...cat,
          image: responses[i]?.[0]?.url,
          description: 'Friendly, playful, and looking for a loving forever home.',
        }))
      );

      setLoading(false);
    };

    fetchImages();
  }, []);

  // Sync filters → URL
  useEffect(() => {
    const params = {};
    if (breedFilter !== 'All') params.breed = breedFilter;
    if (searchTerm) params.search = searchTerm;
    setSearchParams(params);
  }, [breedFilter, searchTerm, setSearchParams]);

  const filteredCats = cats.filter(cat => {
    const matchesBreed = breedFilter === 'All' || cat.breed === breedFilter;
    const matchesSearch = cat.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesBreed && matchesSearch;
  });

  const clearFilters = () => {
    setBreedFilter('All');
    setSearchTerm('');
    setSearchParams({});
  };

  return (
    <section>
      <h2>Available Cats</h2>
      <p>Browse our cats by breed or search by name.</p>

      {/* FILTER BAR */}
      <motion.div
        className="filters filters-pro"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <select value={breedFilter} onChange={e => setBreedFilter(e.target.value)}>
          {breeds.map(breed => (
            <option key={breed}>{breed}</option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Search by name…"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />

        {(breedFilter !== 'All' || searchTerm) && (
          <button className="clear-btn" onClick={clearFilters}>
            Clear
          </button>
        )}
      </motion.div>

      {/* GRID */}
      <div className="row">
        {loading &&
          Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="skeleton-card" />
          ))}

        {!loading && filteredCats.length === 0 && (
          <motion.div
            className="no-results"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <h3>No results found</h3>
            <p>Try adjusting your filters.</p>
          </motion.div>
        )}

        <AnimatePresence>
          {!loading &&
            filteredCats.map((cat, i) => (
              <motion.div
                key={cat.name}
                layout
                className="cat-card hover-card"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                onClick={() => setSelectedCat(cat)}
              >
                <img src={cat.image} alt={cat.name} />

                <div className="cat-overlay">
                  <div className="cat-overlay-content">
                    <h3>{cat.name}</h3>
                    <p>Age: {cat.age}</p>
                    <span className="breed-pill">{cat.breed}</span>
                  </div>
                </div>
              </motion.div>
            ))}
        </AnimatePresence>
      </div>

      {/* MODAL (unchanged) */}
      <AnimatePresence>
        {selectedCat && (
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCat(null)}
          >
            <motion.div
              className="modal"
              initial={{ scale: 0.9, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 40 }}
              onClick={e => e.stopPropagation()}
            >
              <img src={selectedCat.image} alt={selectedCat.name} />
              <div className="modal-content">
                <h3>{selectedCat.name}</h3>
                <p><strong>Age:</strong> {selectedCat.age}</p>
                <p><strong>Breed:</strong> {selectedCat.breed}</p>
                <p>{selectedCat.description}</p>

                <button className="close-btn" onClick={() => setSelectedCat(null)}>
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
