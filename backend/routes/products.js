var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController.js');

router.get('/', function(req, res, next) {
    productController.getAllProducts(req, res);
});

router.get('/:idproduct', function(req, res, next) {
    var idproduct = req.params.idproduct;
    productController.getProductById(req, res, idproduct);
});

module.exports = router;