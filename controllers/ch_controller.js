exports.index = function(req, res) {
	var pacId = req.params.pacId;
	req.getConnection(function(err, connection) {
		connection.query('SELECT * FROM paciente WHERE pacId = ? ', [pacId], function(err, rows) {
			if (err) {
				console.log("Error al buscar paciente: %s", err);
			} else {
				res.render('ch/index.ejs', {data : rows});
			}
		});
	});
};