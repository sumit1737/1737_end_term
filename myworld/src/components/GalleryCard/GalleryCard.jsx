import React from "react";
import { Button, Image as Img } from "react-bootstrap";
import Card from "../Card/Card";
import { AiFillDelete } from "react-icons/ai";

import "./gallerycard.css";
// IMPORT THE PROPS PROPERLY SIRF YHAAN ADD KIYE HAIN OR KAHIN NHI
function GalleryCard(props){
    return(
        <div key={props.k} className="image-card">
            <Card heading="Image Card" showCard={false} showHeading={false} showBr={false}>
                <div className="image-holder">
                    <div className="direct-image-holder"><Img src={props.obj} fluid={true} /></div>
                    <div className="caption-holder">
                        <span className="caption-style">
                        {(props.content==null) ?  props.k : props.content}
                        </span>
                        {props.deleteEntry!=null && <Button variant="primary" onClick={()=>{
                            props.deleteEntry(props.k);
                        }}><AiFillDelete size={20}/></Button>}
                    </div>
                </div>
            </Card>
        </div>
    );
}

Card.defaultProps = {
    deleteEntry: null
}

export default GalleryCard;