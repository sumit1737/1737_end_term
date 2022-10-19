import React, { useState } from "react";
import { Button } from "react-bootstrap";
import api from "../api/data"
import "./css/contactForm.css"
import "./css/login.css"
import { useNavigate } from "react-router-dom";


function Login(props){
    let [username,setUserName] = useState("");
    let [email,setEmail] = useState("");
    let [password,setPassword] = useState("");
    let navigate = useNavigate();

    async function clickedL(event){
        event.preventDefault();
        let correct=false;
        let res = await api.get("/data");
        for(let i=0; i<res.data.length; ++i){
            if(res.data[i].uname === username && res.data[i].password === password){
                correct = true;
                break;
            }
        }
        if(!correct)alert("wrong useranme or password. Please input again!")
        else{
            props.toggleLogIn(true,username);
            navigate("/");
        }
        clearFields();
        
    }

    async function clickedS(event){
        event.preventDefault();
        alert("Thank You For Signing In");
        props.toggleLogIn(true,username);
        let req = {
            "uname": username,
            "email": email,
            "password": password,
            "images": []
        }
        console.log(req);
        let res = await api.post("/data",req);
        res = await api.get("/data");
        console.log(res.data);
        clearFields();
        navigate("/");
    }

    function clearFields(){
        setUserName("");
        setEmail("");
        setPassword("");
    }

    return(
        <div>
            <div className={props.hasAccount ? "login-form-siri" : "signin-form-siri"} >
                <div className="form-container-siri">
                    <form method="POST" id="contactForm" name="contactForm" className="contactForm">
                        <div className="row">
                            <div className="col-md-12"> 
                                {!props.hasAccount && <div className="form-group">
                                    <label className="label label-siri" htmlFor="email">Email Address</label>
                                    <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" className="form-control input-style-siri" name="email" id="email" placeholder="Email" required />
                                </div>}
                            </div>
                            <div className="col-md-12"> 
                                <div className="form-group">
                                    <label className="label label-siri" htmlFor="uname">Username</label>
                                    <input value={username} onChange={(e)=>{setUserName(e.target.value)}} type="text" className="form-control input-style-siri" name="uname" id="uname" placeholder="Username" required />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label className="label label-siri" htmlFor="subject">Password</label>
                                    <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" className="form-control input-style-siri" name="passwd" id="passwd" placeholder="Password" required />
                                </div>
                            </div>
                            <div className="col-md-12 send-msg-siri">
                                <div className="form-group">
                                    <Button type="submit" variant="primary" onClick={props.hasAccount ? function(e) {clickedL(e)} : function(e) {clickedS(e)}}>{props.hasAccount ? "Login" : "Sign Up"}</Button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;