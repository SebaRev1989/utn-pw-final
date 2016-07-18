exports.index = function(req, res) {
	var pacId = req.params.pacId;
	req.getConnection(function(err, connection) {
		connection.query('SELECT * FROM paciente WHERE pacId = ? ', [pacId], function(err, rows) {
			if (err) {
				console.log("Error al buscar paciente: %s", err);
			} else {
				res.render('ch/index.ejs', {pac : rows});
			}
		});
	});
};

exports.newCH = function(req, res) {
	req.getConnection(function(err, connection) {
		connection.query('SELECT * FROM medico ORDER BY apellido ASC, nombre ASC', function(err, rows) {
			if (err) {
				console.log("Error al buscar medicos: %s", err);
			} else {
				res.render('ch/newCH.ejs', {med : rows, pacId : req.params.pacId});
			}
		})
	});
}

exports.createCH = function(req, res) {
	var fechaActual = new Date();
	req.getConnection(function(err, connection) {
		var data = {
			pacId 		: req.params.pacId,
			medId 		: req.body.medId,
			fecha 		: fechaActual,
			descripcion : req.body.historia
		};
		connection.query("INSERT INTO histClinica SET ? ", [data], function(err, rows) {
			if (err) {
				console.log("Error al inertar historia clinica: %s", err);
			} else {
				console.log("Historia clinica actualizada correctamente");
			}
			res.redirect('/patients');
		});
	});
}