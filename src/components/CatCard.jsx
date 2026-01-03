const CatCard = ({ cat }) => {
  return (
    <div className="cat-card">
      <img src={cat.image} alt={cat.name} />

      <div className="cat-overlay">
        <div className="cat-name">{cat.name}</div>
        <div>Age: {cat.age}</div>
        <div>Breed: {cat.breed}</div>
      </div>
    </div>
  );
};

export default CatCard;
