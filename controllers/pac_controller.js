exports.index = function(req, res) {
	req.getConnection(function(err, connection) {
		connection.query('SELECT * FROM paciente ORDER BY apellido ASC, nombre ASC', function(err, rows) {
			if (err) {
				console.log("Error al buscar pacientes: %s", err);
			} else {
				res.render('patients/index.ejs', {data : rows});
			}
		});
	});
};

exports.newPac = function(req, res) {
	res.render('patients/newPac.ejs');
}

exports.createPac = function(req, res) {
	req.getConnection(function (err, connection) {
		var data = {
			apellido	: req.body.paciente.apellido,
			nombre		: req.body.paciente.nombre,
			dni			: req.body.paciente.dni,
			sexo		: req.body.paciente.sexo,
			fechaNac	: req.body.paciente.fechaNac
		};
		connection.query('INSERT INTO paciente SET ? ', [data], function(err, rows) {
			if (err) {
				console.log("Error al insertar paciente: %s ", err);
			} else {
				console.log("Paciente creado correctamente");
			}
			res.redirect('/patients')
		});
	});
}

exports.deletePac = function(req, res) {
	var pacId = req.params.pacId;
	req.getConnection(function (err, connection) {
		connection.query("DELETE FROM paciente WHERE pacId = ? ", [pacId], function(err, rows) {
			if (err) {
				console.log("Error borrando paciente: %s ", err);
			}
			res.redirect('/patients');
		});
	});
}

exports.updatePac = function(req, res) {
	var pacId = req.params.pacId;
	req.getConnection(function (err, connection) {
		connection.query('SELECT * FROM paciente WHERE pacId = ? ', [pacId], function(err, rows) {
			if (err) {
				console.log("Error seleccionando paciente: %s ", err);
			} else {
				res.render('patients/editPac.ejs', {data : rows});
			}
		});
	});
}

exports.savePacUpdate = function(req, res) {
	var pacId = req.params.pacId;
	req.getConnection(function (err, connection) {
		var data = {
			apellido	: req.body.paciente.apellido,
			nombre		: req.body.paciente.nombre,
			dni			: req.body.paciente.dni,
			sexo		: req.body.paciente.sexo,
			fechaNac	: req.body.paciente.fechaNac
		};
		connection.query('UPDATE paciente SET ? WHERE pacId = ?', [data, pacId], function(err, rows) {
			if (err) {
				console.log("Error al actualizar paciente: %s ", err);
			} else {
				console.log("Paciente actualizado correctamente");
			}
			res.redirect('/patients')
		});
	});
}