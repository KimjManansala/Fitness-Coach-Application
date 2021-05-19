
function getUserCoreMetrics(userId) {
    // this will handle business logic for userMetric return mock data for now

    return {
            email: "test@test.com",
            weight: 155,
            weightGoal: 150,
            workouts: [
                {
                    date: "date epoch",
                    weight: 155,
                    exercises: [
                        {
                            bench: 100
                        }
                    ]
                }
            ]
        }
}


module.exports = {
    getUserCoreMetrics
}