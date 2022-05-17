import React,{useState,useEffect} from 'react'
import './CustomPlan.css';
import {Container, Form,Button} from 'react-bootstrap';
import body from "../../assets/male-bodybuilder-silhouette-flexing-muscles.png"
import Switch from 'react-switch';

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
    <div id = "custom-plan" className = "container pb-5">
        
        <div className = "text-center">
            <h2 className = "mt-5" style = {{fontWeight:"700"}}><i>Free Offer From <span style = {{"color":"#899da8"}}>FIT</span>LUST</i></h2>
            <h1 className = "mt-5" style = {{fontWeight:"750","letterSpacing":"2px",fontSize:"3rem",color:"#00000"}}>Fill Out The Form Below And We’ll Personally Send You A Free Customized Fitness Plan To Help You Achieve The Head-Turning Body You’re After As Efficiently As Possible.</h1>
            <p className='mt-4' style = {{fontSize:"1.7rem"}}>Get started now to receive your individualized workout routine,<br/>daily calorie/macro targets and supplement recommendations…</p>
        </div>
        <Form style = {{fontSize:"1.3rem"}}>
            <div id ="insert-image" className = "row">
                <div className = "col-md-6" >
                    <img src = {body}></img>
                </div>
                <div className = "col-md-6">
                    <label for = "gender-form" className = "label-margin"><strong>Are you male or female?</strong></label>
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
                    <label for = "age-form" className = "label-margin"><strong>What is your age?</strong></label>
                    <div id = "age-form" style = {{width:"100px"}}>
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
                    <label for = "height-form" className = "label-margin"><strong>What is your height?</strong></label>
                    <div id = "height-form" className = "switch-style" style = {{width:"240px"}} >
                    <Form.Select aria-label="Default select example" style = {{marginRight:"10px"}}>
                        
                        {
                            height.map((obj)=>{
                                return(
                                <option>{obj}</option>
                                );
                            })

                        }
                    </Form.Select>
                        <Switch onChange={()=>{setHeightUnit(1-heightUnit)}} handleDiameter = {30}  width = {80} height = {40} uncheckedIcon = {false} checkedIcon = {false} onColor = {'#899da8'} offColor ={'#899da8'} checked = {heightUnit} 
                            id="unit-switch"
                        />
                        
                    </div>
                    <label for = "wt-form" className = "label-margin"><strong>What is your weight?</strong></label>
                    <div id = "wt-form" className = "switch-style" style = {{width:"200px"}}>
                    <Form.Control style = {{marginRight:"10px"}}
                        type="text"
                        id="input-wt"
                        placeholder = "Your weight"
                    />
                    <Switch onChange={()=>{setWeightUnit(!weightUnit)}} handleDiameter = {30}  width = {80} height = {40} uncheckedIcon = {false} checkedIcon = {false} onColor = {'#899da8'} offColor ={'#899da8'} checked = {weightUnit} 
                            id="wt-switch"
                    />
                    </div>
                </div>
            </div>
            <label for = "activity-form" className = "label-margin"><strong>How active are you during a typical week?</strong></label>
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

            <label for = "bf-form" className = "label-margin"><strong>What is your body fat percentage?</strong></label>
            <div id = "bf-form" style = {{width:"100px"}}>
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
            <label for = "situation-form" className = "label-margin"><strong>Which of the following best describes your current situation?</strong></label>
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
            <label for = "ideal-form" className = "label-margin"><strong>What would you consider to be your ultimate “ideal” physique?</strong></label>
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
            <label for = "exp-form" className = "label-margin"><strong>Do you have at least 1 year of consistent, proper lifting under your belt?</strong></label>
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

            <label for = "sp-form" className = "label-margin"><strong>What is the #1 thing that you feel is preventing you from making progress?</strong></label>
            <div id = "sp-form">
            <Form.Control
                type="text"
                id="input-wt"
            />
            </div>
            <div className = "mt-5 name-mail">
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text"  />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email"  />
                </Form.Group>
                
                <Button variant="dark" type="submit">
                    Submit
                </Button>
            </div>

        </Form>
    </div>
  )
}

export default CustomPlan