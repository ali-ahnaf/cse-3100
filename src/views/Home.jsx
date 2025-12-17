import useCats from "../hooks/useCats.js";

export default function Home() {
  const { loading, error, cats } = useCats();

  return (
    <>
      <section className="d-flex justify-content-center mt-4">
        <div className="text-center" style={{ maxWidth: "720px" }}>
          <h2>Welcome to Purrfect Adoption</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
          </p>
        </div>
      </section>

      <section className="mt-5">
        <h2>Featured cats</h2>
        <div className="mt-2 row g-4" id="cats-container">
          {cats.map((cat, i) => (
            <div key={i} className="col-md-3">
              <div className="cat-card">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="img-fluid"
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
