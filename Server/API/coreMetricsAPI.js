const express = require("express");
const router = express.Router();

const bodyParser = require("body-parser");
const { getUserCoreMetrics } = require("../services/coreMetricsService");
router.use(bodyParser.json());
router.use(
    bodyParser.urlencoded({
        extended: false,
    })
);


router.get('/user_metrics', (req, res) => {
    const { userId } =  req.query;
    console.log('hello')
    const userMetrics = getUserCoreMetrics(userId);
    res.status(200);
    res.send(userMetrics, 200)
})

module.exports = router;
