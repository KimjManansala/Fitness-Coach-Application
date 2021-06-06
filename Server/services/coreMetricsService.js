
function getUserCoreMetrics(userId) {
    // this will handle business logic for userMetric return mock data for now

    return {
        email: "test@test.com",
        weight: 155,
        weightGoal: 150,
        workouts: [
            {
                date: 1622942517,
                weight: 155,
                workoutName: 'Push Day',
                exercises: [
                    {
                        bench: 100
                    }
                ]
            },
            {
                date: 1622942517,
                weight: 155,
                workoutName: 'Pull Day',
                exercises: [
                    {
                        bench: 100
                    }
                ]
            },
            {
                date: 1622942517,
                weight: 155,
                workoutName: 'Leg Day',
                exercises: [
                    {
                        bench: 100
                    }
                ]
            },
            {
                date: 1622942517,
                weight: 155,
                workoutName: 'Push Day',
                exercises: [
                    {
                        bench: 100
                    }
                ]
            },
            {
                date: 1622942517,
                weight: 155,
                workoutName: 'Pull Day',
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
