import { useEffect, useState } from 'react';

const featuredCats = [
  { name: 'Whiskers', age: '2', breed: 'Sphynx' },
  { name: 'Mittens', age: '2', breed: 'Peterbald' },
  { name: 'Shadow', age: '1', breed: 'Birman' },
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
      <h2 style={{ 
          color: '#4682b4', 
          fontWeight: 'bold', 
          fontSize: '2.5rem', 
          marginBottom: '1.5rem'
        }}>
        Find your New Best Friend and Adopt a Pet with Purrfect Adoption !!
      </h2>
      
      <p>
        Welcome to Purrfect Adoption, where every cat deserves a loving home!
      </p>
      <p>
        We are dedicated to rescuing and rehoming cats of all breeds, from adorable kittens to majestic adults.
      </p>
      <p>
        Our mission is to connect these loving animals with their forever families. Let us help you find the perfect companion!
      </p>
    </section>


      <section className="mt-5">
        <h2>Featured Cats</h2>
        <div className="cats-container" id="cats-container">
          {cats.map((cat, i) => (
            <div key={i}>
              <div className="cat-card">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="img-fluid mb-2 cat-image"
                />
                <div className="cat-info">
                  <h3 className="h5 mb-1">{cat.name}</h3>
                  <p className="mb-0">Age: {cat.age}</p>
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
