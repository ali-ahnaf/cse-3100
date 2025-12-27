import React from 'react';

export default function CatGrid({ cats }) {
  return (
    <div className="cats-container">
      {cats.map((cat, i) => (
        <div key={i} className="cat-card">
          <img src={cat.image} alt={cat.name} />
          <div className="cat-info">
            <h3>{cat.name}</h3>
            <p>Breed: {cat.breed}</p>
            <p>Age: {cat.age}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
