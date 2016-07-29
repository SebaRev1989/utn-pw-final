exports.index = function(req, res) {
	var pacId = req.params.pacId;
	var consulta = 'SELECT histClinica.fecha AS fecha, histClinica.descripcion AS descripcion, paciente.apellido '
		+ 'AS pacApellido, paciente.nombre AS pacNombre, medico.apellido AS medApellido, medico.nombre AS medNombre, '
		+ 'paciente.pacId AS pacId FROM histClinica INNER JOIN paciente ON histClinica.pacId = paciente.pacId '
		+ 'INNER JOIN medico ON histClinica.medId = medico.medId WHERE paciente.pacId = ? ORDER BY histClinica.fecha ASC';
	req.getConnection(function(err, connection) {
		connection.query(consulta, [pacId], function(err, rows) {
			if (err) {
				console.log("Error al buscar historia clinica: %s", err);
			} else {
				if (rows.length === 0) {
					var consulta = 'SELECT pacId AS pacId, apellido AS pacApellido, nombre AS pacNombre '
						+ 'FROM paciente WHERE pacId = ?';
					connection.query(consulta, [pacId], function(err, rows) {
						if (err) {
							console.log("Error al buscar paciente: %s", err);
						} else {
							res.render('ch/index.ejs', {data : rows});
						}
					});
				} else {
					res.render('ch/index.ejs', {data : rows});
				}
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
			res.redirect('/ch/index/' + req.params.pacId);
		});
	});
}