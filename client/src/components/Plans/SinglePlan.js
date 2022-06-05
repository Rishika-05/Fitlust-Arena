import React from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import '../SingleArticle/SingleArticle.css';
import { useNavigate } from 'react-router-dom';



const SinglePlan = (props) => {
    const navigate = useNavigate();
    const {data} = props;
  return (
    <Card className="arti-card" style={{ width: '100%', padding: "5px", marginTop: "3%", borderRadius: "10px" }} onClick={() => { navigate(`/show-plans/${data._id}`) }}>
      <Card.Body className="d-flex justify-content-between">
        <div>
          <Card.Title style={{ fontSize: "1.4rem", fontWeight: "600" }}>{props.data.name} </Card.Title>
          <span style={{ fontSize: "1.2rem", fontWeight: "500", color: "gray" }}>{props.data.email} </span>
          <br/>
          <span style={{ fontSize: "1.2rem", fontWeight: "500", color: "gray" }}>{props.data.height}</span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span style={{ fontSize: "1.2rem", fontWeight: "500", color: "gray" }}>{props.data.weight} kg</span>
        </div>
      </Card.Body>
    </Card>
  )
}

export default SinglePlan