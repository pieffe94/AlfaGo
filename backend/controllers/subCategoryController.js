const db = require('../controllers/database.js');

module.exports.getAllSubCategories = function(req, res) {
	db.any("SELECT * FROM subcategory")
		.then(function (data) {
			res.send(data);
		})
		.catch(function (error) {
			console.error(error);
			return error;
		});
}

module.exports.getSubCategoryById = function(req, res, idsubcategory) {
	var query = `SELECT * FROM subcategory WHERE idsubcategory=${idsubcategory}`;
	db.any(query)
		.then(function (data) {
			res.send(data);
		})
		.catch(function (error) {
			console.error(error);
			return error;
		});
}

module.exports.getProductBySubCategory = function(req, res, idsubcategory) {
	var query = `SELECT * FROM product WHERE idsubcategory=${idsubcategory}`;
	db.any(query)
		.then(function (data) {
			res.send(data);
		})
		.catch(function (error) {
			console.error(error);
			return error;
		});
}
