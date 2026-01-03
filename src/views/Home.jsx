import { useEffect, useState } from 'react';

const featuredCats = [
  { name: 'Whiskers', age: '2', breed: 'Siamese' },
  { name: 'Mittens', age: '2', breed: 'Persian' },
  { name: 'Shadow', age: '1', breed: 'Bengal' },
  { name: 'Hunter', age: '2', breed: 'Bengal' },
  { name: 'Albesilteste', age: '3', breed: 'Mixed' }
];

export default function Home() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(
          featuredCats.map(() =>
            fetch('https://api.thecatapi.com/v1/images/search').then((res) =>
              res.json()
            )
          )
        );

        const catsWithImages = featuredCats.map((cat, index) => ({
          ...cat,
          image: responses[index][0].url,
        }));

        setCats(catsWithImages);
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  },[]);

  return (
   <section>
      <h2>Welcome to Purrfect Adoption</h2>
      <p>Find your perfect feline companion! We connect loving families with cats in need of forever homes.</p>
      <h2 style={{ marginTop: '2rem', marginBottom:'2rem' }}>Featured Cats</h2>
      
      <div  className="cats-container">
      {cats.map((cat) => (
        <div 
          key={cat.id} 
          className="cat-card">
          <img
            src={cat.image}
            alt={cat.name}
          />
          <div className="cat-info">
            <h3>{cat.name}</h3>
            <p>Age: {cat.age} years</p>
            <p>Breed: {cat.breed}</p>
          </div>
        </div>
      ))}
      </div>
   </section>
  );
}