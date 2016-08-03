exports.index = function(req, res) {
	req.getConnection(function(err, connection) {
		connection.query('SELECT * FROM medico ORDER BY apellido ASC, nombre ASC', function(err, rows) {
			if (err) {
				console.log("Error al buscar medicos: %s", err);
			} else {
				res.render('mds/index.ejs', {data : rows});
			}
		});
	});
}

exports.newMD = function(req, res) {
	res.render('mds/newMD.ejs');
}

exports.createMD = function(req, res) {
	req.getConnection(function (err, connection) {
		var data = {
			apellido    : req.body.medico.apellido,
            nombre 		: req.body.medico.nombre,
            dni   		: req.body.medico.dni,
            nroMatricula: req.body.medico.nroMatricula
		};
		connection.query("INSERT INTO medico SET ? ", [data], function(err, rows){
			if (err) {
				console.log("Error al insertar medico: %s ", err);
			} else {
				console.log("Medico creado correctamente");
			}
			res.redirect('/mds');
		});
	})
}

exports.deleteMD = function(req, res) {
	var medId = req.params.medId;
	req.getConnection(function (err, connection) {
		connection.query("DELETE FROM medico WHERE medId = ? ", [medId], function(err, rows) {
			if (err) {
				console.log("Error borrando medico: %s ", err);
			}
			res.redirect('/mds');
		});
	});
}

exports.updateMD = function(req, res) {
	var medId = req.params.medId;
	req.getConnection(function(err, connection) {
		connection.query('SELECT * FROM medico WHERE medId = ?', [medId], function(err, rows) {
			if (err) {
				console.log("Error seleccionando medico: %s ", err);
			} else {
				res.render('mds/editMD.ejs', {data : rows});
			}
		});
	});
}

exports.saveMDupdate = function(req, res) {
	var medId = req.params.medId;
	req.getConnection(function (err, connection) {
		var data = {
			apellido    : req.body.medico.apellido,
            nombre 		: req.body.medico.nombre,
            dni   		: req.body.medico.dni,
            nroMatricula: req.body.medico.nroMatricula
		};
		connection.query("UPDATE medico SET ? WHERE medId = ?", [data, medId], function(err, rows){
			if (err) {
				console.log("Error al actualizar: %s ", err);
			} else {
				console.log("Medico actualizado correctamente");
			}
			res.redirect('/mds');
		});
	});
}