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
    <div className="mt-2 row g-4">
      {cats.map((cat, i) => (
        <div key={i} className="col-md-3">
          <div className="cat-card">
            <img src={cat.image} alt={cat.name} className="img-fluid" />
            <div className="cat-info">
              <h3 className="h5 mb-1">{cat.name}</h3>
              <p className="mb-0">Age: {cat.age}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GridCats;
