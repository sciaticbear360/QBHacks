import React from "react";
import { Header} from "semantic-ui-react";
import Table from 'react-bootstrap/Table'
import "./Schedule.css";
export default class Schedule extends React.Component {
  render() {
    {
      /*bot test comment*/
    }
    return (
      <section id={"schedule"}>
        <div className={"schedulepage container"}>
          <div className={"schedheader-contain"}>
            <Header className={"sched-head"}>Schedule</Header>
          </div>
          <div className={"schedule-contain"}>
            <Table responsive>
              <thead>
                <tr>
                  
                  <th>Time</th>
                  <th>Event</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  
                  <td>Check-in</td>
                  <td>8:00am-9:00am</td>
                </tr>
                <tr>
                  
                  <td>Opening Ceremony</td>
                  <td>9:00am-9:45am</td>
                </tr>
                <tr>
                  
                  <td>Getting hyped up and ready</td>
                  <td>9:45am-10:00am</td>
                </tr>
                <tr>
                  
                  <td>Hackathon Commences!</td>
                  <td>10:00am</td>
                </tr>
                <tr>
                  
                  <td>Workshop: Machine Learning and Video Analysis on Microsoft Azure</td>
                  <td>10:00am-11:30am</td>
                </tr>
                <tr>
                  
                  <td>Workshop: Introduction to HTML/CSS and Javascript</td>
                  <td>12:00pm-1:00pm</td>
                </tr>
                <tr>
                  
                  <td>Lunch Time</td>
                  <td>1:00pm-3:00pm</td>
                </tr>
                <tr>
                  
                  <td>Workshop: Introduction to Node.js</td>
                  <td>2:00pm-3:00pm</td>
                </tr>
                <tr>
                  
                  <td>Dinner Time</td>
                  <td>5:00pm-6:00pm</td>
                </tr>
                <tr>
                  
                  <td>Submit the projects</td>
                  <td>6:00pm</td>
                </tr>
                <tr>
                  
                  <td>Judging Commences</td>
                  <td>6:00pm-7:00pm</td>
                </tr>
                <tr>
                  
                  <td>Closing Ceremony & Awards</td>
                  <td>7:00pm-8:00pm</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </section>
    );
  }
}
