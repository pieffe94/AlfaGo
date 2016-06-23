var express = require('express');
var router = express.Router();
const subCategoryController = require('../controllers/subCategoryController.js');

router.get('/', function(req, res, next) {
    subCategoryController.getAllSubCategories(req, res);
});

router.get('/:idsubcategory', function(req, res, next) {
    var idsubcategory = req.params.idsubcategory;
    subCategoryController.getSubCategoryById(req, res, idsubcategory);
});

router.get('/:idsubcategory/all', function(req, res, next) {
    var idsubcategory = req.params.idsubcategory;
    subCategoryController.getProductBySubCategory(req, res, idsubcategory);
});

module.exports = router;
