import { useEffect, useState } from 'react';

const featuredCats = [
  { name: 'Whiskers', age: '2 years', breed: 'Persian' },
  { name: 'Mittens', age: '3 years', breed: 'Siamese' },
  { name: 'Shadow', age: '1 year', breed: 'Bengal' },
  { name: 'Luna', age: '4 years', breed: 'Abyssinian' },
  { name: 'Simba', age: '2 years', breed: 'Birman' },
  { name: 'Oliver', age: '5 years', breed: 'Sphynx' },
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
      <section className="text-center">
        <h2>Welcome to Purrfect Adoption</h2>
        <p>
          At Purrfect Adoption, we connect loving families with adorable cats in need of forever homes.
          Each cat is carefully cared for, vaccinated, and ready to bring joy to your life.
          Browse our featured cats or visit our adoption center to meet your new best friend!
        </p>
      </section>

      <section className="mt-5">
        <h2>Featured cats</h2>
        <div className="cats-container">
          {cats.map((cat, i) => (
            <div className="cat-card" key={i}>
              <img
                src={cat.image}
                alt={cat.name}
              />
              <div className="cat-info">
                <h3>{cat.name}</h3>
                <p>Age: {cat.age}</p>
                <p>Breed: {cat.breed}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}