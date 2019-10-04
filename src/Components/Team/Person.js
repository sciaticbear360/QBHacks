import React from "react";
import { Header, Grid, Image, Icon } from "semantic-ui-react";
import "./Team.css";

const Person = props => {
  return (
    <div> 
      <Grid rows={3}>
        <Grid.Row>
          <Image
            className={"person-image"}
            src={props.image}
            size={props.size}
            circular
          />
        </Grid.Row>
        <Grid.Row>
          <Header className={"person-name"}>{props.name}</Header>
        </Grid.Row>
        <Grid.Row>
          <Header className={"person-role"}>{props.role1}</Header>
        </Grid.Row>
        <Grid.Row>
          <Header className={"person-role"}>{props.role2}</Header>
        </Grid.Row>
        <Grid.Row>
          <div className={"person-link"}>
            <Icon className={"person-link-icon"} size={"huge"} name={"linkedin"} color={"grey"}>
              <a href={props.linkedin}></a>
            </Icon>
          </div>
        </Grid.Row>
      </Grid>
    </div>
  );
};
export default Person;
