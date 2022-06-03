import React,{useState,useEffect} from 'react'
import exercise from '../../assets/fitness.png'
import SingleArticle from '../SingleArticle/SingleArticle'

import "./Articles.css"

const Articles = () => {
 
    const [articles,setArticles] = useState([]);
    
    const getArticle = async ()=>{
        
        let res = await fetch(`${process.env.REACT_APP_SERVER_URL}/retrieve`, {
            method: "GET", headers: {
                'Content-Type': 'application/json'
            },
        });
        
        let data = await res.json();
        console.log(data.articles);
        setArticles(data.articles);
    }
    useEffect(()=>{
        getArticle();
    },[true])
    
    
    
  return (
    <div className = "container pb-4" >
        <h1 className = "mt-5">TRAINING ARTICLES</h1>
        <img src = {exercise} className = "mt-5" style = {{height:"20vw",width:"20vw"}}></img>
        <p style = {{"fontSize":"1.4rem",color:"gray",fontWeight:"500"}} className = "mt-5">The articles in this section focus on workout-related principles as well as general muscle building and fat loss topics. This includes information for training specific muscle groups, as well as overall principles such as workout splits, volume, rep ranges, exercise selection and other advanced techniques.</p>
        <h3 className = 'mb-4'>What's New</h3>
        <div id = "articles-box">
            {
                articles.map((element,index)=>{
                    
                    return (<SingleArticle key ={index} data = {element}/>)
                })
            }
            
        </div>
    </div>
  )
}

export default Articles