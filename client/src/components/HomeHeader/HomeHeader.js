import React,{useEffect} from 'react'
import './HomeHeader.css'
import {Container} from 'react-bootstrap'
import Fade from 'react-reveal/Fade';

const HomeHeader = () => {
  const getInstaContent = async () => {
    let url = "https://graph.facebook.com/v12.0/fitlust_arena?fields=business_discovery.username(fitlust_arena){username&access_token={access-token}";
    let res = await fetch(url, {
      method: "GET", headers: {
          'Content-Type': 'application/json'
      },
    });
    let data = await res.json();
    console.log(data);
  }

  useEffect(()=>{
    getInstaContent();
  },[])
  return (
    <Container fluid id = "header">
        <Fade bottom>
            <h1>THINK STRONG. BE STRONG. WORK ON!</h1>
        </Fade>

    </Container>
  )
}

export default HomeHeader