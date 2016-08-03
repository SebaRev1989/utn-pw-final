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