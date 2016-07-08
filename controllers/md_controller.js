exports.index = function(req, res) {
	res.render('mds/index.ejs', { title: 'Sistema de Turnos' });
};

exports.newMD = function(req, res) {
	res.render('mds/newMD.ejs', { title: 'Sistema de Turnos' });
}

exports.createMD = function(req, res) {
	req.getConnection(function (err, connection) {
		var data = {
			Apellido    : medico.apellido,
            Nombre 		: medico.nombre,
            DNI   		: medico.dni,
            NroMatricula: medico.NroMatricula
		};
		var query = connection.query("INSERT INTO Medico set ? ", data, function(err, rows){
			if (err) {
				console.log("Error al insertar: %s ", err);
			}
			red.redirect('/mds/index', { title: 'Sistema de Turnos' });
		});
	})
}
