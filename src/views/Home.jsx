import { useEffect, useState } from 'react';

const featuredCats = [
  { name: 'Whiskers', age: '2', breed: 'Siamese' },
  { name: 'Mittens', age: '2', breed: 'Persian' },
  { name: 'Shadow', age: '1', breed: 'Bengal' },
];

export default function Home() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const responses = await Promise.all(
          featuredCats.map(() =>
            fetch('https://api.thecatapi.com/v1/images/search').then((res) => res.json())
          )
        );
        const data = featuredCats.map((cat, i) => ({
          ...cat,
          image: responses[i][0].url
        }));
        setCats(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchImages();
  }, []); // Fix: Added empty dependency array

  return (
    <div>
      <h2>Featured cats</h2>
      <div className="cats-container">
        {cats.map((cat, i) => (
          <div key={i} className="cat-card">
            <img src={cat.image} alt={cat.name} style={{width:'100%', height:'150px', objectFit:'cover'}} />
            <div className="cat-info">
              <strong>{cat.name}</strong><br/>
              <span className="small">Age: {cat.age}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}