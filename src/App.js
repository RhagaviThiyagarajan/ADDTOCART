
import CardGroup from 'react-bootstrap/CardGroup';
import { Button } from "bootstrap";
import './App.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';



const shopping=[
  {
name:"Fancy Product",
price:"$40.00 - $80.00"
  },
  {
    name:"Special Item",
price: " $20.00 $18.00"
  } ,
  {
    name:"Sale Item",
    price:"$20.00 $18.00" 
  },
  {
    name:"Popular Item",
    price:"$50.00 $25.00"

  },
{
  name:"Sale Item",
  price:"$50.00 $25.00" 
},
{
  name:"Fancy Product",
  price: "$120.00 - $280.00 "
},
{
  name:"Special Item",
  price:"$20.00 $18.00"
},
{
  name:"Popular Item",
  price:"$40.00"
}


];

 export function App() {
  return (
    <div className="App">
      


{
shopping.map((shops)=>
{
  <ShoppingCard shops={shops}/>
})
 }


</div>
  )
}


export function ShoppingCard({shops})
{
  


  return(
    <Row xs={1} md={2} className="g-4">

   {Array.from({length:6}).map((_,shops)=>(
    <Col>
    <Card>
    <Card.Img variant="top" src={require(".//holder/image.jpg")}/>
    <Card.Body>
      <Card.Title>{shops.name}</Card.Title>
      
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">{shops.price}</small>
    </Card.Footer>
  </Card>
    </Col>
   ))
}
</Row>);
}

  
  








export default App;