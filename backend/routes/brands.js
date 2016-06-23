var express = require('express');
var router = express.Router();
const brandController = require('../controllers/brandController.js');

router.get('/', function(req, res, next) {
    brandController.getAllBrands(req, res);
});

router.get('/:idbrand', function(req, res, next) {
    var idbrand = req.params.idbrand;
    brandController.getBrandById(req, res, idbrand);
});

module.exports = router;
