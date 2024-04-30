import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { Table } from 'react-bootstrap';

function Overview() {
  return (
    <div>
    <h1>Overview</h1>
    <div>
        <Row>
           
            <Col>
                <div className='mycard1'>
     <center><h1>Exercises</h1></center>
                <center><p>20%</p></center>
                </div>
                </Col>

           <Col>
            <div className='mycard1'>
                <center><h1>Calories</h1></center>
                <center><p>15%</p></center>
            </div>
            </Col>

            <Col>
            <div className='mycard1'>
                <center><h1>Walk</h1></center>
                <center><p>5%</p></center>
            </div>
            </Col>
           
        </Row>
        <Row className='mt-5'>
        <Col>
            <div className='mycard1'>
                <center><h1>Diet</h1></center>
                <center><p>20%</p></center>
            </div>
            </Col>
            <Col>
            <div className='mycard1'>
                <center><h1>Cheat days</h1></center>
                <center><p>20%</p></center>
            </div>
            </Col>
            <Col>
            <div className='mycard1'>
                <center><h1>Gym</h1></center>
                <center><p>20%</p></center>
            </div>
            </Col>
        </Row>
        <Table hover className='mt-5'>
<thead>
    <tr>
        <th>S.NO</th>
        <th>EQUIPMENTS</th>
        <th>PRICES</th>
        <th>CALORIES</th>
        <th>CHEAT DAYS</th>
    </tr>
</thead>
<tbody>
    <tr>
    <td>01</td>
    <td>DUMBELLS</td>
    <td>$1234</td>
    <td>1567</td>
    <td>-</td>
    </tr>
    <tr>
    <td>02</td>
    <td>CYCLE</td>
    <td>$2345</td>
    <td>3456</td>
    <td>-</td>
    </tr>
    <tr>
    <td>03</td>
    <td>KETTELEBELL</td>
    <td>$5641</td>
    <td>5638</td>
    <td>-</td>
    </tr>
    <tr>
    <td>04</td>
    <td>STEPPER</td>
    <td>$8769</td>
    <td>2341</td>
    <td>-</td>
    </tr>
    <tr>
    <td>05</td>
    <td>DEADLIFTS</td>
    <td>$9854</td>
    <td>1253</td>
    <td>-</td>
    </tr>
</tbody>
</Table>
      
    </div>
    </div>
  )
}

export default Overview