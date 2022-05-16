import React from 'react'
import './HomeHeader.css'
import {Container} from 'react-bootstrap'
import Fade from 'react-reveal/Fade';

const HomeHeader = () => {
  return (
    <Container fluid id = "header">
        <Fade bottom>
            <h1>THINK STRONG. BE STRONG. WORK ON!</h1>
        </Fade>
    </Container>
  )
}

export default HomeHeader