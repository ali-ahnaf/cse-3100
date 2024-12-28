import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2' ,breed: 'Sphynx'},
  { name: 'Mittens', age: '2' ,breed: 'Peterbald'},
  { name: 'Shadow', age: '1' ,breed: 'Birman'},
  { name: 'Pumpkin', age: '3' ,breed: 'Abyssinian'},
  { name: 'Luna', age: '4' ,breed: 'Persian'},
  { name: 'Simba', age: '2' ,breed: 'Bengal'},
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [searchQuery,setSearchQuery]=useState('');
  const [selectBreed,setSelectBreed]=useState('');

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
  const filteredCats = cats.filter((cat) => {
    const matchesName = cat.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesBreed = selectBreed ? cat.breed === selectBreed : true;
    return matchesName && matchesBreed;
  });
  return (
    <section className="text-center mt-4">
      <h2>Available Cats</h2>
      <p>Meet our adorable cats looking for their forever home!</p>

      <div className='mb-4'>
        <input type="text" placeholder='Search by name' value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} className='form-control d-inline-block w-auto me-2'/>
        <select value={selectBreed} onChange={(e)=>setSelectBreed(e.target.value)} className='form-control d-inline-block w-auto me-2'>
        <option value="">All Breeds</option>
          {[...new Set(availableCats.map((cat) => cat.breed))].map((breed) => (
            <option key={breed} value={breed}>
              {breed}
            </option>
          ))}
        </select>
      </div>
      
      <div className="mt-2 row g-4 cats-container overflow-hidden" id="cats-container">
        {filteredCats.map((cat, i) => (
          <div key={i} className="col-md-4">
            <div className="cat-card">
              <img src={cat.image} alt={cat.name} className="img-fluid mb-2" style={{ borderRadius: '8px', height: '200px', objectFit: 'cover' }} />
              <div className="cat-info">
                <h3 className="h5 mb-1">{cat.name}</h3>
                <p className="mb-1">Age: {cat.age}</p>
                <p className="mb-0">Breed: {cat.breed}</p>
              </div> 
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
