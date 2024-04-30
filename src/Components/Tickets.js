import  Row  from 'react-bootstrap/Row';
import  Col from 'react-bootstrap/Col';
import { Table } from 'react-bootstrap';
import React,{useState} from 'react';
import { Button } from 'react-bootstrap';

function Tickets() {
  const[count,setCount]=useState(25);
  const[Count1,setCount1]=useState(10);
  const[Count2,setCount2]=useState(15);
  const[Count3,setCount3]=useState(20);
  const[Count4,setCount4]=useState(25);
  const[Count5,setCount5]=useState(30);
  return (
    <div>
      <h1 style={{paddingLeft:380,color:'blue'}}>BOOKINGS</h1>
      <Row>
        <Col sm={12}>
          <Table hover>
          <thead className='parent1'>
                    <tr>
                        <th>S.NO</th>
                        <th>EQUIPMENTS</th>
                        <th>PRICE</th>
                        <th>FARE TYPE</th>
                        <th>QUANTITY</th>
                    </tr>
                    </thead>
                      <tbody>
                        <tr>
                        <td>1</td>
                        <td>Dumbell</td>
                        <td>$1572</td>
                        <td>Refundable</td>
                        <td>
                        <Button onClick={()=>setCount(count+1)}>+</Button>
                        <h1 className='myh1'>{count}</h1>
                        <Button onClick={()=>setCount(count-1)}>-</Button></td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Cycle</td>
                        <td>$1658</td>
                        <td>Refundable</td>
                        <td>
                        <Button onClick={()=>setCount1(Count1+1)}>+</Button>
                        <h1 className='myh1'>{Count1}</h1>
                        <Button onClick={()=>setCount1(Count1-1)}>-</Button></td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Kettlebell</td>
                        <td>$2567</td>
                        <td>Refundable</td>
                        <td>
                        <Button onClick={()=>setCount2(Count2+1)}>+</Button>
                        <h1 className='myh1'>{Count2}</h1>
                        <Button onClick={()=>setCount2(Count2-1)}>-</Button></td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>DeadLifts</td>
                        <td>$2345</td>
                        <td>Refundable</td>
                        <td>
                        <Button onClick={()=>setCount3(Count3+1)}>+</Button>
                        <h1 className='myh1'>{Count3}</h1>
                        <Button onClick={()=>setCount3(Count3-1)}>-</Button></td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>Threadlifts</td>
                        <td>$2145</td>
                        <td>Refundable</td>
                        <td>
                        <Button onClick={()=>setCount4(Count4+1)}>+</Button>
                        <h1 className='myh1'>{Count4}</h1>
                        <Button onClick={()=>setCount4(setCount4-1)}>-</Button></td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>Stepper</td>
                        <td>$3456</td>
                        <td>Refundable</td>
                        <td>
                        <Button onClick={()=>setCount5(Count5+1)}>+</Button>
                        <h1 className='myh1'>{Count5}</h1>
                        <Button onClick={()=>setCount5(Count5-1)}>-</Button></td>
                      </tr>
                      </tbody>
                    
          </Table>
        </Col>
      </Row>
      <table>

      </table>
      


    </div>
  )
}

export default Tickets
