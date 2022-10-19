import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";
import api from '../api/data';
import Datacell from "../components/Datacell/Datacell";
import Card from "../components/Card/Card";
import "./css/crud.css"
import { AiOutlineSearch } from "react-icons/ai";



function Crud(props){
    // console.log("crud");
    let [enteries,setEnteries] = useState([]);

    useEffect(()=>{
        fillData();  
    },[]);

    function fillData(){
        api.get("/data").then((response)=>{
            setEnteries(response.data);
        })
    }

    async function deleteEntry(id){
        await api.delete(`/data/${id}`);
        fillData();
    }

    async function editEntry(id,newData){
        console.log(id, newData);
    }

    function onSearch(st){
        let newArr = [];
        api.get("/data").then((response)=>{newArr = response.data.filter((entry)=>{
            return (entry.uname.toLowerCase().indexOf(st.toLowerCase()) !== -1 || entry.email.toLowerCase().indexOf(st.toLowerCase()) !== -1);
        })
        setEnteries(newArr);
        });
        
    }

    function isAdmin(){
        return(
            <Card heading="Crud" showCard={false} showHeading={false}>
                <div className="search-bar-holder">
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2 w-50 search-style-siri"
                            aria-label="Search"
                            onChange={(e)=>{
                                onSearch(e.target.value);
                            }}
                        />
                        <Button variant="success"><AiOutlineSearch size={25}/></Button>
                    </Form>
                </div>
                <Datacell totalData={enteries} delEntry={deleteEntry} updateEntry={editEntry}/>
            </Card>
        );
    }

    function pleaseLogIn(){
        return(
            <Card heading="! Only Admin Can Access This !" showCard={false} showHeading={true}>
                <Card heading="Log In as the Admin to perform CRUD operations" showCard={false} showHeading={true} />
            </Card>
        );
    }

    return(
        (props.userLoggedIn === "admin") ? isAdmin() : pleaseLogIn()
    );
}

export default Crud;