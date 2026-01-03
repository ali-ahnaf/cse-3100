import { useEffect, useState } from "react";

const catList = [
  { name: "Whiskers", age: 2, breed: "Siamese" },
  { name: "Mittens", age: 2, breed: "Persian" },
  { name: "Shadow", age: 1, breed: "Bengal" },
  { name: "Pumpkin", age: 3, breed: "Birman" },
  { name: "Luna", age: 4, breed: "Sphynx" },
  { name: "Simba", age: 2, breed: "Abyssinian" }
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [search, setSearch] = useState("");
  const [breed, setBreed] = useState("All");

  useEffect(() => {
    Promise.all(
      catList.map(() =>
        fetch("https://api.thecatapi.com/v1/images/search")
          .then(res => res.json())
      )
    ).then(responses => {
      setCats(
        catList.map((cat, i) => ({
          ...cat,
          image: responses[i][0].url
        }))
      );
    });
  }, []);

  const filtered = cats.filter(cat =>
    cat.name.toLowerCase().includes(search.toLowerCase()) &&
    (breed === "All" || cat.breed === breed)
  );

  return (
    <>
      <h2>Available Cats</h2>

      <div className="filters">
        <input
          placeholder="Search..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        <select value={breed} onChange={e => setBreed(e.target.value)}>
          <option>All</option>
          <option>Siamese</option>
          <option>Persian</option>
          <option>Bengal</option>
          <option>Birman</option>
          <option>Sphynx</option>
          <option>Abyssinian</option>
        </select>
      </div>

      <div className="cats-grid">
        {filtered.map((cat, i) => (
          <div className="cat-card" key={i}>
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
