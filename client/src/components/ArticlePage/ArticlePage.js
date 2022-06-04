import React,{useState,useEffect} from 'react'
import './ArticlePage.css'

import {AiOutlineUser} from "react-icons/ai"
import {VscTypeHierarchy} from "react-icons/vsc";
import {BsArrowReturnLeft, BsArrowReturnRight} from "react-icons/bs"
import signup from '../../assets/Ger.png'
import {useNavigate, useLocation} from 'react-router-dom';

const ArticlePage =  () => {
    const [articleObject,setArticleObject] = useState();
    const [articles,setArticles] = useState();
    const navigate = useNavigate();
    const location = useLocation();
    const getArticle = async (path)=>{
      let res = await fetch(`${process.env.REACT_APP_SERVER_URL}${path}`, {
        method: "GET", headers: {
            'Content-Type': 'application/json'
        },
      });
      let data = await res.json();
      console.log(data);
      setArticleObject(data.article);
    }
    const getRecommended = async ()=>{
          
      let res = await fetch(`${process.env.REACT_APP_SERVER_URL}/retrieve`, {
        method: "GET", headers: {
            'Content-Type': 'application/json'
        },
      });
      let data = await res.json();
      setArticles(data.articles);
      
    }

    useEffect(()=>{
      getArticle(location.pathname);
      getRecommended();
     
    },[true,location])
  const createMarkup = (xmlString) => {
    return {__html: xmlString};
  }
  
  return (
    
    
    articles && articleObject && <div className = "container-fluid main-box-article row">
      <div className = "col-md-9 px-5">
        <h1 className = 'mt-5'>{articleObject.title}</h1>
        <span style = {{fontSize:"1.2rem",fontWeight:"500",color:"gray",marginRight:"10px"}}><AiOutlineUser/>{articleObject.author} </span>
        <span style = {{fontSize:"1.2rem",fontWeight:"500",color:"gray"}}><VscTypeHierarchy/>{articleObject.type}</span>
        <br/>
        <img src={`${process.env.REACT_APP_SERVER_URL}/public/${articleObject.image.substring(7)}`}  className = "mb-5 mt-4"></img>
        <div id = "super-box">
          {
            articleObject.data.map((element)=>{
              return (
                <div id = "outer-article-box">
                  <h3 className = "mb-5">{element.subtitle}</h3>
                  <div >
                    <img src = {`${process.env.REACT_APP_SERVER_URL}/public/${element.image.substring(7)}`} style = {{marginRight:"2%"}}></img>
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
            articles.slice(0,7).map((element)=>{
               return( (articleObject._id != element._id)&&<p onClick = {()=> {navigate(`/articles/${element._id}`)}}><BsArrowReturnRight style = {{"marginRight":"5px"}}/><span style = {{fontWeight:"450",color:"purple",fontFamily:"sans-serif"}} >{element.title}</span>
               </p>);
            })
          }
        </div>
        <img src = {signup} className = "mt-5"></img>
      </div>
     </div>
   
  )
}

export default ArticlePage