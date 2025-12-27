const GridView = ({ children }) => {
  return (
    <section className="mt-4">
      {children}
    </section>
  );
};

GridView.Title = ({ children }) => {
  return children;
};

GridView.Content = ({ contents }) => {
  return (
    <div className="row mb-4">
      {contents.length === 0
      ? <small className="text-secondary">No cats available :(</small>
      : contents.map((content, i) => (
        <div key={i} className="col-md-3 px-0">
          <div className="p-3">
            <div className="card">
              <img src={content.image} alt={content.title} className="img-fluid" />
              <div className="info">
                <div className="info-box">
                  <div className="fw-bold">{content.title}</div>
                  <small>{content.sub}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GridView;
