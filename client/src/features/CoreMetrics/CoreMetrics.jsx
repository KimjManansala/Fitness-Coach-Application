import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Card } from 'semantic-ui-react'
import CoreMetricsTable from './CoreMetricsTable'

const CoreMetrics = props => {
    useEffect(() => {
        console.log('hello how are you')
    })
    return (
        <React.Fragment>
            <Card>
                <Card.Content header='Place holder for chart' />
                <Card.Content description='Place holder for chart' />
                <Card.Content extra>
                </Card.Content>
            </Card>
            <CoreMetricsTable />
            </React.Fragment>
    )
}

CoreMetrics.propTypes = {

}

export default CoreMetrics
