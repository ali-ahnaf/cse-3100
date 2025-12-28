import { useEffect, useState } from 'react';

const featuredCats = [
  { name: 'Whiskers', age: '2', breed: 'Persian' },
  { name: 'Mittens', age: '2', breed: 'Siamese' },
  { name: 'Shadow', age: '1', breed: 'Bengal' },
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

        // সরাসরি ডাটা সেট করছি, আগের ডাটার সাথে যোগ করছি না যাতে লুপ না হয়
        setCats(catsWithImages); 
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  }, []); // এই খালি ব্র্যাকেটটি নিশ্চিত করে যে কোডটি মাত্র একবার চলবে

  return (
    <div className="container">
      <section className="text-center mt-4">
        <h2>Welcome to Purrfect Adoption</h2>
        <p>Meet our featured cats looking for a home.</p>
      </section>

      <section className="mt-5">
        <h2>Featured cats</h2>
        <div className="cats-container">
          {cats.map((cat, i) => (
            <div key={i} className="cat-card">
              <img src={cat.image} alt={cat.name} className="cat-img" />
              <div className="cat-info">
                <h3>{cat.name}</h3>
                <p>Age: {cat.age}</p>
                <p><strong>Breed: {cat.breed}</strong></p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}