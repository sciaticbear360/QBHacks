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
                  <th>Place</th>
                  <th>Event</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                </tr>
                <tr>
                  
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                </tr>
                <tr>
                  
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </section>
    );
  }
}
