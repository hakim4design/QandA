import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



 const CardDetails = ({title,pic,text,children, clickMe}) => {

 const handleClick=()=>{
   clickMe(title);
  } 
 // console.log(props);
  return (
       <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={pic} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
          {text}
          {children}
          </Card.Text>
          
          <Button variant="primary" onClick={handleClick}>Go somewhere</Button>
        </Card.Body>
      </Card>
  
  )
}

export default CardDetails;