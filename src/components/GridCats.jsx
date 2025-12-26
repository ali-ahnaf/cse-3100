const GridCats = ({ children }) => {
  return (
    <section className="mt-4">
      {children}
    </section>
  );
};

GridCats.Title = ({ children }) => {
  return children;
};

GridCats.Content = ({ cats }) => {
  return (
    <div className="row g-4">
      {cats.map((cat, i) => (
        <div key={i} className="col-md-3">
          <div className="cat-card">
            <img src={cat.image} alt={cat.name} className="img-fluid" />
            <div className="cat-info">
              <div className="info-box">
                <div className="fw-bold">{cat.name}</div>
                <small>Age: {cat.age}</small>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GridCats;
