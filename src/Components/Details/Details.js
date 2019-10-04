import React from "react";
import { Grid, Header} from "semantic-ui-react";
import "./Details.css";
export default class About extends React.Component {
  render() {
    return (
      <section id={"details"}>
          <div className={"detailpage container"}>

          <div className={"detailheader-contain"}>
          <Header className={"Detail-head"}>Event Details</Header>
        </div>
        <Grid columns={2} className={"detail-grid"} stackable={true}>
          <Grid.Column>
            <Grid.Row>
              <Header className={"details-text"}>Date: November 16-17, 2019</Header>
            </Grid.Row>
            <Grid.Row>
              <Header className={"details-text"} >Time: 10am (Saturday) - 10am (Sunday) </Header>
            </Grid.Row>
            <Grid.Row>
              <Header  className={"details-text"}>
                Location: Mary Jacobs Memorial Library: 64 Washington St, Rocky
                Hill, NJ 08553
              </Header>
            </Grid.Row>
            <Grid.Row>
              <Header  className={"details-text"}>
                Participation: Anyone from high school to college students, who love STEM
                 can participate in this event.
              </Header>
            </Grid.Row>
          </Grid.Column>

          <Grid.Column>
          <div className={"map-contain"}>
            <iframe
              className={"map"}
              width="600"
              height="450"
              frameBorder="0"
              style={{ border: "0" }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.3367709675554!2d-74.6414084847427!3d40.40138967936694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3e7d2c6011969%3A0xd3e8ce9897c73c5!2s64+Washington+St%2C+Rocky+Hill%2C+NJ+08553!5e0!3m2!1sen!2sus!4v1565849504909!5m2!1sen!2sus"
              allowFullScreen
            />
          </div>
          </Grid.Column>
        </Grid>
        </div>
      </section>
    );
  }
}
