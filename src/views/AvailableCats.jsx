import { useEffect, useState } from "react";

const availableCats = [
  { name: "Whiskers", breed: "Sphynx", age: "2" },
  { name: "Mittens", breed: "Siamese", age: "2" },
  { name: "Shadow", breed: "Peterbald", age: "1" },
  { name: "Luna", breed: "Birman", age: "3" },
  { name: "Oliver", breed: "Abyssinian", age: "2" },
  { name: "Bella", breed: "Birman", age: "1" },
  { name: "Simba", breed: "Persian", age: "4" },
  { name: "Chloe", breed: "Bengal", age: "2" },
  { name: "Leo", breed: "Persian", age: "3" },
  { name: "Daisy", breed: "Siamese", age: "1" },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredCats, setFilteredCats] = useState([]);
  const [searchedName, setSearchedName] = useState("");
  const [selectedBreed, setSelectedBreed] = useState("");

  useEffect(() => {
    // Fetch cat images from an API endpoint and assign it to the featuredCats list
    const fetchCatImages = async () => {
      try {
        const responses = await fetch(
          "https://api.thecatapi.com/v1/images/search?limit=10"
        );
        const catImages = await responses.json();

        const catsWithImages = availableCats.map((cat, index) => ({
          ...cat,
          image: catImages[index]?.url,
        }));

        setCats(catsWithImages);
        setFilteredCats(catsWithImages);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching cat images:", error);
      }
    };

    fetchCatImages();
  }, []);

  const handleFilter = () => {
    let filtered = cats;

    //Search filter (by name)
    if (searchedName) {
      filtered = filtered.filter((cat) =>
        cat.name.toLowerCase().includes(searchedName.toLocaleLowerCase())
      );
    }
    //Breed filter (by breed)
    if (selectedBreed) {
      filtered = filtered.filter((cat) => cat.breed === selectedBreed);
    }

    setFilteredCats(filtered);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleFilter();
  }
  const handleClearFilters = () => {
    setSearchedName("");
    setSelectedBreed("");
    setFilteredCats(cats);
  };

  return (
    <div className="container">
      <section className="my-4">
        <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">
          {/* Title (Left Side) */}
          <div className="w-100 w-md-50">
            <h3 className="fw-bold mb-1">Available Cats</h3>
            <p className="mb-0 text-muted" style={{ fontSize: ".9rem" }}>
              Meet our adorable cats looking for their forever home!
            </p>
          </div>

          {/* Filters (Right Side) */}
          <form onSubmit={handleSubmit} className="d-flex flex-column flex-sm-row gap-2 w-100 w-md-50">
            <input
              type="search"
              className="form-control"
              placeholder="Search by name"
              value={searchedName}
              onChange={(e) => setSearchedName(e.target.value)}
            />

            <select
              className="form-select"
              value={selectedBreed}
              onChange={(e) => setSelectedBreed(e.target.value)}
            >
              <option value="">All Breeds</option>
              <option value="Sphynx">Sphynx</option>
              <option value="Siamese">Siamese</option>
              <option value="Peterbald">Peterbald</option>
              <option value="Birman">Birman</option>
              <option value="Abyssinian">Abyssinian</option>
              <option value="Bengal">Bengal</option>
              <option value="Persian">Persian</option>
            </select>

            <button
              type="submit"
              className="btn btn-info w-100 w-sm-auto"
              onClick={handleFilter}
            >
              Search
            </button>
            {(searchedName || selectedBreed) && (
              <button
                className="btn btn-outline-danger w-100 w-sm-auto"
                onClick={handleClearFilters}
              >
                Clear
              </button>
            )}
          </form>
        </div>
      </section>

      <section className="mt-5">
        {loading ? (
          <div className="loading-container">
            <div className="paw-loader">
              <div className="paw">🐾</div>
            </div>
            <p className="mt-3 text-muted fw-bold">Loading purrfect cats...</p>
          </div>
        ) : filteredCats.length === 0 ? (
          <div className="text-center py-5">
            <h4 className="text-muted">No cats found</h4>
            <p className="text-muted">
              Try adjusting your name or breed criteria
            </p>
          </div>
        ) : (
          <div className="mt-1" id="cats-container">
            {filteredCats.map((cat, i) => (
              <div key={i} className="cat-card my-2">
                <img src={cat.image} alt={cat.name} className="img-fluid" />
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
