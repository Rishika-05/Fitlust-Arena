import React from 'react'
import {Card,ListGroup,ListGroupItem} from 'react-bootstrap';
import './SingleArticle.css';
import { useNavigate } from 'react-router-dom';


const SingleArticle = (props) => {
  const navigate = useNavigate();
  const {data} = props;
  return (  
  <Card className = "arti-card" style={{ width: '100%',padding:"5px",marginTop:"3%",borderRadius:"10px" }} onClick = {()=>{navigate(`/articles/${data.title}`)}}>
  <Card.Body className = "d-flex justify-content-between">
    <div>
      <Card.Title style = {{fontSize:"1.4rem",fontWeight:"600"}}>{props.data.title} </Card.Title>
      <span style = {{fontSize:"1.2rem",fontWeight:"500",color:"gray"}}>{props.data.author} </span>
      <span style = {{fontSize:"1.2rem",fontWeight:"500",color:"gray"}}>{props.data.type}</span>
      <Card.Text >
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
      </Card.Text>
    </div>
    <div>
      <Card.Img variant="top" src={data.image} style = {{height:"100px",width:"100px"}} />
    </div>
    </Card.Body>
  </Card>
  )
}

export default SingleArticle