import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import cImg1 from "./res/c1.png";
import cImg2 from "./res/c2.png";
import cImg3 from "./res/c3.png";
import cImg4 from "./res/c4.png";
import cImg5 from "./res/c5.png";
import cImg6 from "./res/c6.png";




function ControlledCarousel(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  


  return (
    <div className='carousel-siri'>
     <Carousel activeIndex={index} onSelect={handleSelect} slide={props.toggleW}>
      <Carousel.Item>
        <img
          className={props.toggleW ?"d-block w-100 img-siri" : "d-block img-siri"}
          src={cImg1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={props.toggleW ?"d-block w-100 img-siri" : "d-block img-siri"}
          src={cImg2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={props.toggleW ?"d-block w-100 img-siri" : "d-block img-siri"}
          src={cImg3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={props.toggleW ?"d-block w-100 img-siri" : "d-block img-siri"}
          src={cImg4}
          alt="Fourth slide"
        />
        <Carousel.Caption>
          <h3>Fourth slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={props.toggleW ?"d-block w-100 img-siri" : "d-block img-siri"}
          src={cImg5}
          alt="Fith slide"
        />
        <Carousel.Caption>
          <h3>Fith slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={props.toggleW ?"d-block w-100 img-siri" : "d-block img-siri"}
          src={cImg6}
          alt="Sixth slide"
        />
        <Carousel.Caption>
          <h3>Sixth slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default ControlledCarousel;