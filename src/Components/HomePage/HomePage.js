import React from "react";
import { Grid, Header, Button } from "semantic-ui-react";
import "./HomePage.css";
export default class HomePage extends React.Component {
  render() {
    return (
      <section id="home">
        <div className={"homepage container"}>
          <Grid columns={2} className={"home-grid"} stackable={true}>
            <Grid.Row>
              <Grid.Column>
                <Header>Logo Dropzone-1</Header>
              </Grid.Column>
              <Grid.Column>
                <div className={"container"}>
                  <Grid.Row>
                    <Header className={"hook"}>Think Big. Code Big.</Header>
                  </Grid.Row>

                  <Grid.Row>
                    <Header className={"name"}>MontgomeryHacks</Header>
                  </Grid.Row>

                  <Grid.Row>
                    <Header className={"date"}>September 14, 2019</Header>
                  </Grid.Row>
                  <Grid.Row>
                    <div className={"reg-button-contain"}>
                      <Button className={"reg-button"}>Register</Button>
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
