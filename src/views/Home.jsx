import { useEffect, useState } from 'react';

const featuredCats = [
  { name: 'Whiskers', age: '2', breed: 'Siamese', location: 'Shelter A', description: 'Playful and affectionate. Good with kids.' },
  { name: 'Mittens', age: '2', breed: 'Persian', location: 'Foster Home', description: 'Calm lap cat who enjoys naps and brushing.' },
  { name: 'Shadow', age: '1', breed: 'Abyssinian', location: 'Shelter B', description: 'Curious and energetic — loves to climb.' },
  { name: 'Pumpkin', age: '3', breed: 'Bengal', location: 'Shelter A', description: 'Active and playful; needs space to run.' },
  { name: 'Luna', age: '4', breed: 'Birman', location: 'Foster Home', description: 'Gentle and social; great with other pets.' },
  { name: 'Simba', age: '2', breed: 'Sphinx', location: 'Shelter C', description: 'Affectionate and attention-seeking.' },
  { name: 'Oreo', age: '1', breed: 'Domestic Shorthair', location: 'Shelter A', description: 'Playful kitten who loves toys.' },
  { name: 'Bella', age: '5', breed: 'Ragdoll', location: 'Foster Home', description: 'Calm and cuddly — perfect indoor companion.' },
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
      <section className="home-hero text-center mt-4">
        <div className="container">
          <h2>Welcome to Purrfect Adoption</h2>
          <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
          </p>
        </div>
      </section>

      <section className="featured-section mt-5">
        <div className="container">
          <h2>Featured cats</h2>

          <div className="cats-grid mt-3" id="featured-cats">
          {cats.map((cat, i) => (
            <div key={i}>
              <div className="cat-card">
                <div
                  className="cat-image"
                  role="img"
                  aria-label={cat.name}
                  style={{ backgroundImage: `url(${cat.image})` }}
                />
                <div className="cat-info">
                  <h3>{cat.name}</h3>
                  <p>
                    <strong>Age:</strong> {cat.age} &nbsp;•&nbsp; <strong>Breed:</strong> {cat.breed}
                  </p>
                  <p className="cat-desc">{cat.description}</p>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </section>
    </>
  );
}
