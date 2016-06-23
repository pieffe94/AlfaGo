const db = require('../controllers/database.js');

module.exports.getAllBrands = function(req, res) {
	db.any("SELECT * FROM brand")
		.then(function (data) {
			res.send(data);
		})
		.catch(function (error) {
			console.error(error);
			return error;
		});
}

module.exports.getBrandById = function(req, res, idbrand) {
	var query = `SELECT * FROM brand WHERE idbrand=${idbrand}`;
	db.any(query)
		.then(function (data) {
			res.send(data);
		})
		.catch(function (error) {
			console.error(error);
			return error;
		});
}
