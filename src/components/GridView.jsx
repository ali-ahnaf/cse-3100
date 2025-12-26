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
    <div className="row">
      {contents.map((content, i) => (
        <div key={i} className="col-md-3 px-0">
          <div className="px-2">
            <div className="card">
              <img src={content.image} alt={content.name} className="img-fluid" />
              <div className="info">
                <div className="info-box">
                  <div className="fw-bold">{content.name}</div>
                  <small>Age: {content.age}</small>
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
