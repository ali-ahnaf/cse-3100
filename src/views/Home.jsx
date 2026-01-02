import { useEffect, useState } from "react";

const featuredCats = [
  { name: "Whiskers", age: "2", breed: "Siamese" },
  { name: "Mittens", age: "2", breed: "Persian" },
  { name: "Shadow", age: "1", breed: "Bengal" },
  { name: "Luna", age: "4", breed: "Sphynx" },
];

export default function Home() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(
          featuredCats.map(() =>
            fetch("https://api.thecatapi.com/v1/images/search").then((res) =>
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
        console.error("Error fetching cat images:", error);
      }
    };

    fetchCatImages();
  }, []);

  return (
    <>
      <section
        style={{
          textAlign: "center",
          marginTop: "3rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ maxWidth: "800px" }}>
          <h2>Welcome to Purrfect Adoption</h2>
          <p style={{ marginTop: "1.5rem" }}>
            Find your perfect feline companion at Purrfect Adoption! We connect
            loving families with adorable cats in need of forever homes. Browse
            our available cats, learn about different breeds, and discover how
            you can make a difference in a cat's life today.
          </p>
        </div>
      </section>

      <section style={{ marginTop: "8rem" }} className="home-page">
        <h2>Featured Cats</h2>
        <div className="row g-4" id="cats-container">
          {cats.map((cat, i) => (
            <div key={i} className="col-md-3">
              <div className="cat-card">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="img-fluid mb-2"
                  style={{
                    borderRadius: "8px",
                    height: "200px",
                    objectFit: "cover",
                  }}
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
