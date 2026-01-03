import { useEffect, useState } from "react";

const availableCats = [
  { name: "Whiskers", age: "2", breed: "Siamese" },
  { name: "Mittens", age: "2", breed: "Persian" },
  { name: "Shadow", age: "1", breed: "Maine Coon" },
  { name: "Pumpkin", age: "3", breed: "British Shorthair" },
  { name: "Luna", age: "4", breed: "Sphynx" },
  { name: "Simba", age: "2", breed: "Bengal" },
  { name: "Nala", age: "3", breed: "Peterbald" },
  { name: "Cleo", age: "1", breed: "Siamese" },
  { name: "Oscar", age: "5", breed: "Persian" },
  { name: "Bella", age: "2", breed: "Maine Coon" },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("All");
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    // Fetch cat images from an API endpoint and assign it to the featuredCats list
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
      } catch (error) {
        console.error("Error fetching cat images:", error);
      }
    };

    fetchCatImages();
  }, []);

  const breeds = ["All", ...new Set(availableCats.map((cat) => cat.breed))];
  const filteredCats = cats.filter((cat) => {
    const matchesBreed = selectedBreed === "All" || cat.breed === selectedBreed;

    const matchesName = cat.name
      .toLowerCase()
      .includes(searchName.toLowerCase());

    return matchesBreed && matchesName;
  });

  return (
    <section className="text-center mt-4">
      <h2>Available Cats</h2>
      <p>Meet our adorable cats looking for their forever home!</p>

      <div className="row justify-content-center mb-4">
        <div className="col-md-3 mb-2">
          <select
            className="form-select"
            value={selectedBreed}
            onChange={(e) => setSelectedBreed(e.target.value)}
          >
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-3 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Search by cat name"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
          />
        </div>
      </div>

      <div className="mt-2 row g-4 cats-container" id="cats-container">
        {filteredCats.map((cat, i) => (
          <div key={i} className="col-sm-6 col-md-4">
            <div className="cat-card">
              <img
                src={cat.image}
                alt={cat.name}
                className="img-fluid mb-2 cat-card img"
              />
              <div className="cat-info">
                <h3 className="h5 mb-1">{cat.name}</h3>
                <p className="mb-0">Age: {cat.age}</p>
                <p className="mb-0">Breed: {cat.breed}</p>
              </div>
            </div>
          </div>
        ))}
        {filteredCats.length === 0 && (
          <p className="text-muted mt-3">No cats match your filters.</p>
        )}
      </div>
    </section>
  );
}
