import React from 'react';

function Rocket({ ...rocket }) {
  return (
    <div className="rocket-info-container">
      <div className="rocket-img">
        <img src={rocket.flickr_images} alt="pic of a rocket" />
      </div>
      <div className="rocket-info">
        <h2>{rocket.title}</h2>
        <p>
          {rocket.description}
        </p>
        <button type="button" className="reserve-btn">Reserve Rocket</button>
      </div>
    </div>
  );
}

export default Rocket;
