const db = require('../controllers/database.js');

module.exports.getAllProducts = function(req, res) {
	db.any("SELECT * FROM product")
		.then(function (data) {
			res.send(data);
		})
		.catch(function (error) {
			console.error(error);
			return error;
		});
}

module.exports.getProductById = function(req, res, idproduct) {
	var query = `SELECT * FROM product WHERE idproduct=${idproduct}`;
	db.any(query)
		.then(function (data) {
			res.send(data);
		})
		.catch(function (error) {
			console.error(error);
			return error;
		});
}