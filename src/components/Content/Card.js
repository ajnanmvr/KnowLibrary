import React from 'react';
import './Card.css';

const Card = ({ card }) => {
  return (
    <article className="card">
      <div className="card-header">
        <div>
          <span>
            <img src={card.image} alt="Logo" />
          </span>
          <h3>{card.name}</h3>
        </div>
      </div>
      <div className="card-body">
        <p>{card.description}</p>
      </div>
      <div className="card-footer">
        <a href={card.url}>Visit Website</a>
      </div>
    </article>
  );
};

export default Card;
