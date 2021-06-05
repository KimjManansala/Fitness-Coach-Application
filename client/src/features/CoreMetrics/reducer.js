import { UPDATE_USER_METRICS } from "./actionTypes"

export const coreMetricsDefaultState = {
    workouts: [],
    userGoals: {
        bodyWeight: 0,
        bench: 225,
    },
    userMetrics: {},
}

export const coreMetricsREducer = (state = coreMetricsDefaultState, action) {
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
