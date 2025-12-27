import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Bengal'},
  { name: 'Mittens', age: '2', breed: 'Siamese'},
  { name: 'Shadow', age: '1', breed: 'Persian'},
  { name: 'Pumpkin', age: '3', breed:'Sphynx'},
  { name: 'Luna', age: '4',breed:'Peterbald'},
  { name: 'Simba', age: '2', breed: 'Birman'},
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [breedFilter, setBreedFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

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
  const matchesBreed =
    breedFilter === 'All' || cat.breed === breedFilter;

  const matchesName =
    cat.name.toLowerCase().includes(searchTerm.toLowerCase());

  return matchesBreed && matchesName;
});

  return (
    <section className="text-center mt-4">
      <h2>Available Cats</h2>
      <p>Meet our adorable cats looking for their forever home!</p>
      <div className="d-flex justify-content-center gap-3 my-3 flex-wrap">
  <select
    className="form-select w-auto"
    value={breedFilter}
    onChange={(e) => setBreedFilter(e.target.value)}
  >
    <option value="All">Select Breeds</option>
    <option value="Sphynx">Sphynx</option>
    <option value="Peterbald">Peterbald</option>
    <option value="Birman">Birman</option>
    <option value="Persian">Persian</option>
    <option value="Bengal">Bengal</option>
    <option value="Siamese">Siamese</option>
  </select>
  <input
    type="text"
    className="form-control w-auto"
    placeholder="Search by name"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />
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
