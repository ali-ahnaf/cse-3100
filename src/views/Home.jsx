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

        setCats(catsWithImages);
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  }, []); // FIXED: Added empty dependency array

  return (
    <>
      <section className="text-center mt-4">
        <h2>Welcome to Purrfect Adoption</h2>
        <p>
          Today marks a new chapter in your life - one filled with purrs, 
          playful moments, and endless affection. Our cats are waiting to 
          bring joy to your home.
        </p>
      </section>

      <section className="mt-5">
        <h2>Featured Cats</h2>
        <div className="cats-container">
          {cats.map((cat, i) => (
            <div key={i} className="cat-card">
              <div className="cat-image">
                <img
                  src={cat.image}
                  alt={cat.name}
                />
              </div>
              <div className="cat-info">
                <h3 className="h5">{cat.name}</h3>
                <p className="cat-age">Age: {cat.age} years</p>
                <p className="cat-breed">Breed: {cat.breed}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}