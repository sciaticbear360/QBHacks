import React from "react";
import { Header, Table } from "semantic-ui-react";
import "./Schedule.css";
export default class Schedule extends React.Component {
    render() {
        return (
            <section id={"schedule"}>
                <div className={"schedulepage container"}>
                    <div className={"schedheader-contain"}>
                        <Header className={"sched-head"}>Schedule</Header>
                    </div>
                    <div className={"schedule-contain"}>
                        <Table celled>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Time</Table.HeaderCell>
                                    <Table.HeaderCell>Place</Table.HeaderCell>
                                    <Table.HeaderCell>Event</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                 <Table.Row>
                                    <Table.Cell>Cell</Table.Cell>
                                    <Table.Cell>Cell</Table.Cell>
                                    <Table.Cell>Cell</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Cell</Table.Cell>
                                    <Table.Cell>Cell</Table.Cell>
                                    <Table.Cell>Cell</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Cell</Table.Cell>
                                    <Table.Cell>Cell</Table.Cell>
                                    <Table.Cell>Cell</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Cell</Table.Cell>
                                    <Table.Cell>Cell</Table.Cell>
                                    <Table.Cell>Cell</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Cell</Table.Cell>
                                    <Table.Cell>Cell</Table.Cell>
                                    <Table.Cell>Cell</Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </div>
                </div>
            </section>
        );
    }
}
