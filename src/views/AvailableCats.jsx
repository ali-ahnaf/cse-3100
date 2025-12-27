import { useEffect, useMemo, useState } from 'react';

const BREED_TYPES = [
  'Sphynx',
  'Peterbald',
  'Birman',
  'Abyssinian',
  'Persian',
  'Bengal',
  'Siamese',
];

const availableCats = [
  { name: 'Micky mouse', age: '2', breed: 'Sphynx' },
  { name: 'Micky mouse', age: '2', breed: 'Peterbald' },
  { name: 'Micky mouse', age: '2', breed: 'Birman' },
  { name: 'Micky mouse', age: '2', breed: 'Abyssinian' },
  { name: 'Micky mouse', age: '2', breed: 'Persian' },
  { name: 'Micky mouse', age: '2', breed: 'Bengal' },
  { name: 'Micky mouse', age: '2', breed: 'Siamese' },
  { name: 'Micky mouse', age: '2', breed: 'Sphynx' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [breeds, setBreeds] = useState([]);

  const [selectedBreed, setSelectedBreed] = useState('');
  const [nameQuery, setNameQuery] = useState('');
  const [pendingNameQuery, setPendingNameQuery] = useState('');

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const res = await fetch('https://api.thecatapi.com/v1/breeds');
        const data = await res.json();
        setBreeds(data || []);
      } catch (e) {
        console.error('Error fetching breeds:', e);
      }
    };

    const fetchCatImages = async () => {
      try {
        const urlBase = 'https://api.thecatapi.com/v1/images/search';
        const responses = await Promise.all(
          availableCats.map(() => {
            const url = selectedBreed
              ? `${urlBase}?breed_ids=${selectedBreed}`
              : urlBase;
            return fetch(url).then((res) => res.json());
          })
        );

        const catsWithImages = availableCats.map((cat, index) => ({
          ...cat,
          image: responses[index]?.[0]?.url || '',
        }));

        setCats(catsWithImages);
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchBreeds();
    fetchCatImages();
  }, [selectedBreed]);

    const visibleCats = useMemo(() => {
      const q = nameQuery.trim().toLowerCase();
      if (!q) return cats;
      return cats.filter((c) => c.name.toLowerCase().includes(q));
    }, [cats, nameQuery]);

    const onSearch = (e) => {
      e.preventDefault();
      setNameQuery(pendingNameQuery);
    };

  return (
    <>
      <div className="page-row page-row-wide">
        <h3 className="section-title small">Available Cats</h3>

        <form className="filters" onSubmit={onSearch}>
          <select
            className="control"
            value={selectedBreed}
            onChange={(e) => setSelectedBreed(e.target.value)}
          >
            <option value="">Select Breed</option>
            {breeds.map((b) => (
              <option key={b.id} value={b.id}>
                {b.name}
              </option>
            ))}
          </select>

          <input 
            className="control"
            placeholder="search by name"
            value={pendingNameQuery}
            onChange={(e) => setPendingNameQuery(e.target.value)}
          />

          <button className="btn" type="submit">
            Search
          </button>
        </form>
      </div>

      <div className="divider divider-wide" />

      <div className="cats-grid cats-grid-4 cats-grid-wide">
        {visibleCats.map((cat, i) => (
          <div key={i} className="cat-card">
            <div className="cat-image">
              {cat.image ? (
                <img src={cat.image} alt={cat.name} />
              ) : (
                <div className="cat-image-placeholder" />
              )}
            </div>  

            <div className="cat-info">
              <div className="cat-name">{cat.name}</div>
              <div className="cat-breed">Breed: {cat.breed}</div>
              <div className="cat-age">Age: {cat.age}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
