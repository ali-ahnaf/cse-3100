import { useEffect, useState } from 'react';

const featuredCats = [
  {
    name: 'Whiskers',
    age: '2',
    breed: 'Siamese',
    location: 'Shelter A',
    description: 'Playful and affectionate. Good with kids.',
    image: 'https://cdn2.thecatapi.com/images/9j7.jpg',
  },
  {
    name: 'Mittens',
    age: '2',
    breed: 'Persian',
    location: 'Foster Home',
    description: 'Calm lap cat who enjoys naps and brushing.',
    image: 'https://cdn2.thecatapi.com/images/ae.jpg',
  },
  {
    name: 'Shadow',
    age: '1',
    breed: 'Abyssinian',
    location: 'Shelter B',
    description: 'Curious and energetic — loves to climb.',
    image: 'https://cdn2.thecatapi.com/images/bb.jpg',
  },
  {
    name: 'Pumpkin',
    age: '3',
    breed: 'Bengal',
    location: 'Shelter A',
    description: 'Active and playful; needs space to run.',
    image: 'https://cdn2.thecatapi.com/images/cc.jpg',
  },
  {
    name: 'Luna',
    age: '4',
    breed: 'Birman',
    location: 'Foster Home',
    description: 'Gentle and social; great with other pets.',
    image: 'https://cdn2.thecatapi.com/images/dd.jpg',
  },
  {
    name: 'Simba',
    age: '2',
    breed: 'Sphynx',
    location: 'Shelter C',
    description: 'Affectionate and attention-seeking.',
    image: 'https://cdn2.thecatapi.com/images/ee.jpg',
  },
];

export default function Home() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    setCats(featuredCats);
  }, []);

  return (
    <>
      <section className="home-hero text-center mt-4">
        <div className="container">
          <h2>Welcome to Purrfect Adoption</h2>
          <p className="lead">
            Find your perfect feline companion and give them a loving home.
          </p>
        </div>
      </section>

      <section className="featured-section mt-5">
        <div className="container">
          <h2>Featured Cats</h2>

          <div className="cats-grid mt-3">
            {cats.map((cat, i) => (
              <div key={i} className="cat-card">
                <div
                  className="cat-image"
                  style={{ backgroundImage: `url(${cat.image})` }}
                />
                <div className="cat-info">
                  <h3>{cat.name}</h3>
                  <p>
                    <strong>Age:</strong> {cat.age} &nbsp;•&nbsp;
                    <strong>Breed:</strong> {cat.breed}
                  </p>
                  <p className="cat-desc">{cat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
