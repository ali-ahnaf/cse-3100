import { useEffect, useState } from "react";

const availableCats = [
  { name: "Whiskers", age: "2", breed: "Siamese" },
  { name: "Mittens", age: "2", breed: "Persian" },
  { name: "Shadow", age: "1", breed: "Bengal" },
  { name: "Pumpkin", age: "3", breed: "Abyssinian" },
  { name: "Luna", age: "4", breed: "Birman" },
  { name: "Simba", age: "2", breed: "Sphynx" },

  { name: "Tiger", age: "1", breed: "Peterbald" },
  { name: "Cleo", age: "3", breed: "Siamese" },
  { name: "Oreo", age: "2", breed: "Persian" },
  { name: "Mochi", age: "2", breed: "Bengal" },
  { name: "Peanut", age: "1", breed: "Abyssinian" },
  { name: "Marshmallow", age: "2", breed: "Birman" },
];
const ALL_BREEDS = [
  "Select breed",
  "Sphynx",
  "Peterbald",
  "Birman",
  "Abyssinian",
  "Persian",
  "Bengal",
  "Siamese",
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [filteredCats, setFilteredCats] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("Select breed");
  const [searchName, setSearchName] = useState("");

  // Fetch cat images and combine with data
  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(
          availableCats.map(() =>
            fetch("https://api.thecatapi.com/v1/images/search").then((res) =>
              res.json()
            )
          )
        );

        const catsWithImages = availableCats.map((cat, index) => ({
          ...cat,
          image: responses[index][0]?.url || "https://placekitten.com/250/200",
        }));

        setCats(catsWithImages);
        setFilteredCats(catsWithImages);
      } catch (error) {
        console.error("Error fetching cat images:", error);
      }
    };

    fetchCatImages();
  }, []);

  // Refactored search method
  const handleSearch = () => {
    const result = cats.filter((cat) => {
      const matchesBreed =
        selectedBreed === "Select breed" || cat.breed === selectedBreed;
      const matchesName =
        searchName.trim() === "" ||
        cat.name.toLowerCase().includes(searchName.toLowerCase());
      return matchesBreed && matchesName;
    });

    setFilteredCats(result);
  };

  return (
    <div style={styles.container}>
      {/* Header + Filters */}
      <div style={styles.header}>
        <h2 style={styles.title}>Available Cats</h2>
        <div style={styles.filters}>
          <select
            style={styles.select}
            value={selectedBreed}
            onChange={(e) => setSelectedBreed(e.target.value)}
          >
            {ALL_BREEDS.map((breed, idx) => (
              <option key={idx} value={breed}>
                {breed}
              </option>
            ))}
          </select>

          <input
            type="text"
            placeholder="Search by name"
            style={styles.input}
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />

          <button style={styles.button} onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>

      {/* Cats Grid */}
      {filteredCats.length > 0 ? (
        <div style={styles.grid}>
          {filteredCats.map((cat, idx) => (
            <div key={idx} style={styles.card}>
              <img
                src={cat.image}
                alt={cat.name}
                style={styles.image}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://placekitten.com/250/200";
                }}
              />
              <div style={styles.info}>
                <h3 style={styles.name}>{cat.name}</h3>
                <p style={styles.detail}>Age: {cat.age} years</p>
                <p style={styles.detail}>Breed: {cat.breed}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p style={styles.noResults}>No cats found matching your criteria.</p>
      )}
    </div>
  );
}

// Updated UI styles
const styles = {
  container: { padding: "20px" },
  header: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "30px",
    gap: "15px",
  },
  title: { fontSize: "28px", fontWeight: "bold", margin: 0, color: "#222" },
  filters: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    alignItems: "center",
  },
  select: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #0066cc",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #0066cc",
    minWidth: "180px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    fontWeight: "bold",
    backgroundColor: "#0066cc",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  grid: {
    display: "grid",
    gap: "25px",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
  },
  card: {
    border: "1px solid #ddd",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  },
  image: { width: "100%", height: "200px", objectFit: "cover" },
  info: { padding: "15px" },
  name: {
    margin: "0 0 8px",
    fontSize: "18px",
    fontWeight: "bold",
    color: "#333",
  },
  detail: { margin: "0 0 4px", fontSize: "14px", color: "#555" },
  noResults: {
    textAlign: "center",
    fontSize: "18px",
    color: "#888",
    marginTop: "40px",
  },
};
