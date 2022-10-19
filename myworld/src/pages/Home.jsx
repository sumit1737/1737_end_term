import React, { useEffect, useState } from "react";
import Card from '../components/Card/Card';
import ControlledCarousel from "../components/Carousel/ControlledCarousel";
import GalleryCard from "../components/GalleryCard/GalleryCard";
import { Card as Crd } from "react-bootstrap";
import api from '../api/data';
import "./css/home.css";
import settingLogo from "./res/setting.svg"
import toolsLogo from "./res/wrench.svg"
import starLogo from "./res/rating-star.svg"
import Typewriter from "typewriter-effect";

function Home(props){

    let [enteries,setEnteries] = useState([]);

    useEffect(()=>{
        fillData();
    },[]);

    function fillData(){
        api.get("/data").then((response)=>{
            let newArr = [];
            for(let i=0; i<response.data.length; ++i){
                for(let j=0; j<response.data[i].images.length; ++j){
                    newArr.push({uname: response.data[i].uname, image: response.data[i].images[j]});
                }
            }
            setEnteries(newArr);
        })


    }

    return(
        <div>
        <Card heading="Home" showCard={false} showHeading={false}>
            <Card heading="Home" showCard={false} showHeading={false}>
                <div className="first-div-siri">
                    <Card heading="Home" showCard={false} showHeading={false}>
                        <div className="content-siri">
                            <Card heading="Home" showCard={false} showHeading={false}><center><h1 className="heading">
                            {props.isLoggedIn ? <Typewriter
                                onInit={(typewriter) => {
                                typewriter
                                .typeString(`Hi,${props.userLoggedIn}`)
                                .pauseFor(100)
                                .deleteAll()
                                .typeString(
                                    "Welcome To RicingOrg"
                                )
                                .start();
                                }}
                            /> : 
                            <Typewriter
                                onInit={(typewriter) => {
                                typewriter
                                .typeString("Hi,User")
                                .pauseFor(100)
                                .deleteAll()
                                .typeString(
                                    "Welcome To RicingOrg"
                                )
                                .start();
                                }}
                            />
                            }
                            </h1></center></Card>
                            <Card heading="Home" showCard={false} showHeading={false}>
                                <span className="card-content-siri intro-siri">
                                    <p>What is ricing?</p>
                                    <p>Ricing is a process in which one customizes a computer operating system to improve the look or operation of the system. It involves the configuration of applications and the development and refining of workflows.</p>
                                    <p>Through ricing, one can create a fully customized system that fits their specific needs or desired appearance.</p>
                                </span>
                            </Card>
                        </div>
                    </Card>
                    <Card heading="We Rice your System" showCard={false} showHeading={true}>
                        <ControlledCarousel toggleW={false} ImgList={["","",""]}/>
                    </Card>
                    
                </div>
            </Card>

            <Card heading="Gallery" showCard={false} showHeading={true}>
                <div className="new-img-upload">
                        {enteries.map((obj,idx)=>{
                            return <GalleryCard obj={obj.image} k={idx} content={obj.uname}/>
                        })}
                    </div>
            </Card>

            <Card heading="Features" showCard={false} showHeading={true}>
                <div className="second-div-siri">
                    <Crd className="feature-style-siri" style={{ width: '20rem'}}>
                        <Crd.Img variant="top" src={settingLogo} width="200" height="200" />
                        <center><Crd.Body>
                            <Crd.Title><span className="card-title-siri">Setting Up</span></Crd.Title>
                            <Crd.Text>
                            <span className="card-content-siri">Setting up the system from scratch as the user wants.</span>
                            </Crd.Text>
                        </Crd.Body></center>
                    </Crd>
                    <Crd className="feature-style-siri" style={{ width: '18rem'}}>
                        <Crd.Img variant="top" src={starLogo} width="200" height="200" />
                        <center><Crd.Body>
                            <Crd.Title><span className="card-title-siri">Sexy Desktop</span></Crd.Title>
                            <Crd.Text>
                            <span className="card-content-siri">Our Riced Systems are a feature rich as well as an Eye Candy to adore!</span>
                            </Crd.Text>
                        </Crd.Body></center>
                    </Crd>
                    <Crd className="feature-style-siri" style={{ width: '18rem'}}>
                        <Crd.Img variant="top" src={toolsLogo} width="200" height="200" />
                        <center><Crd.Body>
                            <Crd.Title><span className="card-title-siri">Customizable</span></Crd.Title>
                            <Crd.Text>
                            <span className="card-content-siri">Our Systems are highly customizable even after ricing. In case the user wants to change how the system looks.</span>
                            </Crd.Text>
                        </Crd.Body></center>
                    </Crd>
                </div>
            </Card>

            <Card heading="Our Riced System" showCard={false} showHeading={true}>
                <div className="third-div-siri">
                    <ControlledCarousel toggleW={true}/>
                </div>
            </Card>
            </Card>
        </div>
    );
}

export default Home;