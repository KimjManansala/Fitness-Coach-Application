
// user service should handle all buisness related logic
// To obtain data from db use the user database file


export function getAllUser(user_type) {
    if (user_type) {
            // Should return a list of all users in given user_type
        return []
    } else {
        // Should return a list of all users
        return []
    }
}

export function logInUser() {
    // I think we should only allow users to log in via google for now
    // Should implement oauth for google http://www.passportjs.org/docs/google/
}

export function createUser() {
    // Function to create a new user (Should sign up with google as well)
}