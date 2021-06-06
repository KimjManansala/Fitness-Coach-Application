import React from "react";
import PropTypes from 'prop-types'
import {Card, Header, Image, Table} from "semantic-ui-react";

const CoreMetricsTable = ({ workoutList }) => (
    <Card fluid={true}>
        <Table celled collapsing fluid>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>
                        Date
                    </Table.HeaderCell>
                    <Table.HeaderCell>
                        Workout Name
                    </Table.HeaderCell>
                    <Table.HeaderCell>
                        List of Workouts (placeholder)
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {workoutList.map((workout, index) => (
                    <Table.Row key={index}>
                        <Table.Cell>
                            {console.log(typeof(new Date(workout.date).toString()))}
                            {new Date(workout.date).toLocaleString('en-GB', { timeZone: 'UTC' })}
                        </Table.Cell>
                        <Table.Cell>
                            {workout.workoutName}
                        </Table.Cell>
                        <Table.Cell>
                            Place holder for list of list
                        </Table.Cell>
                    </Table.Row>
                ))}
            {/*    <Table.Row>*/}
            {/*        <Table.Cell>*/}
            {/*            <Header as="h4" image>*/}
            {/*                <Image*/}
            {/*                    src="https://react.semantic-ui.com/images/avatar/small/lena.png"*/}
            {/*                    rounded*/}
            {/*                    size="mini"*/}
            {/*                />*/}
            {/*                <Header.Content>*/}
            {/*                    Lena*/}
            {/*                    <Header.Subheader>Human Resources</Header.Subheader>*/}
            {/*                </Header.Content>*/}
            {/*            </Header>*/}
            {/*        </Table.Cell>*/}
            {/*        <Table.Cell>22</Table.Cell>*/}
            {/*        <Table.Cell>12</Table.Cell>*/}
            {/*    </Table.Row>*/}
            {/*    <Table.Row>*/}
            {/*        <Table.Cell>*/}
            {/*            <Header as="h4" image>*/}
            {/*                <Image*/}
            {/*                    src="https://react.semantic-ui.com/images/avatar/small/matthew.png"*/}
            {/*                    rounded*/}
            {/*                    size="mini"*/}
            {/*                />*/}
            {/*                <Header.Content>*/}
            {/*                    Matthew*/}
            {/*                    <Header.Subheader>Fabric Design</Header.Subheader>*/}
            {/*                </Header.Content>*/}
            {/*            </Header>*/}
            {/*        </Table.Cell>*/}
            {/*        <Table.Cell>15</Table.Cell>*/}
            {/*        <Table.Cell>12</Table.Cell>*/}
            {/*    </Table.Row>*/}
            {/*    <Table.Row>*/}
            {/*        <Table.Cell>*/}
            {/*            <Header as="h4" image>*/}
            {/*                <Image*/}
            {/*                    src="https://react.semantic-ui.com/images/avatar/small/lindsay.png"*/}
            {/*                    rounded*/}
            {/*                    size="mini"*/}
            {/*                />*/}
            {/*                <Header.Content>*/}
            {/*                    Lindsay*/}
            {/*                    <Header.Subheader>Entertainment</Header.Subheader>*/}
            {/*                </Header.Content>*/}
            {/*            </Header>*/}
            {/*        </Table.Cell>*/}
            {/*        <Table.Cell>12</Table.Cell>*/}
            {/*        <Table.Cell>12</Table.Cell>*/}
            {/*    </Table.Row>*/}
            {/*    <Table.Row>*/}
            {/*        <Table.Cell>*/}
            {/*            <Header as="h4" image>*/}
            {/*                <Image*/}
            {/*                    src="https://react.semantic-ui.com/images/avatar/small/mark.png"*/}
            {/*                    rounded*/}
            {/*                    size="mini"*/}
            {/*                />*/}
            {/*                <Header.Content>*/}
            {/*                    Mark*/}
            {/*                    <Header.Subheader>Executive</Header.Subheader>*/}
            {/*                </Header.Content>*/}
            {/*            </Header>*/}
            {/*        </Table.Cell>*/}
            {/*        <Table.Cell>11</Table.Cell>*/}
            {/*        <Table.Cell>12</Table.Cell>*/}
            {/*    </Table.Row>*/}
            </Table.Body>
        </Table>
    </Card>
);

CoreMetricsTable.propTypes = {
    workoutList: PropTypes.arrayOf(PropTypes.shape({
        date: PropTypes.number,
    }))
}

export default CoreMetricsTable;
