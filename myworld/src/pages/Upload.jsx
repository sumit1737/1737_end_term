import React from "react";
import { Button } from "react-bootstrap";
import Card from "../components/Card/Card";
import GalleryCard from "../components/GalleryCard/GalleryCard";
import "./css/upload.css"
import { AiOutlineCloudUpload } from "react-icons/ai";
import api from '../api/data';
import { useEffect, useState } from "react";


function Upload(props){

    let [enteries,setEnteries] = useState([]);
    let [username,setUserName] = useState("");
    let [email,setEmail] = useState("");
    let [password,setPassword] = useState("");
    let [id,setId] = useState(-1);
    let [imgEle, setImgEle] = useState(null);

    useEffect(()=>{
        fillData();
    },[]);

    function fillData(){
        api.get("/data").then((response)=>{
            for(let i=0; i<response.data.length; ++i){
                if(response.data[i].uname === props.userLoggedIn){
                    setEnteries(response.data[i].images);
                    setUserName(response.data[i].uname);
                    setEmail(response.data[i].email);
                    setPassword(response.data[i].password);
                    setId(response.data[i].id);
                    break;
                }
            }
            
        })
    }

    async function deleteEntry(idx){
        let yesDelete = window.confirm("Do you want to delete this post?");
        if(yesDelete){
            let newArr = enteries;
            newArr.splice(idx,1);
            let req = {
                "uname": username,
                "email": email,
                "password": password,
                "images": newArr,
            }
            await api.put(`/data/${id}`, req);
            fillData();
        }
    }

    async function upload(){
        
        let img = imgEle;
        if(img !== null && img.src !== ""){
            let imgCanvas = document.createElement("canvas"),
            imgContext = imgCanvas.getContext("2d");

            // Make sure canvas is as big as the picture
            imgCanvas.width = img.width;
            imgCanvas.height = img.height;

            // // Draw image into canvas element
            imgContext.drawImage(img, 0, 0, img.width, img.height);

            // Get canvas contents as a data URL
            var imgAsDataURL = imgCanvas.toDataURL("image/png");
            // console.log(imgAsDataURL);
            let newArr = enteries;
            newArr.push(imgAsDataURL);
            let req = {
                "uname": username,
                "email": email,
                "password": password,
                "images": newArr,
            }
            await api.put(`/data/${id}`, req);
            img.src = "";
            fillData();
        }else{
            alert("Select an image to upload first");
        }

    }

    function pleaseLogIn(){
        return(
            <Card heading="! Only Registered Users Can Access This !" showCard={false} showHeading={true}>
                <Card heading="Log In to upload images" showCard={false} showHeading={true} />
            </Card>
        );
    }

    return(
        <div>
            {props.isLoggedIn ? <Card heading="Upload New Content" showCard={false} showHeading={true} showBr={false}>
                
                <div className="upload-button-holder">
                    <Button variant="primary" onClick={upload}>Upload Image</Button>
                </div>
                <div className="input-bundle">
                    <Card heading="Upload New Content" showCard={false} showHeading={false} showBr={false}>
                        <label htmlFor="pic-upload" className="upload-label-holder">
                            <AiOutlineCloudUpload size={40} />
                            <input id="pic-upload" name="pic-upload" type={"file"} onChange={(e)=>{
                                let img = document.getElementById("ig");
                                img.src = URL.createObjectURL(document.getElementById("pic-upload").files[0]);
                                setImgEle(img);
                            }}></input>
                        </label>
                        <div id="disp-img" className="upload-button-holder">
                            <img src="" id="ig" alt="images"></img>
                        </div>
                    </Card>
                </div>

                <Card heading="Upload New Content" showCard={false} showHeading={false} showBr={false}>
                    <div className="new-img-upload">
                        {enteries.map((obj,idx)=>{
                            return <GalleryCard obj={obj} k={idx} content={null} deleteEntry={deleteEntry} />
                        })}
                    </div>
                </Card>
            </Card>: pleaseLogIn()}
        </div>
    );
}

export default Upload;