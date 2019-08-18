import React from "react";
import {Button, Header } from "semantic-ui-react";
import "./NavBar.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
export default class NavBar extends React.Component {
  state = { activeItem: " " };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    return (
      <nav className={"fixed-navbar"}>
        <Navbar className={"navbark"} sticky="top" collapseOnSelect expand="lg">
          <Navbar.Brand>
            {" "}
            <a href="/#/" className="logo">
              {" "}
              <Header className={"logo"} as="h1">
                MontgomeryHacks
              </Header>
            </a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto" />
            <Nav>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#details">Event Details</Nav.Link>
              <Nav.Link href="#schedule">Schedule</Nav.Link>
              <Nav.Link href="#Tracks">Tracks</Nav.Link>
              <Nav.Link href="#FAQ">FAQ</Nav.Link>
              <Nav.Link href="#Sponsors">Sponsors</Nav.Link>
              <Nav.Link href="#Contact">Contact Us</Nav.Link>

              <div className={"sign-in-div"}>
                <Button
                  className={"sign-in"}
                  primary
                  href={'https://rohandeshpande725226.typeform.com/to/M4XEyz'}
                >
                  Register
                </Button>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        </nav>
    );
  }
}
