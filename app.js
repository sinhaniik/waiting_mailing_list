const express = require('express');
const app = express();
const mysql = require('mysql2');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

const myUserDb = mysql.createConnection({
	user: 'root',
	host: 'localhost',
	password: 'NiiKhil@#12',
	database: 'usersdb'
});

//route route
app.get('/', (req, res) => {
	const que = 'SELECT COUNT(*) AS count FROM users';
	myUserDb.query(que, (err, results) => {
		if (err) throw err;
		let count = results[0].count;

		res.render('home', { userCount: count });
	});
});

//adding past route
app.post('/register', (req, res) => {
	let users = {
		email: req.body.email //same key which we use in the name field od home.ejs
	};

	myUserDb.query('INSERT INTO users SET ?', users, (err, resu) => {
		if (err) throw err;
		res.redirect('/');
	});
});

//adding routes
app.get('/joke', (req, res) => {
	const joke = 'what do you call a dog who is bull ?? , a bulldog ';
	res.send(joke);
});

app.listen(3000, () => {
	console.log('surver runnin on port 3000 !!');
});
