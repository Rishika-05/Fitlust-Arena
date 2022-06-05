import React, { useEffect } from "react";
import "./HomeHeader.css";
import { Container } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Footer from "../Footer/Footer";
import { FaAngleDown } from 'react-icons/fa';
import vid from '../../assets/hero.mp4';
import hero from '../../assets/floor.jpg';
import AboutHome from '../AboutHome/AboutHome';

const HomeHeader = () => {
  return (
        <main style={{marginTop:"150px"}}>
          <header
            className="header-section"
            onContextMenu={(e) => e.preventDefault()}
          >
            <video autoPlay playsInline muted loop className="hero-video">
              <source src={vid} type="video/mp4" />
              <img src={hero} alt="man lifting weights" />
              Your browser does not support the video. Sorry for the
              inconvenience.
            </video>
            <div className="hero-heading">
              <h2 className="heading__header--sub">
                <br />
                Everyone Needs a Tune-up
              </h2>
              <h1 className="heading__header">
                Get In. <br />
                Get Fit. <br /> Get on with Life.
              </h1>
            </div>
            <button
              className="next-btn"
              aria-label="Discover Fit Art"
              onClick={() => document.getElementById("about").scrollIntoView()}
            >
              <FaAngleDown />
            </button>
          </header>
          <div id="about">
            <AboutHome />
          </div>
          <Footer/>
        </main>
  );
};

export default HomeHeader;
