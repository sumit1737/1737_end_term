import React from "react";
import "./datacell.css"
import {AiOutlineDelete, AiOutlineEdit} from "react-icons/ai"
import { Button } from "react-bootstrap";
// import { useEffect } from "react";
// import { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card"

function Datacell(props){
    // let [renderList,setRenderList] = useState(props.totalData);

    // useEffect(()=>{
    //     console.log(props.totalData);
    //     // setRenderList(props.totalData);
    // },[]);

    return(
        <Card heading="All Records" showCard={false} showHeading={true} showBr={false}>
        <table>
            <thead>
                <tr>
                    <th className="left-head-siri">Username</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Delete</th>
                    <th className="right-head-siri">Edit</th>
                </tr>
            </thead>
            <tbody>
                {props.totalData.map((entry,idx)=>{
                    return(
                        (entry.id!==0) && <tr key={idx}>
                            <td id="data-uname" className="left-cell-siri">{entry.uname}</td>
                            <td id="data-email">{entry.email}</td>
                            <td id="data-password">{entry.password}</td>
                            <td>
                                <Button variant="primary" onClick={()=>{
                                    props.delEntry(entry.id);
                                }}>
                                    <AiOutlineDelete size={20}/>
                                </Button>
                            </td>
                            <td className="right-cell-siri">
                                <Link to={`/edit/${entry.id}`}>
                                    <Button variant="warning" onClick={()=>{
                                        props.updateEntry(entry.id,{hi: 1, hihi: 2});
                                    }}>
                                        <AiOutlineEdit size={20}/>
                                    </Button>
                                </Link>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
           
        </Card>
    );
}

export default Datacell;