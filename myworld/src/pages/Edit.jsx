import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import api from "../api/data"
import "./css/contactForm.css"
import "./css/login.css"
import { useNavigate, useParams } from "react-router-dom";


function Edit(props){
    console.log("edit");
    let [username,setUserName] = useState("");
    let [email,setEmail] = useState("");
    let [password,setPassword] = useState("");
    let [imageList,setImageList] = useState([]);
    let { id } = useParams([]);
    let navigate = useNavigate();
    console.log(id);

    useEffect(()=>{
        api.get(`/data/${id}`).then((res)=>{
            setUserName(res.data.uname);
            setEmail(res.data.email);
            setPassword(res.data.password);
            setImageList(res.data.images);
        });
    },[])


    async function clickedS(event){
        event.preventDefault();
        alert("helloS");
        let req = {
            "uname": username,
            "email": email,
            "password": password,
            "images": imageList,
        }
        clearFields()
        let res = await api.put(`/data/${id}`, req);
        navigate("/crud");
    }

    function clearFields(){
        setUserName("");
        setEmail("");
        setPassword("");
    }

    return(
        <div>
            <div className="signin-form-siri" >
                <div className="form-container-siri">
                    <form method="POST" id="contactForm" name="contactForm" className="contactForm">
                        <div className="row">
                            <div className="col-md-12"> 
                                <div className="form-group">
                                    <label className="label label-siri" htmlFor="email">Email Address</label>
                                    <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" className="form-control input-style-siri" name="email" id="email" placeholder="Email" required />
                                </div>
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
                                    <Button type="submit" variant="primary" onClick={function(e) {clickedS(e)}}>Edit Entry</Button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Edit;