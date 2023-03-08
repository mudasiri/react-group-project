import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../redux/rockets/rocketsSlice';
import Rocket from './rocket';

function Rockets() {
  const dispatch = useDispatch();
    const rockets = useSelector((state) => state.rockets.rockets);
  const status = useSelector((state) => state.rockets.status);
  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  if (status !== 'succeded') {
    return (
      <div className="container">
        Error Loading Rockets.....
      </div>
    );
  }

  return (
    <div className="container">
      {
        rockets.map((rocket)=> (
          <Rocket
          key={rocket.id}
          id={rocket.id}
          title = {rocket.name}
          type = {rocket.type}
          description = {rocket.description}
          flickr_images = {rocket.flickr_images}
          />
        )) 
      }
    </div>
  );
}

export default Rockets;
