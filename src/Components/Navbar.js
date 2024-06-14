import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import ReportIcon from '@mui/icons-material/Report';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SettingsIcon from '@mui/icons-material/Settings';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import NoFoodIcon from '@mui/icons-material/NoFood';
import ReviewsIcon from '@mui/icons-material/Reviews';
import { Link } from 'react-router-dom';
import Icon from './Icon';
function Navbar() {
  return (
    <div className='Sidebar'>
        <h1>EXPLORE</h1>
        <Icon/>
      <ul className='myul'>
        <li><DashboardIcon/><Link to='/react/'><p className='test'>Dashboard</p></Link></li>
        <li><FitnessCenterIcon/><Link to='/Equipments'><p className='test'>Equipments</p></Link></li>
        <li><NoFoodIcon/><Link to ='/Calories'><p className='test'>Calories</p></Link></li>
        <li><AssessmentIcon/><Link to='/Statistics'><p className='test'>Statistics</p></Link></li>
        <li>< ReviewsIcon/><Link to='/Overview'><p className='test'>Overview</p></Link></li>
      </ul>
      </div>
  )
}

export default Navbar
