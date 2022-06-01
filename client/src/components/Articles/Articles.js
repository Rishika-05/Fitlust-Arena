import React,{useState,useEffect} from 'react'
import exercise from '../../assets/fitness.png'
import SingleArticle from '../SingleArticle/SingleArticle'

import "./Articles.css"

const Articles = () => {
    var xmlString = "<strong>Hello</strong>";
  var dataObj = {subtitle:"Subtitle 1",image:exercise, content:xmlString}
  var articleObject = {title:"Sample Article",image:exercise,author:"Boss",type:"training",breif:"Sample breif text for row" ,data:[dataObj,dataObj,dataObj,dataObj]};
    const [articles,setArticles] = useState([]);
    
    useEffect(()=>{
        var temp = [];
        for(let i = 0;i<9;i++){
            temp.push(articleObject);
        }
        setArticles(temp);
    },[true])
    
    
    
  return (
    <div className = "container pb-4" >
        <h1 className = "mt-5">TRAINING ARTICLES</h1>
        <img src = {exercise} className = "mt-5" style = {{height:"20vw",width:"20vw"}}></img>
        <p style = {{"fontSize":"1.4rem",color:"gray",fontWeight:"500"}} className = "mt-5">The articles in this section focus on workout-related principles as well as general muscle building and fat loss topics. This includes information for training specific muscle groups, as well as overall principles such as workout splits, volume, rep ranges, exercise selection and other advanced techniques.</p>
        <h3 className = 'mb-4'>What's New</h3>
        <div id = "articles-box">
            {
                articles.map((element)=>{
                    
                    return (<SingleArticle data = {element}/>)
                })
            }
            
        </div>
    </div>
  )
}

export default Articles