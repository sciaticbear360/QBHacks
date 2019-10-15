import React from "react";
import {  Header} from "semantic-ui-react";
import "./about.css";
export default class About extends React.Component {
  render() {
    return (
      <section id={"about"}>
        <div className={"aboutpage container"}>
          <div className={"aboutheader-contain"}>
            <Header className={"about-head"}>About</Header>
          </div>
          <div className={"aboutdes-contain"}>
            <Header className={"about-des"}>
              In QuakerBridgeHacks (QBHacks), individuals, regardless of experience, are
              able to attend and partake in highly interactive workshops, each
              of which providing crucial real-world skills, allowing for not
              only individuals to excel in the Hackathon, but also for these
              individuals to excel in the real world with the skills they have
              learned. With this event, we hope to inspire people from all age
              groups to join the world of Computer Science and help change the
              future, bit by bit and byte by byte.
            </Header>
          </div>
        </div>
      </section>
    );
  }
}
