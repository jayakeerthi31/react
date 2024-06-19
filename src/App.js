import React, { startTransition } from 'react'
import './App.css';
import Navbar from './Components/Navbar'; 
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import Dashboard from './Components/Dashboard'; 
import Newdash from './Components/Newdash'
import Equipments from './Components/Equipments';
import Calories from './Components/Calories';
import Statistics from './Components/Statistics';
import Tickets from './Components/Tickets';
import Overview from './Components/Overview';
import Graphs from './Components/Graphs';
import Graphs1 from './Components/Graphs1';
import Icon from './Components/Icon';
function App() {
  return (
    <>
    <Router>
        <Row>
            <Col sm={2}><Navbar /></Col>
            <Col sm={10}>
                <Routes>
                 <Route path='/reactapp' exact Component={Newdash}/>
                  <Route path ='/Equipments' exact Component={Equipments}/>
                  <Route path ='/Calories' exact Component={Calories}/>
                  <Route path ='/Statistics' exact Component={Statistics}/>
                  <Route path ='/Tickets' exact Component={Tickets}/>
                  <Route path ='/Overview' exact Component={Overview}/>
                  <Route path ='/Graphs' exact Component={Graphs}/>
                  <Route path ='/Graphs1' exact Component={Graphs1}/>
                  <Route path = '/Icon' exact Component={Icon}/>
                </Routes>
                </Col>
        </Row>
    </Router>
    </>
  )
}

export default App
