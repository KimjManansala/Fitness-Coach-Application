import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Card, Grid } from 'semantic-ui-react'
import CoreMetricsTable from './CoreMetricsTable'

const CoreMetrics = props => {
    useEffect(() => {
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
