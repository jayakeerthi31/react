import React from 'react'
import Table from 'react-bootstrap/Table';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import { Link } from 'react-router-dom';
function Tables() {
  return (
    <div>
            <Row>
                
                    <h4 className='mt-5'>RESULTS</h4>
     <Table striped="columns" className='mytab'>
      <tbody>
        <tr>
          <td><img className='img1' src={'https://i.pinimg.com/236x/da/1b/1b/da1b1b6afe454aab7c34ed7313e4f9c4.jpg'}/></td>
          <td>MONDAY</td>
          <td>Dumbell</td>
          <td>30minutes</td>
          <td>$1572<br/>
            <Link to='/Tickets'><button className='btn btn-outline-success'>BOOK NOW</button></Link></td>
        </tr>
        <tr>
          <td><img className='img2' src={'https://i.pinimg.com/236x/9c/9e/f1/9c9ef189c0e549f63a9dbdca40e593c9.jpg'}/></td>
          <td>TUESDAY</td>
          <td>DeadLifts</td>
          <td>50Minutes</td>
          <td>$2500<br/>
          <button className='btn btn-outline-success'>BOOK NOW</button></td>
        </tr>
        <tr>
          <td><img className='img3' src={'https://i.pinimg.com/236x/4a/35/d0/4a35d0457683e4fb5d373c926807b317.jpg'}/></td>
          <td>WEDNESADY</td>
          <td>KettleBells</td>
          <td>40M</td>
          <td>$3000<br/>
          <button className='btn btn-outline-success'>BOOK NOW</button></td>
        </tr>
        <tr>
          <td><img className='img4' src={'https://i.pinimg.com/564x/29/f8/28/29f828435cf121669a969f44276e1e9a.jpg'}/></td>
          <td>THURSDAY</td>
          <td>Stepper</td>
          <td>13H 10M</td>
          <td>$1400<br/>
          <button className='btn btn-outline-success'>BOOK NOW</button></td>
          </tr>
          <tr>
          <td><img className='img4' src={'https://i.pinimg.com/236x/62/d5/08/62d5088ea940443ef4736e6bbc62b2ba.jpg'}/></td>
          <td>FRIDAY</td>
          
          <td>Treadmile</td>
          <td>1h 10M</td>
          <td>$1400<br/>
          <button className='btn btn-outline-success'>BOOK NOW</button></td>
          </tr>
          <tr>
          <td><img className='img4' src={'https://i.pinimg.com/564x/71/50/45/7150453c0d8a510c66c9e49b0a20a1f5.jpg'}/></td>
          <td>SATURDAY</td>
          <td>cycle</td>
          <td>13H 10M</td>
          <td>$1400<br/>
          <button className='btn btn-outline-success'>BOOK NOW</button></td>
          
        </tr>
      </tbody>
      </Table>
   
    </Row>
    </div>
    
  )
}

export default Tables
