import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

import Cards from './Charts';

function Newdash() {
  return (
    <div className='test1'>
   <Row>
        <Container className='abcd'>
        <Col sm={2}>
            <h1>Calorie</h1>
            <p>30mins</p>
            </Col>
            <Col sm={2}>
           <img src={'https://i.pinimg.com/236x/7f/3c/af/7f3cafd3a7f5a191c871ade7a9fec968.jpg'}/> 
        </Col>
        </Container>
        <Container className='sample'>
        <Col sm={2}>
            <h1>HeartBeat</h1>
            <p>130bpm</p>
            </Col>
            <Col sm={2}>
           <img className='demo1' src={'https://i.pinimg.com/236x/49/d9/5b/49d95bbe86e8e588aec5a06bff741f0d.jpg'}/> 
        </Col>
        </Container>
        <Container className='sample1'>
        <Col sm={2}>
            <h4>Weights</h4>
            <p>70kg</p>
            </Col>
            <Col sm={2}>
           <img className='demo' src={'https://i.pinimg.com/236x/b2/24/48/b22448ad3abacada8e00933b8e0b78a7.jpg'}/>
        </Col>

       <Cards/>
        </Container>
   </Row>
   </div>
   
  )
}

export default Newdash
