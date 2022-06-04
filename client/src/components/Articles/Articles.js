import React,{useState,useEffect} from 'react'
import exercise from '../../assets/training.jpg';
import nut from '../../assets/nutrition.jpg';
import supple from '../../assets/supplements.jpg';
import SingleArticle from '../SingleArticle/SingleArticle'
import { useLocation } from 'react-router-dom'
import "./Articles.css"

const Articles = () => {
 
    const [articles,setArticles] = useState([]);
    const location = useLocation();
    const [type,setType] = useState({title:"",image:"",text:""});
    var training = {title:"TRAINING ARTICLES",text:"The articles in this section focus on workout-related principles as well as general muscle building and fat loss topics. This includes information for training specific muscle groups, as well as overall principles such as workout splits, volume, rep ranges, exercise selection and other advanced techniques.",image:exercise}
    var nutrition = {title:"NUTRITION ARTICLES",text:"The articles in this section will teach you how to structure a proper muscle building and fat burning diet, including principles such as calorie intake, macronutrient breakdowns, protein, carbs, fats, pre and post workout nutrition and more.",image:nut}
    var supplements = {title:"SUPPLEMENTATION ARTICLES",text:"The articles in this section will help you sift through the endless hype out there and learn which supplements are truly worth your money (including recommended brands, dosage, timing etc.) and which ones you should avoid.",image:supple}
    const getArticle = async (key)=>{
        
        let res = await fetch(`${process.env.REACT_APP_SERVER_URL}/getarticles/${key}`, {
            method: "GET", headers: {
                'Content-Type': 'application/json'
            },
        });
        
        let data = await res.json();
        console.log(data.articles);
        setArticles(data.articles);
    }
    useEffect(()=>{
        let path = location.pathname;
        let key = "";
        if(path[path.length-1] == 'g'){
            key = path.slice(-8);
            setType(training);
            
        }
        if(path[path.length-1] == 'n'){
            key = path.slice(-9);
            setType(nutrition);

        }
        if(path[path.length-1] == 's'){
            key = path.slice(-11);
            setType(supplements);
        }
        getArticle(key);
    },[true])
    
    
    
  return (
    <div className = "container pb-4" >
        <h1 className = "mt-5">{type.title}</h1>
        <img src = {type.image} className = "mt-5" style = {{height:"20vw",width:"30vw"}}></img>
        <p style = {{"fontSize":"1.4rem",color:"gray",fontWeight:"500"}} className = "mt-5">{type.text}</p>
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