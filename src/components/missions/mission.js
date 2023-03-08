import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import Table from 'react-bootstrap/Table';

function Mission() {
  return (

    <div>

      <Table striped bordered hove>
        <thead>
          <tr>
            <th className="th_title">Mission</th>
            <th className="th_desc desc_head">Description</th>
            <th className="th_button">Status</th>
            <th className="th_button">  </th>
          </tr>
        </thead>
        <tbody>

          <tr>
            <td className="th_title desc_head">Thaicon</td>
            <td className="th_title desc_head">To be the number one space-tech company in Thailand and one of the top in the region. To grow our business through international partnerships. To build new digital capabilities to serve business opportunities of the future.</td>
            <td className="th_title desc_head"><Button variant="secondary" size="sm">Not a member</Button></td>
            <td className="th_title desc_head"><Button variant="outline-dark" size="sm">Join mission</Button></td>

          </tr>

        </tbody>
      </Table>
    </div>
  );
}

export default Mission;
