var express = require('express');
var router = express.Router();
const categoryController = require('../controllers/categoryController.js');

router.get('/', function(req, res, next) {
    categoryController.getAllCategories(req, res);
});

router.get('/:idcategory', function(req, res, next) {
    var idcategory = req.params.idcategory;
    categoryController.getCategoryById(req, res, idcategory);
});

module.exports = router;
