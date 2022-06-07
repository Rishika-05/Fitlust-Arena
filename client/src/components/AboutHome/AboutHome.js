import React from 'react'
// import {TrainerContext} from '../context/TrainerContext';

import {GiMuscleUp,GiKnifeFork, GiHeartBeats, GiRobe} from 'react-icons/gi';

const AboutHome = () => {
    // const value  = React.useContext(TrainerContext);
    return (
        <section className="about-home">
            <h1 className="about-home__heading">who are we</h1> 
            <p className="about-home__block" style = {{textAlign:"justify"}}>
                <span className="lead">We</span>, at FitLust are <strong>an oncoming lifestyle studio</strong>. We, at FitLust, believe in living healthy and happy. Our focus is to help you guide you to a better life style. We focus on nutrition, cross-fit exercise, endurance training, Yoga, increasing positivity in life and much more.  
            </p>
            <h1 className="about-home__heading about-home__heading--sub">
                Our Goal
            </h1>
            <p className="about-home__block"  style = {{textAlign:"justify"}}>
                 We, at FitLust, promise you to help you become healthy, fit, energetic, mentally healthy and calm.
                 A fit body leads to a fit soul...
    
            </p>
            <div className="about-home-flex">
                <div className="about-home__sub-block">
                    <GiMuscleUp  className="home-icon"/>
                   
                    <h4 className="mini-heading">Workout</h4>
    
                </div>
               
                <div className="about-home__sub-block">
                    <GiKnifeFork className="home-icon" />
                    <h4 className="mini-heading">Nutrition and planning</h4>
                </div>
                <div className="about-home__sub-block">
                   <GiHeartBeats className="home-icon" />
                        <h4 className="mini-heading">Yoga</h4>
 
                </div>

            </div>
        </section> 
    )
}

export default AboutHome


// className="abhout-home__heading"