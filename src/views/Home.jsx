import { useEffect, useState } from 'react';

const featuredCats = [
  { name: 'Whiskers', age: '2', breed: 'Bengal' },
  { name: 'Mittens', age: '2', breed: 'Persian' },
  { name: 'Shadow', age: '1', breed: 'Siamese' },
];

export default function Home() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const responses = await Promise.all(
          featuredCats.map(() =>
            fetch('https://api.thecatapi.com/v1/images/search').then(res =>
              res.json()
            )
          )
        );

        /* FIX 1:
           Replace state instead of appending.
           Appending causes infinite growth */
        setCats(
          featuredCats.map((cat, i) => ({
            ...cat,
            image: responses[i][0].url,
          }))
        );
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchImages();

    /* FIX 2:
       Empty dependency array ensures this runs
       only once on component mount */
  }, []);

  return (
    <>
      <section className="text-center mt-4">
        <h2>Welcome to Purrfect Adoption</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
        </p>
      </section>

      <section className="mt-5">
        <h2>Featured Cats</h2>

        {/* IMPORTANT:
            Using cats-container so CSS grid works */}
        <div className="cats-container mt-2 row g-4">
          {cats.map((cat, i) => (
            <div key={i} className="col-md-4">
              <div className="cat-card">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="img-fluid mb-2"
                  style={{
                    borderRadius: '8px',
                    height: '200px',
                    objectFit: 'cover',
                  }}
                />
                <div className="cat-info">
                  <h3 className="h5 mb-1">{cat.name}</h3>
                  <p className="mb-0">Age: {cat.age}</p>

                  {/* Q3 requirement: Added breed information */}
                  <p className="mb-0">Breed: {cat.breed}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}