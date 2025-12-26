import React from 'react';

const CatCard = ({ cat }) => {
  const handleAdopt = () => {
    alert(`Thank you for your interest in adopting ${cat.name}! We'll contact you soon.`);
  };

  return (
    <div className="cat-card">
      <img 
        src={cat.image} 
        alt={cat.name} 
        className="cat-card-image" 
      />
      <div className="cat-card-body">
        <h3 className="cat-card-title">{cat.name}</h3>
        <span className="cat-card-breed">{cat.breed}</span>
        <p className="cat-card-text">{cat.description}</p>
        <div className="cat-card-details">
          <div className="cat-card-detail">
            <strong>Age</strong>
            <span>{cat.age}</span>
          </div>
          <div className="cat-card-detail">
            <strong>Gender</strong>
            <span>{cat.gender}</span>
          </div>
          <div className="cat-card-detail">
            <strong>Color</strong>
            <span>{cat.color}</span>
          </div>
        </div>
        <button className="btn-adopt" onClick={handleAdopt}>
          Adopt Me 
        </button>
      </div>
    </div>
  );
};

export default CatCard;
