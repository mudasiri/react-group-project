import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Badge from 'react-bootstrap/Badge';

import Table from 'react-bootstrap/Table';

function Mission() {
  return (
    <div>
      <Table striped bordered hove>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Thaicon</td>
            <td>
              To be the number one space-tech company in Thailand and one of the
              top in the region. To grow our business through international
              partnerships.
            </td>
            <td>
              <Badge bg="secondary">
                Not a member
              </Badge>
              {' '}
            </td>
            <td>
              <Badge bg="secondary">
                Join mission
              </Badge>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Mission;
