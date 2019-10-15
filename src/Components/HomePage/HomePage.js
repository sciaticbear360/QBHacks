import React from "react";
import { Grid, Header, Button,Image } from "semantic-ui-react";
import "./HomePage.css";
import Logo from './logo1.png';
export default class HomePage extends React.Component {
  render() {
    return (
      <section id="home">
        <div className={"homepage container"}>
          <Grid columns={2} className={"home-grid"} stackable={true}>
            <Grid.Row>
              <Grid.Column>
                <Image className={"logo"} src={Logo}>

                </Image>
              </Grid.Column>
              <Grid.Column>
                <div className={"container"}>
                  <Grid.Row>
                    <Header className={"hook"}>Think Big. Code Big.</Header>
                  </Grid.Row>

                  <Grid.Row>
                    <Header className={"name"}>QuakerBridgeHacks</Header>
                  </Grid.Row>

                  <Grid.Row>
                    <Header className={"date"}>November 16, 2019</Header>
                  </Grid.Row>
                  <Grid.Row>
                    <div className={"reg-button-contain"}>
                      <Button target={"blank"} href={"https://rohandeshpande725226.typeform.com/to/M4XEyz"}className={"reg-button"}>Register</Button>
                    </div>
                  </Grid.Row>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </section>
    );
  }
}
