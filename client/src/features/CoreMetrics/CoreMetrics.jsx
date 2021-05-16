import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

const CoreMetrics = props => {
    useEffect(() => {
        console.log('hello how are you')
    })
    return (
        <div>
            Hello I will be the core metrics
        </div>
    )
}

CoreMetrics.propTypes = {

}

export default CoreMetrics
