import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types'
import { Card, Grid } from 'semantic-ui-react'
import CoreMetricsTable from './CoreMetricsTable'
import { getUserMetrics } from './actions';

const CoreMetrics = props => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUserMetrics(1));
        console.log("need to call user params")
    }, [])
    return (
        <Grid columns={1} divided>
            <Grid.Row>
                <Grid.Column className="wide column">
                    <Card fluid>
                        <Card.Content header='Place holder for chart' />
                        <Card.Content description='Place holder for chart' />
                        <Card.Content extra>
                        </Card.Content>
                    </Card>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column className="wide column">
                    <CoreMetricsTable />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

CoreMetrics.propTypes = {

}

export default CoreMetrics
