var e = require('express');
var app = e();

//localhost:3000/animals?name=yogi
app.get('/animals', function(req, res) {
	res.json(req.query);
});

app.listen(3000);