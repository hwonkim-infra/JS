const path = require('path');

const express = require('express');


const router = express.Router();

router.get('/KRTAIndex', (req, res, next) => {
    res.render(__dirname + '../views/index/KR_TApprove.ejs');
})
module.exports = router;
