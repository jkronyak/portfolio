
const constructorMethod = (app) => {
	app.get('/', (_, res) => { 
		res.render('home');
	});

	app.get('/education', (_, res) => {
		res.render('education');
	});

	app.get('/experience', (_, res) => { 
		res.render('experience');
	});

	app.use('*', (_, res) => {
		res.sendStatus(404);
	});

};

module.exports = constructorMethod;