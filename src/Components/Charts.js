import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { PieChart } from '@mui/x-charts/PieChart';
import { LineChart } from '@mui/x-charts/LineChart';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import NearMeIcon from '@mui/icons-material/NearMe';
import {Link} from 'react-router-dom';
function Charts() {
    return (
        <div className='parent'>
            <Row>
                <Col sm={8}>
                <Link to='/Graphs'><LineChart
  xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
  series={[
    {
      data: [2, 5.5, 2, 8.5, 1.5, 5],
    },
  ]}
  width={500}
  height={300}
/>
</Link>
            
            </Col>
            <Col sm={4} className='child2'>
            <img src={'https://i.pinimg.com/236x/66/65/43/66654317aa154cfa4dbb8756aeb88947.jpg'}/>
            </Col>
            </Row>

            <div className='child1'>
                <Row>
                    <Col sm={8}>
                        <h5>gym</h5>
                        <img className='one' src={'https://i.pinimg.com/236x/c1/08/16/c1081626b5cd5f1e84a77efc11451556.jpg'}/>
                    
                    </Col>
                    <Col sm={4} className='parent1'>
                        <h5 className='mt-5'>Workout Schedule</h5>
                     <Table>
                            <tbody>
                            <tr>
                        <td>Friends</td>
                        <td></td><br/><br/>
                        <td></td><br/>
                        <td><MoreVertIcon/></td>
                        </tr>
                        <tr>
                            <td>Jane Cooper</td>
                            <td></td><br/><br/>
                            <td></td><br/>
                            <td>< NearMeIcon/></td>
                        </tr>
                        <tr>
                            <td>Jenny wilson</td>
                            <td></td><br/><br/>
                            <td></td><br/>
                            <td>< NearMeIcon/></td>
                            
                        </tr>
                        <tr>
                            <td>McCoy</td>
                            <td></td><br/><br/>
                            <td></td><br/>
                            <td>< NearMeIcon/></td>
                            
                        </tr>
                        </tbody>
                    </Table>
                    

                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Charts