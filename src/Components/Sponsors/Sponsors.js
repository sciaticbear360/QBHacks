import React from "react";
import { Header, Grid,Image } from "semantic-ui-react";
import "./Sponsors.css";
import QBLC from './Sponsor/QBLC.jpg';
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
                  Shoot us an email at <a href="mailto:sponsor@qbhacks.org">sponsor@qbhacks.org</a>
                  <div className={"sponsor-grid"}>
                    <Grid stackable={true} columns={3}>
                        <Grid.Column>
                        </Grid.Column>
                        <Grid.Column>
                        <a rel="noopener noreferrer"  target="_blank" href={"https://www.quaker-bridge.com/"}> 
                          <Image className={"sponsor-image"} src={QBLC}></Image>
                          </a>
                        </Grid.Column>
                        <Grid.Column>
                        </Grid.Column>
                    </Grid>
                  </div>
              </Header>
          </div>
        </div>
      </section>
    );
  }
}
