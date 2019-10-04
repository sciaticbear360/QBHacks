import React from "react";
import { Header, Grid } from "semantic-ui-react";
import "./Team.css";
import Person from "./Person";
export default class Team extends React.Component {
  render() {
    return (
      <section id={"Team"}>
        <div className={"teampage container"}>
          <div className={"Teamheader-contain"}>
            <Header className={"Team-head"}>Team</Header>
          </div>
          <div className={"teamgrid-contain"}>
            <Grid stackable={true} columns={3}>
              <Grid.Row>
                <Grid.Column>
                  <Person
                    image={
                      "https://react.semantic-ui.com/images/wireframe/square-image.png"
                    }
                    size={"small"}
                    name={"Rohan Deshpande"}
                    role1={"President & Founder"}
                    role2={"Director of Technology"}
                    role3={"Website Developer"}
                  ></Person>
                </Grid.Column>
                <Grid.Column>
                  <Person
                    image={
                      "https://react.semantic-ui.com/images/wireframe/square-image.png"
                    }
                    size={"small"}
                    name={"Arjun Malayapalam"}
                    role1={"President"}
                    role2={"Director of Logistics"}
                  ></Person>
                </Grid.Column>
                <Grid.Column>
                  <Person
                    image={
                      "https://react.semantic-ui.com/images/wireframe/square-image.png"
                    }
                    size={"small"}
                    name={"Darshil Patel"}
                    role1={"Organizer"}
                    role2={"Director of Marketing"}
                  ></Person>
                </Grid.Column>
              </Grid.Row>
              
              <Grid.Row>
                <Grid.Column>
                  <Person
                    image={
                      "https://react.semantic-ui.com/images/wireframe/square-image.png"
                    }
                    size={"small"}
                    name={"Guilherme"}
                    role1={"Organizer"}
                    role2={"Director of UX/UI Designer"}
                  ></Person>
                </Grid.Column>
                <Grid.Column>
                  <Person
                    image={
                      "https://react.semantic-ui.com/images/wireframe/square-image.png"
                    }
                    size={"small"}
                    name={"Daniel Baumgartner"}
                    role1={"Organizer"}
                    role2={"Director of Finance"}
                  ></Person>
                </Grid.Column>
                <Grid.Column>
                  <Person
                    image={
                      "https://react.semantic-ui.com/images/wireframe/square-image.png"
                    }
                    size={"small"}
                    name={"Jinal Shah"}
                    role1={"Organizer"}
                    role2={"Workshop Coordinator"}
                    
                  ></Person>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row coloums={2}>
              <Grid.Column>
                </Grid.Column>
                <Grid.Column>
                  <Person
                    image={
                      "https://react.semantic-ui.com/images/wireframe/square-image.png"
                    }
                    size={"small"}
                    name={"Rahul Shah"}
                    role1={"Organizer"}
                    role2={"Outreach"}
                    
                  ></Person>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        </div>
      </section>
    );
  }
}
