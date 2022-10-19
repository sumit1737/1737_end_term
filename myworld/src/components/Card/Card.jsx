import React from "react"
import { Card as Crd } from "react-bootstrap";
import {Button} from "react-bootstrap";
import './card.css'

function Card(props){
    function CardTemplate(arr){
        return (
            <div className="card-holder-siri">
                {arr.map((card,idx) => {
                    return(
                        <Crd className="profile-style-siri" key={idx} style={{ width: '18rem' }}>
                            <Crd.Img variant="top" src={card} />
                            <center><Crd.Body>
                                <Crd.Title><span className="card-title-siri">Sumit Saini</span></Crd.Title>
                                <Crd.Text>
                                    <span className="card-content-siri">
                                        {props.content === "" ? "Some quick example text to build on the card title and make up the bulk of the card's content." : props.content}
                                    </span>
                                </Crd.Text>
                                <Button variant="outline-primary">Go somewhere</Button>
                            </Crd.Body></center>
                        </Crd>      
                    );
                })}
            </div>
        );
    }

    return(
        <div>
            <div className="card card-siri">
                <div className="card-body card-body-siri">
                    {props.showHeading && <center><div><h1 className="heading">{props.heading}</h1></div></center>}
                    {props.showCard && CardTemplate(props.images)}
                    {props.showHeading && props.showBr && <br />}
                    {props.children}
                </div>
            </div>
        </div>
    );
}

Card.defaultProps = {
    showBr: true,
    content: ""
}


export default Card;