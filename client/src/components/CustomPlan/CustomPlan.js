import React,{useState,useEffect} from 'react'
import './CustomPlan.css';
import {Container, Form} from 'react-bootstrap';

const CustomPlan = () => {
    const [heightUnit,setHeightUnit] = useState(1);
    const [weightUnit,setWeightUnit] = useState(true);
    var age = [];
    for(let i = 16;i<= 90;i++){
        age.push(i);
    }
    const [height,setHeight] = useState([]);
    
    var heightCms = [];
    for(let i = 120;i<= 240;i++){
        heightCms.push(i);
    }
    var heightInches = [];
    for(let i = 4;i<=8;i++){
        for(let j = 0;j<=11;j++){
            var temp = `${i}'${j}''`;
            heightInches.push(temp);
        }
    }
    var bf = [];
    for(let i = 5;i<=50;i++){
        bf.push(i);
    }
    useEffect(()=>{
        if(heightUnit){  
            setHeight(heightCms);
        }else{
            setHeight(heightInches);
        }
    },[heightUnit])
    
  return (
    <div id = "custom-plan" className = "container">
        <Form >
            <label for = "gender-form">Are you male or female?</label>
            <div id = "gender-form">
            {[{type:'radio',value:"Male"}, {type:'radio',value:"Female"}].map((obj) => (
                
                <div key={`default-${obj.type}`} className="mb-3">
                <Form.Check 
                    type={obj.type}
                    id={`default-${obj.type}`}
                    label={`${obj.value}`}
                />
                </div>
            ))}
            </div>
            <label for = "age-form">What is your age?</label>
            <div id = "age-form">
            <Form.Select aria-label="Default select example">
                <option>Age</option>
                {
                    age.map((obj)=>{
                        return(
                        <option>{obj}</option>
                        );
                    })

                }
            </Form.Select>
            </div>
            <label for = "height-form">What is your height?</label>
            <div id = "height-form">
            <Form.Select aria-label="Default select example">
                
                {
                    height.map((obj)=>{
                        return(
                        <option>{obj}</option>
                        );
                    })

                }
            </Form.Select>
                <Form.Check onClick={()=>{setHeightUnit(1-heightUnit)}}
                    type="switch"
                    id="unit-switch"
                    label={(heightUnit==true)?"CM":"INCHES"}
                />
            </div>
            <label for = "wt-form">What is your weight?</label>
            <div id = "wt-form">
            <Form.Control
                type="text"
                id="input-wt"
            />
                <Form.Check onClick={()=>{setWeightUnit(!weightUnit)}}
                    type="switch"
                    id="unit-switch-wt"
                    label={(weightUnit==true)?"kg":"lbs"}
                />
            </div>
            <label for = "activity-form">How active are you during a typical week?</label>
            <div id = "activity-form">
            {[{type:'radio',value:"Sedentary (little to no exercise)"}, {type:'radio',value:"Lightly Active (light exercise 1-3 days a week)"},{type:'radio',value:"Moderately Active (moderate exercise 3-5 days a week)"},{type:'radio',value:"Very Active (intense exercise 6-7 days a week)"},{type:'radio',value:"Extremely Active (intense daily exercise + physical job)"}].map((obj) => (
                
                <div key={`default-${obj.type}`} className="mb-3">
                <Form.Check 
                    type={obj.type}
                    id={`default-${obj.type}`}
                    label={`${obj.value}`}
                />
                </div>
            ))}
            </div>

            <label for = "bf-form">What is your body fat percentage?</label>
            <div id = "bf-form">
            <Form.Select aria-label="Default select example">
                
                {
                    bf.map((obj)=>{
                        return(
                        <option>{obj}</option>
                        );
                    })

                }
            </Form.Select>
            </div>
            <label for = "situation-form">Which of the following best describes your current situation?</label>
            <div id = "situation-form">
            {[{type:'radio',value:"I have a low amount of body fat and want to put on muscle."}, {type:'radio',value:"I’m “skinny fat”. I need to build muscle but there’s still fat covering my abs."},{type:'radio',value:"I have decent muscle development but still need to lose a bit of fat."},{type:'radio',value:"I have high body fat and want to lean down first and foremost."}].map((obj) => (
                
                <div key={`default-${obj.type}`} className="mb-3">
                <Form.Check 
                    type={obj.type}
                    id={`default-${obj.type}`}
                    label={`${obj.value}`}
                />
                </div>
            ))}
            </div>
            <label for = "ideal-form">What would you consider to be your ultimate “ideal” physique?</label>
            <div id = "ideal-form">
            {[{type:'radio',value:"“Aesthetic” I want to achieve a nice balance between both muscularity and leanness."}, {type:'radio',value:"“Bulky” I want to be as big and muscular as possible and don’t mind slightly higher body fat."},{type:'radio',value:"“Fit” I’m not concerned with being super lean and muscular. I just want to look fit and healthy."}].map((obj) => (
                <div key={`default-${obj.type}`} className="mb-3">
                <Form.Check 
                    type={obj.type}
                    id={`default-${obj.type}`}
                    label={`${obj.value}`}
                />
                </div>
            ))}
            </div>
            <label for = "exp-form">Do you have at least 1 year of consistent, proper lifting under your belt?</label>
            <div id = "exp-form">
            {[{type:'radio',value:"Yes"},{type:'radio',value:"No"}].map((obj) => (
                <div key={`default-${obj.type}`} className="mb-3">
                <Form.Check 
                    type={obj.type}
                    id={`default-${obj.type}`}
                    label={`${obj.value}`}
                />
                </div>
            ))}
            </div>

            <label for = "sp-form">What is the #1 thing that you feel is preventing you from making progress?</label>
            <div id = "sp-form">
            <Form.Control
                type="text"
                id="input-wt"
            />
            </div>
        </Form>
    </div>
  )
}

export default CustomPlan