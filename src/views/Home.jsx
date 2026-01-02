import { useEffect, useState } from 'react';

const featuredCats = [
  { id: 1, name: 'Whiskers', age: '2 years', breed: 'Siamese', description: 'A playful and affectionate Siamese cat.' },
  { id: 2, name: 'Mittens', age: '2 years', breed: 'Persian', description: 'A fluffy Persian with a gentle temperament.' },
  { id: 3, name: 'Shadow', age: '1 year', breed: 'Bengal', description: 'An energetic Bengal with beautiful spotted coat.' },
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
        </p>
      </section>

      <section className="mt-5">
        <h2>Featured cats</h2>
        <div className="mt-2 cats-container">
          {cats.map((cat) => (
            <div key={cat.id} className="cat-card">
              <img
                src={cat.image}
                alt={cat.name}
                className="img-fluid"
              />
              <div className="cat-info">
                <h3 className="h5 mb-1">{cat.name}</h3>
                <p className="mb-1">Breed: {cat.breed}</p>
                <p className="mb-1">Age: {cat.age}</p>
                <p className="mb-0">{cat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
