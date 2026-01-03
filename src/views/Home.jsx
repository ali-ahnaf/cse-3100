import { useEffect, useState } from "react";

const featuredCats = [
  { name: "Whiskers", age: "2" },
  { name: "Mittens", age: "2" },
  { name: "Shadow", age: "1" },
];

export default function Home() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    let isMounted = true;
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(
          featuredCats.map(async () => {
            const res = await fetch(
              "https://api.thecatapi.com/v1/images/search"
            );

            if (!res.ok) {
              throw new Error("Failed to fetch cat image");
            }

            return res.json();
          })
        );

        const catsWithImages = featuredCats.map((cat, index) => ({
          ...cat,
          image: responses[index][0].url,
        }));

        setCats(catsWithImages);

        if (isMounted) {
          setCats(catsWithImages);
        }
      } catch (error) {
        console.error("Error fetching cat images:", error);
      }
    };

    fetchCatImages();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <section className="text-center mt-4">
        <h2>Welcome to Purrfect Adoption</h2>
        <p>
           We rescue, rehabilitate and rehome cats. Our mission is to match every cat
          with a loving home and provide community education about responsible pet ownership.
        </p>
      </section>

      <section className="mt-5">
        <h2>Featured cats</h2>
        <div className="mt-2 row g-4" id="cats-container"></div>
        <div className="mt-2 row g-4" id="cats-container_123">
          {cats.map((cat, i) => (
            <div key={i} className="col-md-4">
              <div className="cat-card">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="img-fluid mb-2 cat-card img"
                />
                <div className="cat-info">
                  <h3 className="h5 mb-1">{cat.name}</h3>
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
