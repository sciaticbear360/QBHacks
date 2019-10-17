import React from "react";
import { Header, Icon } from "semantic-ui-react";
import "./Contact.css";
export default class Schedule extends React.Component {
  render() {
    return (
      <section id={"Contact"}>
        <div className={"Contactpage container"}>
          <div className={"social-links"}>
            <div className={"socials"}>
              <Icon size="huge" inverted color="grey" name={"instagram"} />
            </div>
            <div className={"socials"}>
              <Icon size="huge" inverted color="grey" name={"twitter"} />
            </div>
            <div className={"socials"}>
            <a rel="noopener noreferrer"  target="_blank" href={"https://discord.gg/uPtJZmp"}>
              <Icon size="huge" inverted color="grey" name={"discord"}>

              </Icon>
              </a>
            </div>
            <div className={"socials"}>
            <a rel="noopener noreferrer"  target="_blank" href={"https://www.linkedin.com/company/quakerbridgehacks/"}>
               <Icon size="huge" inverted color="grey" name={"linkedin"}>
              </Icon>
               </a>
            </div>
            <div className={"email-contain"}>
              <Header className={"email"}>
                Contact us:{" "}
                <a href="mailto:contact@qbhacks.org">
                 contact@qbhacks.org 
                </a>
              </Header>
            </div>
            <div className={"trade-mark"}>
                <summary>© QuakerBridgeHacks 2019. All Rights Reserved.</summary>
                <p className={"credits"}> - By <a rel="noopener noreferrer"  target="_blank" href={"https://www.linkedin.com/in/rohan-deshpande-994b23160/"}>Rohan Deshpande</a>. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
