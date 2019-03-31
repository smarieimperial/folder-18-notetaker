var e = require('express');
var app = e();

//localhost:3000/animals/bear/polar
app.get('/animals/:animal/:type', function(req, res) {
	res.send(req.params.animal + " " req.params.type);
});

app.listen(3000);