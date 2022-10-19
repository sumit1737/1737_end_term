import React from "react";
// import Card from 'react-bootstrap/Card';
import Card from '../components/Card/Card';
import av1 from "./res/avatar-1.webp";
import av2 from "./res/avatar-2.webp";
import av3 from "./res/avatar-3.webp";
import av4 from "./res/avatar-4.png";

function About(){
    console.log("about");
    return(
        <div>
            <Card heading="About Us" showCard={true} images={[av1,av2,av3,av4]} content="This site is developed by me for people to upload pictures of their custom riced systems. No need to read the next card its content is same as this one." showHeading={true} showBr={true}>
                <p>The process of ricing is typically done on Linux operating systems, however it can be on any operating system. However, Linux systems are typically used because of their ease of customizability, and due to the fact that they are open source. Ricing can be done on other systems, such as Mac and Windows, however, they are usually more difficult to rice than Linux systems.</p>
                <p>Just as any operating system can be riced, any Linux distribution can also be riced. However, there are some Linux distros that are easier to rice than others. Generally, more simplistic distros, such as Arch Linux, are used as they come with less defaults and allow for more easy customization than other distros.</p>
            </Card>
        </div>
    );
}

export default About;