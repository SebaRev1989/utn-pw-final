exports.index = function(req, res) {
	req.getConnection(function(err, connection) {
		connection.query('SELECT * FROM paciente ORDER BY apellido ASC, nombre ASC', function(err, rows) {
			if (err) {
				console.log("Error al buscar pacientes: %s", err);
			}
			res.render('patients/index.ejs', {data : rows});
		});
	});
};