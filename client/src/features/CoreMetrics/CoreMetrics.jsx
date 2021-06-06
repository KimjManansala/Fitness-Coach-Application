import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Card, Grid } from 'semantic-ui-react'
import CoreMetricsTable from './CoreMetricsTable'
import { getUserMetrics } from './actions';

const CoreMetrics = props => {
    const dispatch = useDispatch()
    const { coreMetricsReducer } = useSelector(state => state)
    useEffect(() => {
        dispatch(getUserMetrics(1));
    }, [])
    return (
        <Grid columns={1} divided>
            <Grid.Row>
                <Grid.Column className="wide column">
                    <Card fluid={true}>
                        <Card.Content header='Place holder for chart' />
                        <Card.Content description='Place holder for chart' />
                        <Card.Content extra>
                        </Card.Content>
                    </Card>
                </Grid.Column>
            </Grid.Row>
            {coreMetricsReducer.userMetrics?.workouts && (
                <Grid.Row>
                    <Grid.Column className="wide column">
                        <CoreMetricsTable
                            workoutList={coreMetricsReducer.userMetrics.workouts}
                        />
                    </Grid.Column>
                </Grid.Row>
            )}
        </Grid>
    )
}

CoreMetrics.propTypes = {

}

export default CoreMetrics
