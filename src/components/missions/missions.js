import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import Badge from 'react-bootstrap/Badge';
import Table from 'react-bootstrap/Table';
import { fetchMissions, join, leave } from '../../redux/missions/missionsSlice';

function Missions() {
  const dispatch = useDispatch();
  const { missions } = useSelector((state) => state.missions);

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
      <Table striped bordered hove="true">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.id}>
              <td>{mission.name}</td>
              <td>{mission.description}</td>
              {!mission.reserved && (<td><Badge bg="secondary">Not a member</Badge></td>)}
              {mission.reserved && (<td><Badge bg="info">Active member</Badge></td>)}
              <td>
                {!mission.reserved && (<button onClick={() => dispatch(join(mission.id))} className="join-btn" type="button">Join Mission</button>)}
                {mission.reserved && (<button onClick={() => dispatch(leave(mission.id))} className="leave-btn" type="button">Leave Mission</button>)}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Missions;
