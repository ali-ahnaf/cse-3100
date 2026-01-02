import { useEffect, useState } from "react";

const availableCats = [
  { name: "Whiskers", age: "2", breed: "Siamese" },
  { name: "Mittens", age: "2", breed: "Persian" },
  { name: "Shadow", age: "1", breed: "Bengal" },
  { name: "Pumpkin", age: "3", breed: "Abyssinian" },
  { name: "Luna", age: "4", breed: "Sphynx" },
  { name: "Simba", age: "2", breed: "Peterbald" },
  { name: "Tiger", age: "3", breed: "Birman" },
  { name: "Bella", age: "1", breed: "Siamese" },
];

const allBreeds = [
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
          image: responses[index][0].url,
        }));

        setCats(catsWithImages);
        setFilteredCats(catsWithImages);
      } catch (error) {
        console.error("Error fetching cat images:", error);
      }
    };

    fetchCatImages();
  }, []);

  const handleSearch = () => {
    let result = cats;

    if (selectedBreed !== "Select breed") {
      result = result.filter((cat) => cat.breed === selectedBreed);
    }

    if (searchName.trim() !== "") {
      result = result.filter((cat) =>
        cat.name.toLowerCase().includes(searchName.toLowerCase())
      );
    }

    setFilteredCats(result);
  };

  return (
    <section className="mt-4 available-cats-page">
      {/* Header with title and filters side by side */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "1rem",
        }}
      >
        {/* Title on left */}
        <div>
          <h2>Available Cats</h2>
          <p>Meet our adorable cats looking for their forever home!</p>
        </div>

        {/* Filters on right */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            gap: "1rem",
            marginTop: "0.5rem",
          }}
        >
          <select
            className="form-select"
            value={selectedBreed}
            onChange={(e) => setSelectedBreed(e.target.value)}
            style={{ minWidth: "150px" }}
          >
            {allBreeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>

          <input
            type="text"
            className="form-control"
            placeholder="search by name"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
            style={{
              minWidth: "150px",
              borderRadius: "20px",
              border: "1px solid black",
              paddingLeft: "15px", // Added for text visibility
              paddingRight: "15px",
            }}
          />

          <button
            className="btn"
            onClick={handleSearch}
            style={{
              backgroundColor: "#aadaff",
              border: "1px solid black",
              borderRadius: "20px",
              padding: "8px 20px",
            }}
          >
            search
          </button>
        </div>
      </div>

      {/* Divider line */}
      <hr
        style={{
          borderTop: "1px solid black",
          margin: "1.5rem 0 2rem 0",
        }}
      />

      {/* Cats Grid - UNCHANGED */}
      <div className="row g-4" id="cats-container">
        {filteredCats.map((cat, i) => (
          <div key={i} className="col-md-3">
            <div className="cat-card">
              <img
                src={cat.image}
                alt={cat.name}
                className="img-fluid"
                style={{
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
  );
}
