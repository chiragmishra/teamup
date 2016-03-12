var routes = function(app) {
	app.use('/api/user', require('./routes/user.routes.js'));
};

module.exports = routes;