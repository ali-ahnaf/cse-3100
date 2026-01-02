import { useEffect, useState } from 'react';

const featuredCats = [
  { name: 'Whiskers', age: '2' },
  { name: 'Mittens', age: '2' },
  { name: 'Shadow', age: '1' },
  { name: 'Pumpkin', age: '3 months' },
  { name: 'Luna', age: '4' },
  { name: 'Simba', age: '2 months' },
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

        setCats((prevCats) => [...prevCats, ...catsWithImages]);

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
  }, []);

  return (
    <>
      <section className="text-center mt-4">
        <h2>Welcome to Purrfect Adoption</h2>
        <p className= "comic-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
        </p>
      </section>

      <section className="mt-5">
        <h2 className="section-title-left">Featured cats</h2>

        <div className="row g-4 mt-2">
          {cats.map((cat, i) => (
            <div key={i} className="col-12 col-sm-6 col-lg-3">
              <div className="card h-100">
                <img
                  src={cat.image}
                  className="card-img-top"
                  alt={cat.name}
                />

                <div className="card cat-info">
                  <div className="card-body p-2">
                    <h6 className="card-title mb-1">{cat.name}</h6>
                    <p className="card-text mb-0">Age: {cat.age}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </>
  );
}
