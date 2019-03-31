var e = require('express');
var app = e();

//localhost:3000/animals?name=yogi
app.get('/animals', function(req, res) {
	res.send(req.query.name);
});

app.listen(3000);