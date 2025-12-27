import { useEffect, useState } from "react";

export default function Home() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(
          new Array(6).fill(0).map(() =>
            fetch("https://api.thecatapi.com/v1/images/search").then((res) =>
              res.json()
            )
          )
        );

        const catsWithImages = responses.map((r, idx) => ({
          name: `Featured ${idx + 1}`,
          age: Math.floor(Math.random() * 5) + 1,
          image: r[0]?.url || "",
        }));

        setCats(catsWithImages);
      } catch (err) {
        console.error("Error fetching featured cats:", err);
      }
    };

    fetchCatImages();
  }, []);

  return (
    <>
      <section className="text-center mt-4">
        <h1>Welcome to Purrfect Adoption</h1>
        <p>Find a furry friend and give them a loving home.</p>
      </section>

      <section className="mt-5">
        <h2>Featured cats</h2>
        <div className="container">
          <div className="row g-4">
            {cats.map((cat, i) => (
              <div key={i} className="col-md-4 col-sm-6">
                <div className="cat-card">
                  <div className="cat-image">
                    {cat.image ? (
                      <img src={cat.image} alt={cat.name} />
                    ) : (
                      <div style={{ height: 220, background: "#f1f1f1" }} />
                    )}
                  </div>
                  <div className="cat-info">
                    <h3 className="h6 mb-1">{cat.name}</h3>
                    <p className="mb-0">Age: {cat.age}</p>
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
