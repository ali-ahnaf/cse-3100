import React from "react";

export default function CatCard({ cat }) {
  return (
    <article className="cat-card">
      <div className="cat-image-placeholder" aria-hidden="true"></div>
      <div className="cat-info">
        <div className="cat-name">{cat.name}</div>
        <div className="cat-meta">
          <span>Age: {cat.age}</span>
          <span>Breed: {cat.breed}</span>
        </div>
      </div>
    </article>
  );
}
