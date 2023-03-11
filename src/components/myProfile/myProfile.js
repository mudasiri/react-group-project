import React from 'react';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { useSelector } from 'react-redux';

function MyProfile() {
  const missions = useSelector((state) => state.missions.missions);
  const missionsFiltered = missions.filter(
    (mission) => mission.reserved === true,
  );
  const { rockets } = useSelector((state) => state.rockets);
  const bookedRockets = rockets.filter((rocket) => rocket.reserved);
  return (
    <Container>
      <Row>
        <Col size="sm">
          <Table bordered hover>
            <thead>
              <tr>
                <th>My Missions</th>
              </tr>
            </thead>
            <tbody>
              {missionsFiltered.length === 0 && <p>No Reserved Missions</p>}

              {missionsFiltered.map((mission) => (
                <tr key={mission.id}>
                  <td>{mission.name}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>

        <Col size="sm">
          <Table bordered hover>
            <thead>
              <tr>
                <th>My Rockets</th>
              </tr>
            </thead>
            <tbody>
              {bookedRockets.length === 0 && <p>No Reserved Rockets</p>}

              {bookedRockets.map((rocket) => (
                <tr key={rocket.id}>
                  <td>{rocket.name}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}
export default MyProfile;
