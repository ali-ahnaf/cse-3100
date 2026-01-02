import { useEffect, useState } from 'react';

const featuredCats = [
  { id: 1, name: 'Whiskers', breed: 'Siamese', age: '2' },
  { id: 2, name: 'Mittens', breed: 'Persian', age: '2' },
  { id: 3, name: 'Shadow', breed: 'Bengal', age: '1' },
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
  }, []);

  return (
    <>
      <section className="text-center mt-4">
        <h2>Welcome to Purrfect Adoption</h2>
        <p>
          Find your perfect feline companion today! At Purrfect Adoption, we are dedicated to
          connecting loving families with cats in need of a forever home. Whether you're looking for
          a playful kitten or a calm adult cat, we have the perfect match waiting for you. Adopt, don't shop!
        </p>
      </section>

      <section className="mt-5">
        <h2>Featured Cats</h2>
        <div className="cats-container">
          {cats.map((cat) => (
            <div key={cat.id} className="cat-card">
              <img
                src={cat.image}
                alt={cat.name}
                className="cat-image"
              />
              <div className="cat-info">
                <h3 className="cat-name">{cat.name}</h3>
                <p className="cat-breed">{cat.breed}</p>
                <p className="cat-age">Age: {cat.age}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
