import { useEffect, useState } from "react";

const catsData = [
  { name: "Whiskers", age: 2 },
  { name: "Mittens", age: 1 },
  { name: "Shadow", age: 3 },
  { name: "Pumpkin", age: 2 },
  { name: "Luna", age: 1 },
  { name: "Oliver", age: 4 },
  { name: "Bella", age: 2 },
  { name: "Leo", age: 3 },
  { name: "Milo", age: 1 },
  { name: "Simba", age: 2 },
  { name: "Nala", age: 3 },
  { name: "Coco", age: 1 }
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    Promise.all(
      catsData.map(() =>
        fetch("https://api.thecatapi.com/v1/images/search")
          .then(res => res.json())
      )
    ).then(images => {
      setCats(
        catsData.map((cat, i) => ({
          ...cat,
          image: images[i][0].url,
        }))
      );
    });
  }, []);

  const filteredCats = cats.filter(cat =>
    cat.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* Header Row */}
      <div className="cats-header">
        <h2>Available Cats</h2>

        <div className="filters">
          <select>
            <option>Select Breed</option>
            <option>Persian</option>
            <option>Bengal</option>
            <option>British Shorthair</option>
            <option>Siamese</option>
          </select>

          <input
            type="text"
            placeholder="Search by name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button>Search</button>
        </div>
      </div>

      <hr />

      {/* Cats Grid */}
      <div className="cat-grid">
        {filteredCats.map((cat, i) => (
          <div key={i} className="cat-card">
            <img src={cat.image} alt={cat.name} />
            <div className="cat-info">
              <strong>{cat.name}</strong>
              <span>Age: {cat.age}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
