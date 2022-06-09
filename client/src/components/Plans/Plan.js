import React, { useState, useEffect } from 'react'
import SinglePlan from './SinglePlan';
import { toast } from 'react-toastify';
import './plans.css';

const Plan = () => {
    const [plans, setPlans] = useState();
    const [chk, setchk] = useState(false);
    const [key, setkey] = useState("");
    const [name, setname] = useState("");
    const getPlans = async (key) => {
        let res = await fetch(`${process.env.REACT_APP_SERVER_URL}/show-plans`, {
            method: "GET", headers: {
                'Content-Type': 'application/json'
            },
        });

        let data = await res.json();
        setPlans(data.plans);
    }
    useEffect(() => {
        getPlans();
    }, [true]);
    const onclick = () => {
        if ((key === process.env.REACT_APP_PASS) && name === "admin") {
            toast.success("Key Verified", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
            setchk(true);
        }
        else {
            toast.error("Incorrect Try again", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
            setkey("");
            setname("");
            setchk(false);
        }
    }
    const FormButton = props => (
        <div id="button" class="planrow">
            <button onClick={onclick}>{props.title}</button>
        </div>
    );
    return (plans &&
        <div className='planUpper'>
            {(chk === false) ?
                <>
                    <div id="loginform">
                        <div>
                            <h2 id="headerTitle">Admin Login</h2>
                            <div className='planrow'>
                                <label>Username</label>
                                <input type="text" placeholder="Username" onChange={(e) => { setname(e.target.value) }} />
                            </div>
                            <div className='planrow'>
                                <label>Password</label>
                                <input type="password" placeholder="Admin Key" onChange={(e) => { setkey(e.target.value) }} />
                            </div>
                            <FormButton title="Log in" />
                        </div>
                    </div>
                </> :
                <div className="container pb-4" >
                    <h3 className='mb-4 text-center'>Applications</h3>
                    <div id="articles-box" style={{ maxHeight: "100vh" }}>
                        {
                            plans.map((element, index) => {
                                return (<SinglePlan key={index} data={element} />)
                            })
                        }

                    </div>
                </div>
            }

        </div>
    )
}

export default Plan