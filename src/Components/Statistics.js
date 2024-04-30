import React from 'react'
import { BarChart } from '@mui/x-charts/BarChart';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { PieChart } from '@mui/x-charts';
import {Link} from 'react-router-dom';

function Statistics() {
  return (
    <div>
        <Row>
            
                <Col>
            <div className='mycard'>
                <center><h1>Dumbell</h1></center>
                <center><p>$1572</p></center>
            </div>
            </Col>
            <Col>
            <div className='mycard'>
            <center><h1>Cycle</h1></center>
                <center><p>$1672</p></center>
            </div>
            </Col>
            <Col>
            <div className='mycard'>
                <center><h1>Stepper</h1></center>
                <center><p>$1400</p></center>
            </div>
            </Col>
            <Col>
            <div className='mycard'>
                <center><h1>kettlebell</h1></center>
               <center> <p>$3000</p></center>
            </div>
            </Col>
            </Row>
            <div className='main2'>
            <Row>
            <Col sm={8}>
            <Card className='card mt-5'>
           <center><h3>Sales</h3></center>
            <Link to='/Graphs1'><BarChart
  series={[
    { data: [3, 4, 1, 6, 5], stack: 'A',},
    { data: [4, 3, 1, 5, 8], stack: 'A',},
    { data: [4, 2, 5, 4, 1], stack: 'B',},
    { data: [2, 8, 1, 3, 1], stack: 'B',},
    { data: [10, 6, 5, 8, 9],},
  ]}
  width={600}
  height={300}
/>    
</Link>
    </Card>
            </Col>
            

            <Col sm={4}className='mt-5'>
              
            <Card className='card mb-10'>
              <center><h3>Total sales</h3></center>
            <PieChart
  series={[
    {
      data: [
        { id: 0, value: 10, label: 'series A' },
        { id: 1, value: 15, label: 'series B' },
        { id: 2, value: 20, label: 'series C' },
      ],
    },
  ]}
  width={500}
  height={300}
/>         </Card>
            </Col>
            </Row>
    </div>
    </div>
  )
}

export default Statistics