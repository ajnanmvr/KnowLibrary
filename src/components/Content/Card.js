import React from "react";
import './Card.css'

function Card() {
  return (
    <article className="card">
      <div className="card-header">
        <div>
          <span>
            <img src="https://assets.codepen.io/285131/github.svg" />
          </span>
          <h3>GitHub</h3>
        </div>
      </div>
      <div className="card-body">
        <p>Link pull requests and automate workflows.</p>
      </div>
      <div className="card-footer">
        <a href="#">Visit Website</a>
      </div>
    </article>
  );
}

export default Card;
