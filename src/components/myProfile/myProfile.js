import React from 'react';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { useSelector } from "react-redux";

function MyProfil() {
  const missions = useSelector((state) => state.missions.missions);
  const missionsFiltered = missions.filter(
    (mission) => mission.reserved === true
  );

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
              My Rockets
            </thead>
            <tbody>
              <tr>
                <td>Falcon 9</td>
              </tr>
              <tr>
                <td>Falcon  Heavy</td>
              </tr>
              <tr>
                <td>Starship</td>
              </tr>

            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}
export default MyProfil;
