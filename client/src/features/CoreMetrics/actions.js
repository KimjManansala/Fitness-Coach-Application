import axios from "axios";
import { UPDATE_USER_METRICS } from "./actionTypes";

export function updateUserMetrics(payload) {
    return {
        type: UPDATE_USER_METRICS,
        payload,
    }
}

export function getUserMetricsAPI(userId) {
    return axios.get('/user_metrics', {params: {
        userId,
    }})
}

export function getUserMetrics(userId) {
        return async (dispatch) => {
            try {
                const getUserMetricsRes = await getUserMetricsAPI(userId);
                dispatch(updateUserMetrics(getUserMetricsRes.data))
                
            } catch (error) {
                console.log('error')
            }

        }
}
