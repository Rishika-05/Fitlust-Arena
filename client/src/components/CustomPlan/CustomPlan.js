import React,{useState,useEffect} from 'react'
import './CustomPlan.css';
import {Container, Form,Button} from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import body from "../../assets/male-bodybuilder-silhouette-flexing-muscles.png"
import Switch from 'react-switch';
import {Bars} from 'react-loader-spinner';

const CustomPlan = () => {
    const [heightUnit,setHeightUnit] = useState(1);
    const [weightUnit,setWeightUnit] = useState(true);
    const [spinner,setSpinner] = useState(false);
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSpinner(true);
        let planObj = {
            gender: e.target.gender.value,
            age: e.target.age.value,
            height: e.target.height.value, 
            weight: e.target.wt.value,
            activity: e.target.activity.value,
            bodyFat: e.target.bf.value,
            situation: e.target.situation.value,
            idealPhysique: e.target.ideal.value,
            experience: e.target.exp.value,
            sp: e.target.sp.value,
            name: e.target.name.value,
            email: e.target.email.value
        }
        let res = await fetch(`${process.env.REACT_APP_SERVER_URL}/custom-plan`, {
            method: "POST", body: JSON.stringify(planObj), headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
          });
        let data = await res.json();
        setSpinner(false);
        if(data.status === 200){
            toast.success(data.message, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        }else{
            toast.error(data.message, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        }
        
    }
    
  return (
    <div id = "custom-plan" className = "container pb-5 p-4">
        
        <div className = "text-center">
            <h2 className = "mt-5" style = {{fontWeight:"700"}}><i>Free Offer From <span style = {{"color":"#899da8"}}>FIT</span>LUST</i></h2>
            <h1 className = "mt-5" style = {{fontWeight:"750","letterSpacing":"2px",fontSize:"2.5rem",color:"#00000"}}>Fill Out The Form Below And We’ll Personally Send You A Free Customized Fitness Plan </h1>
            <p className='mt-4' style = {{fontSize:"1.7rem"}}>Get started now to receive your individualized workout routine,<br/>daily calorie/macro targets and supplement recommendations…</p>
        </div>
        <Form style = {{fontSize:"1.3rem"}} onSubmit={handleSubmit}>
            <div id ="insert-image" className = "row">
                <div className = "col-md-6 col-sm-12 mx-auto" style = {{"height":"fit-content"}} >
                    <img src = {body} style = {{height:"50%",width:"80%"}}></img>
                </div>
                <div className = "col-md-6 col-sm-12">
                    <label for = "gender" className = "label-margin"><strong>Are you male or female?</strong></label>
                    <div id = "gender">
                    {[{type:'radio',value:"Male"}, {type:'radio',value:"Female"}].map((obj) => (
                        
                        <div key={`default-${obj.type}`} className="mb-3">
                        <Form.Check 
                            name="gender"
                            type={obj.type}
                            id={`default-${obj.type}`}
                            label={`${obj.value}`}
                            value={`${obj.value}`}
                        />
                        </div>
                    ))}
                    </div>
                    <label for = "age" className = "label-margin"><strong>What is your age?</strong></label>
                    <div id = "age" style = {{width:"100px"}}>
                    <Form.Select name = "age" aria-label="Default select example">
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
                    <label for = "height" className = "label-margin"><strong>What is your height?</strong></label>
                    <div id = "height" className = "switch-style" style = {{width:"240px"}} >
                    <Form.Select name="height" aria-label="Default select example" style = {{marginRight:"10px"}}>
                        
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
                    <label for = "wt" className = "label-margin"><strong>What is your weight?</strong></label>
                    <div id = "wt" className = "switch-style" style = {{width:"200px"}}>
                    <Form.Control name= "wt"style = {{marginRight:"10px"}}
                        type="text"
                        id="input-wt"
                        placeholder = "Your weight"
                    />
                    </div>
                </div>
            </div>
            <label for = "activity" className = "label-margin"><strong>How active are you during a typical week?</strong></label>
            <div id = "activity">
            {[{type:'radio',value:"Sedentary (little to no exercise)"}, {type:'radio',value:"Lightly Active (light exercise 1-3 days a week)"},{type:'radio',value:"Moderately Active (moderate exercise 3-5 days a week)"},{type:'radio',value:"Very Active (intense exercise 6-7 days a week)"},{type:'radio',value:"Extremely Active (intense daily exercise + physical job)"}].map((obj) => (
                
                <div key={`default-${obj.type}`} className="mb-3">
                <Form.Check name="activity"
                    type={obj.type}
                    id={`default-${obj.type}`}
                    label={`${obj.value}`}
                    value={`${obj.value}`}
                />
                </div>
            ))}
            </div>

            <label for = "bf" className = "label-margin"><strong>What is your body fat percentage?</strong></label>
            <div id = "bf" style = {{width:"100px"}}>
            <Form.Select name ="bf" aria-label="Default select example">
                
                {
                    bf.map((obj)=>{
                        return(
                        <option>{obj}</option>
                        );
                    })

                }
            </Form.Select>
            </div>
            <label for = "situation" className = "label-margin"><strong>Which of the following best describes your current situation?</strong></label>
            <div id = "situation">
            {[{type:'radio',value:"I have a low amount of body fat and want to put on muscle."}, {type:'radio',value:"I’m “skinny fat”. I need to build muscle but there’s still fat covering my abs."},{type:'radio',value:"I have decent muscle development but still need to lose a bit of fat."},{type:'radio',value:"I have high body fat and want to lean down first and foremost."}].map((obj) => (
                
                <div key={`default-${obj.type}`} className="mb-3">
                <Form.Check name = "situation"
                    type={obj.type}
                    id={`default-${obj.type}`}
                    label={`${obj.value}`}
                    value={`${obj.value}`}
                />
                </div>
            ))}
            </div>
            <label for = "ideal" className = "label-margin"><strong>What would you consider to be your ultimate “ideal” physique?</strong></label>
            <div id = "ideal">
            {[{type:'radio',value:"“Aesthetic” I want to achieve a nice balance between both muscularity and leanness."}, {type:'radio',value:"“Bulky” I want to be as big and muscular as possible and don’t mind slightly higher body fat."},{type:'radio',value:"“Fit” I’m not concerned with being super lean and muscular. I just want to look fit and healthy."}].map((obj) => (
                <div key={`default-${obj.type}`} className="mb-3">
                <Form.Check name="ideal"
                    type={obj.type}
                    id={`default-${obj.type}`}
                    label={`${obj.value}`}
                    value={`${obj.value}`}
                />
                </div>
            ))}
            </div>
            <label for = "exp" className = "label-margin"><strong>Do you have at least 1 year of consistent, proper lifting under your belt?</strong></label>
            <div id = "exp">
            {[{type:'radio',value:"Yes"},{type:'radio',value:"No"}].map((obj) => (
                <div key={`default-${obj.type}`} className="mb-3">
                <Form.Check name="exp"
                    type={obj.type}
                    id={`default-${obj.type}`}
                    label={`${obj.value}`}
                    value={`${obj.value}`}
                />
                </div>
            ))}
            </div>

            <label for = "sp" className = "label-margin"><strong>What is the #1 thing that you feel is preventing you from making progress?</strong></label>
            <div id = "sp">
            <Form.Control
            name="sp"
                type="text"
                id="input-wt"
            />
            </div>
            <div className = "mt-5 col-sm-12">
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" name="name" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email"  />
                </Form.Group>
                
                <Button variant="dark" type="submit">
                    {spinner?<Bars height="30"
    width="50"
    color='white'/>:"Submit"}
                </Button>
            </div>

        </Form>
        <ToastContainer/>
    </div>
  )
}

export default CustomPlan