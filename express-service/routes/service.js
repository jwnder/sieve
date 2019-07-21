var express = require('express');
var cors = require('cors');
var router = express.Router();
let utils = require('../utils/utils');

/* GET home page. */
router.get('/:nmax', cors(), function (req, res, next) {
    try {
        let n = parseInt(req.params.nmax);
        let primeNumbers = utils.sieve(n);
        let medians = utils.medians(primeNumbers);
        res
        .status(200)
        .json(medians);
    } catch (err) {
        res
        .status(500)
        .jsonp({
            message: err.message
        });
        console.error(err);
    };
});

module.exports = router;