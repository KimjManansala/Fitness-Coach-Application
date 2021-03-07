import React from 'react'
import PropTypes from 'prop-types'
const TrainerPageContainer = () => {
    return (
        <div class="table-container">
            <table class="table is-hoverable">
              <thead>
                <tr>
                  <th>Client Name</th>
                  <th>Workout History</th>
                  <th>Client Goals</th>
                  <th>Payment History</th>
                </tr>

              </thead>
            </table>
        </div>
    )
}

TrainerPageContainer.propTypes = {

}

export default TrainerPageContainer
