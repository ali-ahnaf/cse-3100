import { useEffect, useState } from "react";

const featuredCats = [
  { name: "Whiskers", age: 2, breed: "Siamese" },
  { name: "Mittens", age: 2, breed: "Persian" },
  { name: "Shadow", age: 1, breed: "Bengal" },
  { name: "Pumpkin", age: 3, breed: "Birman" },
  { name: "Luna", age: 4, breed: "Sphynx" },
  { name: "Simba", age: 2, breed: "Abyssinian" }
];

export default function Home() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    Promise.all(
      featuredCats.map(() =>
        fetch("https://api.thecatapi.com/v1/images/search").then(res => res.json())
      )
    ).then(responses => {
      setCats(
        featuredCats.map((cat, i) => ({
          ...cat,
          image: responses[i][0].url
        }))
      );
    });
  }, []);

  return (
    <>
      {/* Centered Hero Section */}
      <div className="home-hero">
        <h2>Welcome to Purrfect Adoption</h2>
        <p>Find your forever feline friend 🐾</p>
      </div>

      {/* Featured Cats */}
      <h3 style={{ marginBottom: "20px" }}>Featured Cats</h3>

      <div className="cats-grid">
        {cats.map((cat, i) => (
          <div key={i} className="cat-card">
            <img src={cat.image} />
            <h4>{cat.name}</h4>
            <p>Age: {cat.age}</p>
            <p>{cat.breed}</p>
          </div>
        ))}
      </div>
    </>
  );
}
