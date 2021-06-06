import { UPDATE_USER_METRICS } from "./actionTypes"

export const coreMetricsDefaultState = {
    userGoals: {
        bodyWeight: 0,
        bench: 225,
    },
    userMetrics: {},
}

export const coreMetricsReducer = (state = coreMetricsDefaultState, action) => {
    switch (action.type) {
        case UPDATE_USER_METRICS:
            return {
                ...state,
                userMetrics: action.payload,
            }
        default:
            return {
                ...state,
            }
    }
}
