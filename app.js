const express = require('express');
const app = express();
const mysql = require('mysql2');

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
		res.send('we have ' + count + ' users in our db');
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
