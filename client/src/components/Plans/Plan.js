import React,{useState,useEffect} from 'react'
import SinglePlan from './SinglePlan';


const Plan = () => {
    const [plans, setPlans] = useState();
    const getPlans = async (key)=>{
        let res = await fetch(`${process.env.REACT_APP_SERVER_URL}/show-plans`, {
            method: "GET", headers: {
                'Content-Type': 'application/json'
            },
        });
        
        let data = await res.json();
        setPlans(data.plans);
    }
    useEffect(() =>{
        getPlans();
    },[true]);
  return ( plans &&
    <>
        <div className = "container pb-4" >
        <h3 className = 'mb-4 text-center'>Applications</h3>
        <div id = "articles-box" style={{maxHeight: "100vh"}}>
            {
                plans.map((element,index)=>{
                    return (<SinglePlan key ={index} data = {element}/>)
                })
            }
            
        </div>
    </div>
    </>
  )
}

export default Plan