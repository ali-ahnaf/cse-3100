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

        // Fixed: Set cats directly instead of appending, and added dependency array []
        setCats(catsWithImages);
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  }, []); // Added empty dependency array to run only once on mount

  return (
    <>
      <section className="text-center mt-4">
        <h2>Welcome to Purrfect Adoption</h2>
        <p>
          Find your perfect feline companion! We connect loving cats with caring families.
          Browse our featured cats below or visit our Available Cats page to see all our adorable residents.
        </p>
      </section>

      <section className="mt-5">
        <h2>Featured Cats</h2>
        <div className="cats-container">
          {cats.map((cat, i) => (
            <div key={i} className="cat-card">
              <img
                src={cat.image}
                alt={cat.name}
                className="img-fluid"
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
    </>
  );
}
