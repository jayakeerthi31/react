import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AltRouteIcon from '@mui/icons-material/AltRoute';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Person2Icon from '@mui/icons-material/Person2';
import FlightClassIcon from '@mui/icons-material/FlightClass';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import Tables from './Tables';

function Equipments() {
  return (
    <div>
      <Container>
        <Row className='mt-3'>
          <Col sm={4} className='mycol'>
            <h1><FitnessCenterIcon/>Excerises</h1>
            </Col>           
              <Col sm={4} className='mycol1'>
                <h1><CalendarTodayIcon/>29 April 2025</h1>
              </Col>
        </Row>
      </Container>
      <Tables />
    </div>
  )
}

export default Equipments