import React, { useMemo, useState } from "react";
import CatCard from "./CatCard";

const initialCats = [
  { id: 1, name: "Micky Mouse", age: 2, breed: "Sphynx" },
  { id: 2, name: "Bella", age: 1, breed: "Persian" },
  { id: 3, name: "Simba", age: 3, breed: "Bengal" },
  { id: 4, name: "Luna", age: 4, breed: "Siamese" },
  { id: 5, name: "Oscar", age: 2, breed: "Birman" },
  { id: 6, name: "Cleo", age: 1, breed: "Abyssinian" }
];

export default function AvailableCats() {
  const [cats] = useState(initialCats);
  const [breedFilter, setBreedFilter] = useState("");
  const [searchText, setSearchText] = useState("");

  const breeds = useMemo(() => {
    const b = Array.from(new Set(cats.map((c) => c.breed))).sort();
    return ["All", ...b];
  }, [cats]);

  const filteredCats = useMemo(() => {
    return cats.filter((c) => {
      if (breedFilter && breedFilter !== "All" && c.breed !== breedFilter) return false;
      if (searchText && !c.name.toLowerCase().includes(searchText.toLowerCase())) return false;
      return true;
    });
  }, [cats, breedFilter, searchText]);

  return (
    <section>
      <h2>Available cats</h2>

      <div className="filters-row">
        <select
          value={breedFilter}
          onChange={(e) => setBreedFilter(e.target.value)}
          aria-label="Filter by breed"
        >
          {breeds.map((b) => (
            <option key={b} value={b === "All" ? "" : b}>
              {b}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Search by name"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <button onClick={() => { setBreedFilter(""); setSearchText(""); }}>
          Clear
        </button>
      </div>

      <div className="cat-grid">
        {filteredCats.map((cat) => (
          <CatCard key={cat.id} cat={cat} />
        ))}
      </div>
      {filteredCats.length === 0 && <p>No cats match your search.</p>}
    </section>
  );
}
