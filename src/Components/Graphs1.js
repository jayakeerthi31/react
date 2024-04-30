import React from 'react'
import { Table } from 'react-bootstrap'
function Graphs1() {
  return (
    <div>
       <center><h2>FITNESS/PLANS</h2></center>
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
  )
}

export default Graphs1