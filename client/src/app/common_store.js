import { UPDATE_USER_INFORMATION } from "./common_actionTypes"

export const common_store_default_state = {
    user_information: {
        user_id: 1,
        user_name: 'test_user',
        user_type: 'cliennt'
    },
}

export const commonStoreReducer = (state = common_store_default_state, action) => {
    switch (action.type) {
        case UPDATE_USER_INFORMATION:
            return {
                ...state,
                user_information: action.payload,
            }
        default:
            return {
                ...state,
            }
    }
}
