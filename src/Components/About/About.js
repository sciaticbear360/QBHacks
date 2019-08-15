import React from "react";
import { Grid, Header, Button } from "semantic-ui-react";
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Header>
        </div>
      </div>
      </section>
    );  
  }
}
