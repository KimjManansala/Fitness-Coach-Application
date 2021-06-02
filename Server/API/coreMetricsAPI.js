const express = require("express");
const router = express.Router();

const bodyParser = require("body-parser");
const { getUserCoreMetrics } = require("../Service.js/coreMetricsService");
router.use(bodyParser.json());
router.use(
    bodyParser.urlencoded({
        extended: false,
    })
);


router.get('/user_metrics', (req, res) => {
    const { userId } =  req.query;
    
    const userMetrics = getUserCoreMetrics(userId);
    res.send(userMetrics)
})

module.exports = router;