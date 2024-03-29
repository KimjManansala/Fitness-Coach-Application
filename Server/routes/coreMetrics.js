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

    const userMetrics = getUserCoreMetrics(userId);
    res.status(200);
    res.send(userMetrics)
})

module.exports = router;
