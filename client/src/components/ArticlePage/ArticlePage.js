import React,{useState,useEffect} from 'react'
import './ArticlePage.css'
import exercise from '../../assets/fitness.png'
import carbs from '../../assets/carb-backloading-diet-2.jpg'
import whatis from '../../assets/what-is-carb-backloading.jpg'
import {AiOutlineUser} from "react-icons/ai"
import {VscTypeHierarchy} from "react-icons/vsc";
import {BsArrowReturnLeft, BsArrowReturnRight} from "react-icons/bs"
import signup from '../../assets/Ger.png'

const ArticlePage = () => {
  var xml = "<strong>Hello</strong>";
  var dataObj = {subtitle:"Subtitle 1",image:exercise, content:xml}
  var articleObject = {title:"Sample Article",image:exercise,author:"Boss",type:"training",brief:"Sample breif text for row" ,data:[dataObj,dataObj,dataObj,dataObj]};
    const [articles,setArticles] = useState([]);
    
    useEffect(()=>{
        var temp = [];
        for(let i = 0;i<5;i++){
            temp.push(articleObject);
        }
        setArticles(temp);
    },[true])
  const createMarkup = (xmlString) => {
    return {__html: xmlString};
  }
  var d1Content = "<div><p>The basic concept of carb backloading has actually been around for decades, but it only took off in popularity in recent years when nutritionist and exercise scientist John Kiefer began recommending it.</p>  <p>The idea behind a carb backloading meal plan is as follows…</p> <div><p><strong>1)</strong> Keep your overall calorie and carbohydrate intake low during the morning and early afternoon, and then shift the majority of your intake to the evening hours.</p> <p><strong>2)</strong> If you do eat during the morning or midday, keep your carb intake at an absolute minimum and get the majority of the calories from protein and fat.</p> <p><strong>3)</strong> Move your training session to the early evening around 5pm, and consume most (or all) of your daily carbohydrates beginning with your post workout meal and throughout the rest of the evening.</p></div></div>";
  var d1 = {subtitle:"What is Carbs Backloading",image:whatis, content:d1Content}
  
  var dataObj = {subtitle:"Subtitle 1",image:exercise, content:d1Content}
  var dataObj = {subtitle:"Subtitle 1",image:exercise, content:d1Content}
  var articleObject = {title:"IS THE “CARB BACKLOADING DIET” EFFECTIVE? THE NO B.S FACTS",image:carbs,author:"Boss",type:"training",breif:"Sample breif text for row" ,data:[d1,d1,d1,d1]};
  return (
    <div className = "container-fluid main-box-article row">
      <div className = "col-md-9 px-5">
        <h1 className = 'mt-5'>{articleObject.title}</h1>
        <span style = {{fontSize:"1.2rem",fontWeight:"500",color:"gray",marginRight:"10px"}}><AiOutlineUser/>{articleObject.author} </span>
        <span style = {{fontSize:"1.2rem",fontWeight:"500",color:"gray"}}><VscTypeHierarchy/>{articleObject.type}</span>
        <br/>
        <img src = {articleObject.image}  className = "mb-5 mt-4"></img>
        <div id = "super-box">
          {
            articleObject.data.map((element)=>{
              return (
                <div id = "outer-article-box">
                  <h3 className = "mb-5">{element.subtitle}</h3>
                  <div >
                    <img src = {element.image} style = {{marginRight:"2%"}}></img>
                    <div dangerouslySetInnerHTML={createMarkup(element.content)} className = "mt-5" style = {{fontSize:"1.4rem"}}></div>
                  </div>
                </div>
              );
            })
            
          }
        </div>
      </div>
      <div className = "col-md-3 mt-5">
        <div>
          <h4>Recommended Posts</h4>
          {
            articles.map((element)=>{
               return(<><p><BsArrowReturnRight style = {{"marginRight":"5px"}}/><span style = {{fontWeight:"450",color:"purple",fontFamily:"sans-serif"}}>{element.title}</span>
               </p></>);
            })
          }
        </div>
        <img src = {signup} className = "mt-5"></img>
      </div>
    </div>
  )
}

export default ArticlePage