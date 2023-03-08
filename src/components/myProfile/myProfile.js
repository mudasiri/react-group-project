import React from 'react';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function MyProfil() {
  return (
    <Container>
      <Row>
        <Col size="sm">
          <Table bordered hover>
            <thead>
              My Missions
            </thead>
            <tbody>
              <tr>
                <td>Tesla</td>
              </tr>
              <tr>
                <td>SES</td>
              </tr>
              <tr>
                <td>Asiasat</td>
              </tr>
              <tr>
                <td>ABS</td>
              </tr>

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
