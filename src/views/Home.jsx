import { useEffect, useState } from 'react';

const featuredCats = [
  { name: 'Whiskers', age: '2', breedClass: 'Persian' },
  { name: 'Mittens', age: '2', breedClass: 'Bengal' },
  { name: 'Shadow', age: '1', breedClass: 'Siamese' },
  { name: 'Pumpkin', age: '3', breedClass: 'Birman' },
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
      <section className="welcome">
        <h2>Welcome to Purrfect Adoption</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Maecenas luctus dolor sit amet, consectetur adipiscing elit.
          Vero fugiat placeat fugit cum nulla aut omnis eveniet veritatis ipsa quae est. Iusto ipsam qui harum maiores tempore quaerat delectus eum sapiente molestias.
          Assumenda ullam corporis in minima blanditiis odio dicta dolorum, repellat similique.
        </p>
      </section>

      <section className="featured">
        <h2>Featured cats</h2>

        <div className="cats-grid">
          {cats.map((cat, i) => (
            <div key={i} className="cat-card">
              <img src={cat.image} alt={cat.name} />
              <div className="cat-info">
                  <h3>{cat.name}</h3>
                  <p>Age: {cat.age} month/s</p>
                  <p>Breed Type: {cat.breedClass}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
