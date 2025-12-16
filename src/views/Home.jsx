import { useEffect, useState } from 'react';

const featuredCats = [
  { name: 'Whiskers', age: '2', breed: 'Persian' },
  { name: 'Mittens', age: '2', breed: 'Bengal' },
  { name: 'Shadow', age: '1', breed: 'Siamese' },
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
          id: responses[index][0].id,
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
          Find your new best friend. We have a variety of cats of all ages and
          personalities looking for their forever homes.
        </p>
      </section>

      <section className="mt-5">
        <h2>Featured cats</h2>
        <div className="mt-2" id="cats-container">
          {cats.map((cat) => (
            <div
              key={cat.id}
              className="cat-card"
              style={{ backgroundImage: `url(${cat.image})` }}
            >
              <div className="cat-info">
                <h3 className="h5 mb-1">{cat.name}</h3>
                <p className="mb-0">Breed: {cat.breed}</p>
                <p className="mb-0">Age: {cat.age}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
