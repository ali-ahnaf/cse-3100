import { useEffect, useState } from "react";
import loadingPaw from "./loading.png"; 

const featuredCats = [
  { name: "Whiskers", breed: "Sphynx", age: "2" },
  { name: "Mittens", breed: "Siamese", age: "2" },
  { name: "Shadow", breed: "Peterbald", age: "1" },
  { name: "Luna", breed: "Birman", age: "3" },
  { name: "Oliver", breed: "Abyssinian", age: "2" },
 
];

export default function Home() {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const responses = await fetch(
          "https://api.thecatapi.com/v1/images/search?limit=10"
        );
        const catImages = await responses.json();

        const catsWithImages = featuredCats.map((cat, index) => ({
          ...cat,
          image: catImages[index]?.url,
        }));

        setCats(catsWithImages);
        setLoading(false);

        //  if (cats.length > 10) {
        //   alert(
        //     "Hey, you should quickly fix this infinite state loop before your PC crashes! Stop the App, Refresh the browser and fix the bug!! "
        //    );
        //  }
      } catch (error) {
        console.error("Error fetching cat images:", error);
      }
    };

    fetchCatImages();
  }, []); //Added dependency array to stop the infinite render

  return (
    <div className="container">
      <section className="text-center mt-4">
        <h2 className="fw-bold">Welcome to Purrfect Adoption</h2>
        <p className="p-4">
          Welcome to <b>Purrfect Adoptions!</b> We're dedicated to finding
          loving homes for cats in need. Every cat deserves a second chance at
          happiness, and we're here to make that connection between you and your
          future feline friend. Browse our available cats, learn about the
          adoption process, and discover how you can make a difference in a
          cat's life today.
        </p>
      </section>

      <section className="mt-3">
        <h2 className="fw-bold">Featured cats</h2>
        {loading ? (
          <div className="loading-container">
            <div className="paw-loader">
              <div className="paw">
                <img src={loadingPaw} alt="loading cat paw" style={{ width: '100px' }} /> 
              </div>
            </div>
            <p className="mt-3 text-muted fw-bold">Loading purrfect cats...</p>
          </div>
        ) : (
          <div
            className="mt-2"
            id="cats-container"
            style={{ justifyContent: "space-between" }}
          >
            {cats.map((cat, i) => (
              <div key={i} className="cat-card my-2">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="img-fluid"
                  style={{
                    objectFit: "cover",
                  }}
                />
                <div className="cat-info py-2">
                  <h3 className="mb-1">{cat.name}</h3>
                  <p className="mb-0">Breed: {cat.breed}</p>
                  <p className="mb-0">Age: {cat.age}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
