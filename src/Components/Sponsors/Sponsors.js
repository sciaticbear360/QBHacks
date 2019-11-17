import React from "react";
import { Header, Grid, Image } from "semantic-ui-react";
import "./Sponsors.css";
import QBLC from "./Sponsor/QBLC.jpg";
import Wolf from "./Sponsor/wolf.png";
import Local from "./Sponsor/locahostmlh.svg";
import Venture from "./Sponsor/vent.png";
import League from "./Sponsor/ushack.png";
import Desmos from "./Sponsor/desmos.png";
import Ziplyne from "./Sponsor/ziplyne.png";
import Password from "./Sponsor/onepassword.png";
import Sashido from "./Sponsor/sashido.png";
import AOPS from "./Sponsor/aops.png";
import Cloud from "./Sponsor/cloudspoit.svg"
export default class Schedule extends React.Component {
  render() {
    return (
      <section id={"Sponsors"}>
        <div className={"Sponsorspage container"}>
          <div className={"Sponsorsheader-contain"}>
            <Header className={"Sponsors-head"}>Sponsors</Header>
          </div>

          <div className={"sponsor-message-contain"}>
            <Header className={"sponsor-message"}>
              QuakerBridgeHacks enables students to think big and code big to
              make a better change in the society.
              <br />
              Interested in sponsoring our hackathon?
              <br />
              <br />
              Shoot us an email at{" "}
              <a href="mailto:sponsor@qbhacks.org">sponsor@qbhacks.org</a>
              <div className={"sponsor-grid"}>
                <Grid stackable={true}>
                  <Grid.Row columns={3}>
                    <Grid.Column>
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href={"https://wolfram.com/"}
                      >
                        <Image className={"sponsor-image"} src={Wolf}></Image>
                      </a>
                    </Grid.Column>
                    <Grid.Column>
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href={"https://www.quaker-bridge.com/"}
                      >
                        <Image className={"sponsor-image"} src={QBLC}></Image>
                      </a>
                    </Grid.Column>
                    <Grid.Column>
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href={"https://localhost.mlh.io/"}
                      >
                        <Image className={"sponsor-image"} src={Local}></Image>
                      </a>
                    </Grid.Column>
                  </Grid.Row>

                  <Grid.Row columns={3}>
                    <Grid.Column>
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href={"https://www.ziplyne.com/"}
                      >
                        <Image
                          className={"sponsor-image"}
                          src={Ziplyne}
                        ></Image>
                      </a>
                    </Grid.Column>
                    <Grid.Column>
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href={"https://1password.com/"}
                      >
                        <Image
                          className={"sponsor-image"}
                          src={Password}
                        ></Image>
                      </a>
                    </Grid.Column>
                    <Grid.Column>
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href={"https://www.desmos.com/"}
                      >
                        <Image className={"sponsor-image"} src={Desmos}></Image>
                      </a>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row columns={3}>
                    <Grid.Column>
                    <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href={"https://cloudsploit.com/"}
                      >
                        <Image
                          className={"sponsor-image"}
                          src={Cloud}
                        ></Image>
                      </a>
                    </Grid.Column>
                    <Grid.Column>
                      {" "}
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href={"https://www.sashido.io/en/"}
                      >
                        <Image
                          className={"sponsor-image"}
                          src={Sashido}
                        ></Image>
                      </a>
                    </Grid.Column>
                    <Grid.Column>
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href={"https://artofproblemsolving.com/"}
                      >
                        <Image className={"sponsor-image"} src={AOPS}></Image>
                      </a>
                    </Grid.Column>
                  </Grid.Row>

                  <div className={"partnerheader-contain"}>
                    <Header className={"Partner-head"}>Partners</Header>
                  </div>

                  <Grid.Row columns={2}>
                    <Grid.Column>
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href={"http://www.18techventures.com/"}
                      >
                        <Image
                          className={"sponsor-image"}
                          src={Venture}
                        ></Image>
                      </a>
                    </Grid.Column>
                    <Grid.Column>
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href={"https://www.ushackathonleague.com/"}
                      >
                        <Image className={"sponsor-image"} src={League}></Image>
                      </a>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </div>
            </Header>
          </div>
        </div>
      </section>
    );
  }
}
