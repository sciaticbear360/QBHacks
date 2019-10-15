import React from "react";
import { Header, Grid } from "semantic-ui-react";
import "./Sponsors.css";
export default class Schedule extends React.Component {
  render() {
    return (
      <section id={"Sponsors"}>
        <div className={"Sponsorspage container"}>
          <div className={"Sponsorsheader-contain"}>
            <Header className={"Sponsors-head"}>Sponsors</Header>
          </div>

          <div  className={"sponsor-message-contain"}>
              <Header className={"sponsor-message"}>
                  QuakerBridgeHacks enables students to think big and code big to make a better change in the society.<br/>
                  Interested in sponsoring our hackathon?
                  <br/>
                  <br/>
                  Send us an email at <a href="mailto:sponsor@montgomeryhacks.com">sponsor@QBHacks.com</a>

              </Header>
          </div>
        </div>
      </section>
    );
  }
}
