const db = require('../controllers/database.js');

module.exports.getAllCategories = function(req, res) {
	db.any("SELECT * FROM category")
		.then(function (data) {
			res.send(data);
		})
		.catch(function (error) {
			console.error(error);
			return error;
		});
}

module.exports.getCategoryById = function(req, res, idcategory) {
	var query = `SELECT * FROM category WHERE idcategory=${idcategory}`;
	db.any(query)
		.then(function (data) {
			res.send(data);
		})
		.catch(function (error) {
			console.error(error);
			return error;
		});
}
