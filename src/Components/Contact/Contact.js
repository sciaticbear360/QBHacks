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
              <Icon size="huge" inverted color="grey" name={"discord"} />
            </div>
            <div className={"socials"}>
              <Icon size="huge" inverted color="grey" name={"linkedin"} />
            </div>
            <div className={"email-contain"}>
              <Header className={"email"}>
                Contact us:{" "}
                <a href="mailto:contact@QBHacks.com">
                  contact@QBHacks.com
                </a>
              </Header>
            </div>
            <div className={"trade-mark"}>
                <summary>© QuakerBridgeHacks 2019. All Rights Reserved.</summary>
                <p className={"credits"}> - By <a href={"https://www.linkedin.com/in/rohan-deshpande-994b23160/"}>Rohan Deshpande</a>. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
