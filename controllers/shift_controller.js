var moment = require('moment');

exports.index = function(req, res) {
	req.getConnection(function(err, connection) {
		connection.query('SELECT DISTINCT fecha FROM turno ORDER BY fecha ASC', function(err, rows) {
			if (err) {
				console.log("Error al buscar turnos: %s", err);
			} else {
				res.render('shifts/index.ejs', {data : rows, moment : moment});
			}
		});
	});
}

exports.enableShifts = function(req, res) {
	req.getConnection(function(err, connection) {
		connection.query('SELECT * FROM turno WHERE fecha = ?', [req.body.turnos.fecha], function(err, rows) {
			if (err) {
				console.log("Error al buscar turnos: %s", err);
			} else {
				if (rows.length === 0) {
					connection.query('SELECT medId FROM medico', function(err, rows) {
						if (err) {
							console.log("Error al buscar medicos: %s", err);
						} else {
							for (var i = 0; i < rows.length; i++) {
								connection.query('INSERT INTO turno SET medId = ?, fecha = ?, hora = ? ',
									[rows[i].medId, req.body.turnos.fecha, '17:00:00'], function(err, rows) {
										if (err) {
											console.log("No se puede crear turnos: %s", err);
										}
									});
								connection.query('INSERT INTO turno SET medId = ?, fecha = ?, hora = ? ',
									[rows[i].medId, req.body.turnos.fecha, '18:00:00'], function(err, rows) {
										if (err) {
											console.log("No se puede crear turnos: %s", err);
										}
									});
								connection.query('INSERT INTO turno SET medId = ?, fecha = ?, hora = ? ',
									[rows[i].medId, req.body.turnos.fecha, '19:00:00'], function(err, rows) {
										if (err) {
											console.log("No se puede crear turnos: %s", err);
										}
									});
								connection.query('INSERT INTO turno SET medId = ?, fecha = ?, hora = ? ',
									[rows[i].medId, req.body.turnos.fecha, '20:00:00'], function(err, rows) {
										if (err) {
											console.log("No se puede crear turnos: %s", err);
										}
									});
							}
							req.getConnection(function(err, connection) {
								connection.query('SELECT DISTINCT fecha FROM turno ORDER BY fecha ASC', function(err, rows) {
									if (err) {
										console.log("Error al buscar turnos: %s", err);
									} else {
										res.render('shifts/index.ejs', {data : rows, moment : moment});
									}
								});
							});
						}
					});
				} else {
					console.log("Turnos ya creados");
					req.getConnection(function(err, connection) {
						connection.query('SELECT DISTINCT fecha FROM turno ORDER BY fecha ASC', function(err, rows) {
							if (err) {
								console.log("Error al buscar turnos: %s", err);
							} else {
								res.render('shifts/index.ejs', {data : rows, moment : moment});
							}
						});
					});
				}
			}
		});
	});
}

exports.listShifts = function(req, res) {
	var fecha = req.params.fecha;
	req.getConnection(function(err, connection) {
		var consulta = 'SELECT turno.turnoId, turno.fecha, turno.hora, turno.pacId, medico.apellido AS medicoApellido, '
			+ 'medico.nombre AS medicoNombre FROM turno INNER JOIN medico ON turno.medId = medico.medId '
			+ 'WHERE turno.fecha = ?';
		connection.query(consulta, [fecha], function(err, rows) {
			if (err) {
				console.log("Error al buscar turnos: %s", err);
			} else {
				res.render('shifts/listShifts.ejs', {data : rows, moment : moment});
			}
		});
	});
}

exports.newShift = function(req, res) {
	var turnoId = req.params.turnoId;
	var consulta = 'SELECT turno.turnoId, turno.fecha, turno.hora, medico.apellido AS medicoApellido, '
		+ 'medico.nombre AS medicoNombre FROM turno INNER JOIN medico ON turno.medId = medico.medId '
		+ 'WHERE turno.turnoId = ?';
	req.getConnection(function(err, connection) {
		connection.query(consulta, [turnoId], function (err, shiftsRows) {
			if (err) {
				console.log("Error al buscar turno: %s", err);
			} else {
				connection.query('SELECT * FROM paciente ORDER BY apellido ASC, nombre ASC', function(err, pacientRows) {
					if (err) {
						console.log("Error al buscar pacientes: %s", err);
					} else {
						res.render('shifts/assignShift.ejs', {data : shiftsRows, pacient : pacientRows, moment : moment});
					}
				});
			}
		});
	});
}

exports.assignShift = function(req, res) {
	var turnoId = req.params.turnoId;
	var pacId = req.body.pacId;
	req.getConnection(function(err, connection) {
		connection.query('UPDATE turno SET pacId = ? WHERE turnoId = ?', [pacId, turnoId], function(err, rows) {
			if (err) {
				console.log("Error al asignar turno: %s", err);
			} else {
				console.log("Asignacion correcta");
			}
			res.redirect('/shifts');
		});
	});
}

exports.showShift = function(req, res) {
	var turnoId = req.params.turnoId;
	var consulta = 'SELECT turno.fecha, turno.hora, paciente.apellido AS pacienteApellido, paciente.nombre AS pacienteNombre, '
		+ 'medico.apellido AS medicoApellido, medico.nombre AS medicoNombre FROM turno INNER JOIN paciente ON '
		+ 'turno.pacId = paciente.pacId INNER JOIN medico ON turno.medId = medico.medId WHERE turno.turnoId = ?';
	req.getConnection(function(err, connection) {
		connection.query(consulta, [turnoId], function(err, rows) {
			if (err) {
				console.log("Error al buscar turno: %s", err);
			} else {
				res.render('shifts/showShift.ejs', {data : rows, moment : moment});
			}
		});
	});
}