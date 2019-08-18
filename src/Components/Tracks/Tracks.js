import React from "react";
import { Header, Image, Grid, Segment } from "semantic-ui-react";
import "./Tracks.css";
import Finance from "../Tracks/hand.svg";
import Health from "../Tracks/heart.svg";
import Education from "../Tracks/creative.svg";
export default class Schedule extends React.Component {
  render() {
    return (
      <section id={"Tracks"}>
        <div className={"TrackPage container"}>
          <div className={"Trackheader-contain"}>
            <Header className={"Track-head"}>Tracks</Header>
          </div>

          <Grid stackable={true} columns={3}>
            <Grid.Row>
              <Grid.Column>
                <Segment className={"track-bubble"}>
                  <div className={"track-content container"}>
                    <div className={"track-header-div"}>
                      <Header className={"track-header"}>Finance</Header>
                    </div>
                    <div className={"track-image-div"}>
                      <Image className={"track-image"} src={Finance} />
                    </div>
                    <div className={"track-description-div"}>
                      <Header className={"track-description"}> Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. 
                      </Header>
                    </div>
                  </div>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment className={"track-bubble"}>
                  <div className={"track-content container"}>
                    <div className={"track-header-div"}>
                      <Header className={"track-header"}>Education</Header>
                    </div>
                    <div className={"track-image-div"}>
                      <Image className={"track-image"} src={Education} />
                    </div>
                    <div className={"track-description-div"}>
                      <Header className={"track-description"}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </Header>
                    </div>
                  </div>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment className={"track-bubble"}>
                  <div className={"track-content container"}>
                    <div className={"track-header-div"}>
                      <Header className={"track-header"}>Health</Header>
                    </div>
                    <div className={"track-image-div"}>
                      <Image className={"track-image"} src={Health} />
                    </div>
                    <div className={"track-description-div"}>
                      <Header className={"track-description"}>
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                      </Header>
                    </div>
                  </div>
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </section>
    );
  }
}
