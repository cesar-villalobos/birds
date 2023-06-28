import React from 'react';
import './card.styles.css';

export const Card = (props) => (
  <div className="card-container">
    <img
      alt="bird"
      src={props.bird.images.thumb}
    />
    <h2>{props.bird.name.spanish}</h2>
    <p>{props.bird.name.latin}</p>
  </div>
);
