import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../redux/rockets/rocketsSlice';
import Rocket from './rocket';

function Rockets() {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.rockets.status);

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
      <Rocket />
    </div>
  );
}

export default Rockets;
