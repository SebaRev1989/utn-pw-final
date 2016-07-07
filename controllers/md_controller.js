exports.index = function(req, res) {
	res.render('mds/index.ejs', { title: 'Sistema de Turnos' });
};

exports.newMD = function(req, res) {
	res.render('mds/newMD.ejs', { title: 'Sistema de Turnos' });
}