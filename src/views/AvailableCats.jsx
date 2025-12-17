import useCats from "../hooks/useCats";

const availableCats = [
  { name: "Whiskers", age: "2" },
  { name: "Mittens", age: "2" },
  { name: "Shadow", age: "1" },
  { name: "Pumpkin", age: "3" },
  { name: "Luna", age: "4" },
  { name: "Simba", age: "2" },
];

export default function AvailableCats() {
  const { cats } = useCats(availableCats);

  return (
    <section className="text-center mt-4">
      <h2>Available Cats</h2>
      <p>Meet our adorable cats looking for their forever home!</p>

      <div className="mt-2 row g-4 cats-container" id="cats-container">
        {cats.map((cat, i) => (
          <div key={i} className="col-md-4">
            <div className="cat-card">
              <img
                src={cat.image}
                alt={cat.name}
                className="img-fluid mb-2"
                style={{
                  borderRadius: "8px",
                  height: "200px",
                  objectFit: "cover",
                }}
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
  );
}
