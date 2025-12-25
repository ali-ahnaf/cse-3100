export default function Home() {
  const featuredCats = [
    { name: 'Whiskers', breed: 'Siamese', date: 'Apr 3' },
    { name: 'Mittens', breed: 'Persian', date: 'Apr 4' },
    { name: 'Shadow', breed: 'Bengal', date: 'Apr 2' },
    { name: 'Luna', breed: 'Birman', date: 'Apr 2' },
  ];

  return (
    <>
      <section className="hero">
        <h1>Welcome to Purrfect Adoption</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lue Lorem ipsum 
          dolor sit amet, consectetur adipiscing elit. Maecenas lue Lorem ipsum dolor sit 
          amet, consectetur adipiscing elit. Maecenas lue
        </p>
      </section>

      <section>
        <h2>Featured Cats</h2>
        <div className="featured-cats">
          {featuredCats.map((cat, index) => (
            <div key={index} className="cat-card">
              <h3>{cat.name}</h3>
              <p>Breed: {cat.breed}</p>
              <p>Available: {cat.date}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}