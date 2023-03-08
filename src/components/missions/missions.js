import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions } from '../../redux/missions/missionsSlice';
import Mission from './mission';

function Missions() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.missions.status);
  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  if (status !== 'succeded') {
    return (
      <div>
        Error loading missions...
      </div>
    );
  }

  return (
    <div className="container">
      <Mission />
    </div>
  );
}

export default Missions;
