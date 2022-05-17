import React from 'react'
import {Container,Nav,Navbar,NavDropdown} from "react-bootstrap"
import {ReactComponent as Logo} from "../../assets/fitlust2.svg"
import { BsInstagram } from 'react-icons/bs';
import "./Navbar.css"



function NavBar() {
  return (

    <>
   
    <Navbar id = "outer-nav" expand = "lg" className = "navbar-dark sticky-top">
    <Container>
      <Navbar.Brand href="#home" className='me-5 ms-3'>
        <Logo style = {{"height":"80px","width":"120px"}}/>
      </Navbar.Brand>
      <BsInstagram id = "ig-up"  style = {{"height":"45px","width":"40px","margin-left":"20vw"}}/>
      <Navbar.Toggle id = "mobile-btn" aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="m-auto">
          <Nav.Link className = "m-3 nav-link" href="/">HOME</Nav.Link>
          <Nav.Link className = "m-3 nav-link" href="#About">ABOUT</Nav.Link>
          <NavDropdown title="ARTICLES" className = "m-3" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        </NavDropdown>
          <Nav.Link className = "m-3 nav-link" href="/custom-plans">FREE CUSTOM PLAN</Nav.Link>
        </Nav>
        
      </Navbar.Collapse>
      
      <BsInstagram  id = "ig-down"  style = {{"height":"45px","width":"40px"}}/>
      
    </Container>
  </Navbar>
  </>

  )
}

export default NavBar