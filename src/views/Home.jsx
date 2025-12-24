import { useEffect, useState } from 'react';

const featuredCats = [
  { name: 'Whiskers', breed: 'Sphynx' , age: '2' },
  { name: 'Mittens', breed: 'Siamese' , age: '2' },
  { name: 'Shadow', breed: 'Peterbald' , age: '1' },
  { name: 'Luna', breed: 'Birman' , age: '3' },
  { name: 'Oliver', breed: 'Abyssinian' , age: '2' },
  { name: 'Bella', breed: 'Birman' , age: '1' },
  { name: 'Simba', breed: 'Persian' , age: '4' },
  { name: 'Chloe', breed: 'Bengal' , age: '2' },
  { name: 'Leo', breed: 'Persian' , age: '3' },
  { name: 'Daisy', breed: 'Siamese' , age: '1' },
];

export default function Home() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(
          featuredCats.map(() =>
            fetch('https://api.thecatapi.com/v1/images/search?limit=10').then((res) =>
              res.json()
            )
          )
        );

        const catsWithImages = featuredCats.map((cat, index) => ({
          ...cat,
          image: responses[index][0].url,
        }));

        const limitCats = catsWithImages.slice(0, 10);
        setCats(limitCats);

        if (cats.length > 10) {
          alert(
            'Hey, you should quickly fix this infinite state loop before your PC crashes! Stop the App, Refresh the browser and fix the bug!! '
          );
        }
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  }, []); //Added dependency array to stop the infinite render

  return (
    <>
      <section className="text-center mt-4">
        <h2>Welcome to Purrfect Adoption</h2>
        <p className='p-4 mx-auto text-center' style={{width: '70%'}}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, unde eius? Quae deleniti tenetur voluptatum sint quibusdam nesciunt. Lorem ipsum dolor sit amet.  Lorem ipsum dolor sit amet. Tempora eveniet esse nam voluptate modi nesciunt assumenda obcaecati doloribus labore ratione! Fugit iusto voluptatem repellat ratione quaerat? Maxime voluptatibus recusandae ad ipsa, quibusdam veritatis.
        </p>
      </section>

      <section className="m-4">
        <h2>Featured cats</h2>
        <div className="mt-1 row g-5 " id="cats-container">
          {cats.map((cat, i) => (
            <div key={i} className="col-md-4 col-lg-2">
              <div className="cat-card">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="img-fluid"
                  style={{
                    objectFit: 'cover',
                  }}
                />
                <div className="cat-info py-2">
                  <h3 className="mb-1">{cat.name}</h3>
                  <p className="mb-0">Breed: {cat.breed}</p>
                  <p className="mb-0">Age: {cat.age}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
