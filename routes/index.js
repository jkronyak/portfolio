
const constructorMethod = (app) => {
	app.get('/', (_, res) => { 
		res.render('home');
	});

	app.use('*', (_, res) => {
		res.sendStatus(404);
	});

};

module.exports = constructorMethod;