exports.index = function(req, res) {
	req.getConnection(function(err, connection) {
		var query = connection.query('SELECT * FROM medico ORDER BY apellido ASC, nombre ASC', function(err, rows) {
			if (err) {
				console.log("Error al buscar medicos: %s", err);
			}
			res.render('mds/index.ejs', {data : rows});
		});
	})
	//res.render('mds/index.ejs');
};

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
		var query = connection.query("INSERT INTO medico set ? ", data, function(err, rows){
			if (err) {
				console.log("Error al insertar: %s ", err);
			} else {
				console.log("Medico creado correctamente");
			}
			res.redirect('/mds');
		});
	})
}
