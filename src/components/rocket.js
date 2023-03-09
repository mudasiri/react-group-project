import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { cancel, reserve } from '../redux/rockets/rocketsSlice';

function Rocket({ ...rocket }) {
  const dispatch = useDispatch();
  return (
    <div className="rocket-info-container">
      <div className="rocket-img">
        <img src={rocket.flickr_images} alt="pic of a rocket" />
      </div>
      <div className="rocket-info">
        <h2>{rocket.title}</h2>
        <p>
          {rocket.reserved && (<span className="badge">Reserved</span>) }
          {rocket.description}
        </p>
        {rocket.reserved && (<button type="button" onClick={() => dispatch(cancel(rocket.id))} className="cancel-btn">Cancel Booking</button>)}
        {!rocket.reserved && (<button type="button" onClick={() => dispatch(reserve(rocket.id))} className="reserve-btn">Reserve Rocket</button>)}
      </div>
    </div>
  );
}

export default Rocket;
