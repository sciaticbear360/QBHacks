import React from "react";
import { Header,  Icon } from "semantic-ui-react";
import "./FAQ.css";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
export default class FAQ extends React.Component {
  render() {
    {
      /*bot test comment*/
    }
    return (
      <section id={"FAQ"}>
        <div className={"faq container"}>
          <div className={"faqheader-contain"}>
            <Header className={"faq-head"}>FAQ</Header>
          </div>
          <Accordion defaultActiveKey="">
            <div className={"questions"}>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  <Header className={"question-header"}>
                    What is a Hackathon?{" "}
                    <span className={"icon-holder"}>
                      <Icon name={"arrow down"} />
                    </span>
                  </Header>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <Header className={"answer-header"}>
                      A hackathon is best described as an “invention marathon”.
                      Anyone who has an interest in technology attends a
                      hackathon to learn, build & share their creations over the
                      course of a weekend in a relaxed and welcoming atmosphere.
                      You don’t have to be a programmer and you certainly don’t
                      have to be majoring in Computer Science.
                    </Header>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </div>
            <div className={"questions-below"}>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                  <Header className={"question-header"}>
                    What do I need to bring?{" "}
                    <span className={"icon-holder"}>
                      <Icon name={"arrow down"} />
                    </span>
                  </Header>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    <Header className={"answer-header"}>
                      Bring your computer, phone, tablets, charger, admission ticket
                      waiver form and your goverment or school id. Additionally,
                      don’t forget your creative minds too!
                    </Header>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </div>
            <div className={"questions-below"}>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="2">
                  <Header className={"question-header"}>
                    What is the cost?
                    <span className={"icon-holder"}>
                      <Icon name={"arrow down"} />
                    </span>
                  </Header>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    <Header className={"answer-header"}>
                      It is FREE! All food, beverages and cool swags will be
                      provided free. We want you to have the best experience in
                      our hackathon!
                    </Header>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </div>
            <div className={"questions-below"}>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="3">
                  <Header className={"question-header"}>
                    Can I get travel reimbursment?{" "}
                    <span className={"icon-holder"}>
                      <Icon name={"arrow down"} />
                    </span>
                  </Header>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>
                    <Header className={"answer-header"}>
                      Currently we can't provide info about the travel
                      reimbursment issue. Please check back soon!
                    </Header>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </div>
            <div className={"questions-below"}>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="4">
                  <Header className={"question-header"}>
                    Can I attend?
                    <span className={"icon-holder"}>
                      <Icon name={"arrow down"} />
                    </span>
                  </Header>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="4">
                  <Card.Body>
                    <Header className={"answer-header"}>
                      If you are a high school or undergraduate student, please come hack with us! To register, click the register button on the website and please answer the questions on the given form.
                      If you want our sponsors to look into your application, you can also provide your github or resume links in the form.  
                    </Header>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </div>

            <div className={"questions-below"}>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="5">
                  <Header className={"question-header"}>
                    What are the prizes?{" "}
                    <span className={"icon-holder"}>
                      <Icon name={"arrow down"} />
                    </span>
                  </Header>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="5">
                  <Card.Body>
                    <Header className={"answer-header"}>
                      Prizes may include technology gadgets, gift cards,
                      software software subscriptions and other cool stuff!
                    </Header>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </div>

            <div className={"questions-below"}>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="6">
                  <Header className={"question-header"}>
                    How do teams work?
                    <span className={"icon-holder"}>
                      <Icon name={"arrow down"} />
                    </span>
                  </Header>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="6">
                  <Card.Body>
                    <Header className={"answer-header"}>
                    The max team size is 4, but the minimum team size is one (meaning yes, you can work by yourself). We'd encourage you to work in a team so you can have people to learn from, bounce ideas off of, and break work down into manageable chunks!
                    </Header>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </div>
            <div className={"questions-below"}>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="7">
                  <Header className={"question-header"}>
                    Have a question?
                    <span className={"icon-holder"}>
                      <Icon name={"arrow down"} />
                    </span>
                  </Header>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="7">
                  <Card.Body>
                    <Header className={"answer-header"}>
                    Please reach out to <a href="mailto:contact@QBHacks.com">contact@QBHacks.com</a>
                    </Header>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </div>
          </Accordion>
        </div>
      </section>
    );
  }
}
