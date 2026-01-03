import { useEffect, useState } from 'react';

const featuredCats = [
  { name: 'Whiskers', age: '2' },
  { name: 'Mittens', age: '2' },
  { name: 'Shadow', age: '1' },
];

export default function Home() {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(
          featuredCats.map(() =>
            fetch('https://api.thecatapi.com/v1/images/search').then((res) =>
              res.json()
            )
          )
        );

        if (mounted) {
          const catsWithImages = featuredCats.map((cat, index) => ({
            ...cat,
            image: responses[index][0].url,
          }));

          setCats(catsWithImages);
          setLoading(false);
        }
      } catch (error) {
        if (mounted) {
          console.error('Error fetching cat images:', error);
          setLoading(false);
        }
      }
    };

    fetchCatImages();

    return () => {
      mounted = false;
    };
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
        
        {loading ? (
          <p>Loading featured cats...</p>
        ) : (
          <div className="mt-2 row g-4" id="cats-container">
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
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}