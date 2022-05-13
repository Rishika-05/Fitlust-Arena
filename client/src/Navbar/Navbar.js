import React from 'react'
import {Container,Nav,Navbar} from "react-bootstrap"
import {ReactComponent as Logo} from "../assets/fitlust2.svg"

import "./Navbar.css"



function NavBar() {
  return (

   
    <Navbar id = "outer-nav" expand = "lg" className = "navbar-dark">
    <Container>
      <Navbar.Brand href="#home" className='me-5 ms-3'>
        <Logo style = {{"height":"80px","width":"120px"}}/>
      </Navbar.Brand>
      <Navbar.Toggle id = "mobile-btn" aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link className = "m-3 nav-link" href="#home">HOME</Nav.Link>
          <Nav.Link className = "m-3 nav-link" href="#About">ABOUT</Nav.Link>
          <Nav.Link className = "m-3 nav-link" href="#A">ARTICLES</Nav.Link>
          <Nav.Link className = "m-3 nav-link" href="#A">FREE CUSTOM PLAN</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

  )
}

export default NavBar