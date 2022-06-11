/* Author: Jared Anthony Kronyak */

const express = require('express');
const app = express();
const configRoutes = require('./routes');

const static = express.static(__dirname + '/public');
const exphbs = require('express-handlebars');

app.use('/public', static);
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.engine('handlebars', exphbs.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

configRoutes(app);

app.listen(process.env.PORT || 3000, () => {

	console.log('Server is running!');
	console.log('Routes running on http://localhost:3000');
});
