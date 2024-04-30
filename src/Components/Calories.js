import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { LineChart } from '@mui/x-charts/LineChart';
import { BarChart } from '@mui/x-charts/BarChart';
import Table from 'react-bootstrap/Table';

function Calories() {
  return (
    <div className='seven'>
      <Row>
        <Col sm={12}>
            <Table>
            <thead>
                <th>S.NO</th>
                <th>FOOD</th>
                <th>DAY</th>
                <th>CALORIES</th>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td><img className='two'src={'https://i.pinimg.com/564x/4c/a5/80/4ca580b4838bb5e91ec81b5acd978d5b.jpg'}/></td>
                        <td>MONDAY</td>
                        <td>179 calories</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td><img className='two'src={'https://i.pinimg.com/236x/14/18/a2/1418a2c9260c8d0ae8bf26548fa97d0f.jpg'}/></td>
                        <td>TUESDAY</td>
                        <td>200 calories</td>
                    </tr>
                    <tr>
                    <td>3</td>
                        <td><img className='two'src={'https://i.pinimg.com/236x/c8/fd/b0/c8fdb08f3da99e10812e0436d7549155.jpg'}/></td>
                        <td>WEDNESADY</td>
                        <td>250 calories</td>
                    </tr>
                    <tr>
                    <td>4</td>
                        <td><img className='two'src={'https://i.pinimg.com/236x/f1/0c/62/f10c6240e5898c498d2a198c76fde51c.jpg'}/></td>
                        <td>THURSDAY</td>
                        <td>300 calories</td>
                    </tr>
                    <tr>
                    <td>5</td>
                        <td><img className='two'src={'https://i.pinimg.com/236x/33/93/24/339324280f70365940f900de43febd41.jpg'}/></td>
                        <td>FRIDAY</td>
                        <td>350 calories</td>
                        </tr>
                        <tr>
                        <td>6</td>
                        <td><img className='two'src={'https://i.pinimg.com/236x/2b/cd/f1/2bcdf151b1629e0d1e483ce78b38375c.jpg'}/></td>
                        <td>SATURDAY</td>
                        <td>400 calories</td>
                        </tr>
                    </tbody>
                </Table>
        </Col>
      </Row>
     
    </div>
    
  )
}

export default Calories
