import React from 'react'
import {Container,Nav,Navbar,NavDropdown} from "react-bootstrap"
import {ReactComponent as Logo} from "../../assets/fitlust2.svg"
import { BsInstagram } from 'react-icons/bs';
import "./Navbar.css"



function NavBar() {
  return (

    <>
   
    <Navbar id = "outer-nav" expand = "lg" className = "navbar-dark sticky" style={{zIndex:100}}>
    <Container>
      <Navbar.Brand href="/" className='me-5 ms-3'>
        <Logo style = {{"height":"80px","width":"120px"}}/>
      </Navbar.Brand>
      <BsInstagram id = "ig-up"  style = {{"height":"45px","width":"40px","margin-left":"20vw"}}/>
      <Navbar.Toggle id = "mobile-btn" aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="m-auto">
          <Nav.Link className = "m-3 nav-link" href="/">HOME</Nav.Link>
          <NavDropdown title="ARTICLES" className = "m-3" id="basic-nav-dropdown">
            <NavDropdown.Item className = "drp-dwn" href="/articles/training">Training</NavDropdown.Item>
            <NavDropdown.Item className = "drp-dwn" href="/articles/nutrition">Nutrition</NavDropdown.Item>
            <NavDropdown.Item className = "drp-dwn" href="/articles/supplementation">Supplements</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link className = "m-3 nav-link" href="/custom-plans">FREE CUSTOM PLAN</Nav.Link>
        </Nav>
        
      </Navbar.Collapse>
      
      <BsInstagram  id = "ig-down"  onClick = {()=>{window.open('https://www.instagram.com/fitlust_arena','_blank')}}   style = {{"height":"45px","width":"40px",cursor:"pointer"}}/>
      
    </Container>
  </Navbar>
  </>

  )
}

export default NavBar