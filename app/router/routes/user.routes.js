var express = require('express');        		// call express
var router = express.Router();           		// get an instance of the express Router

router.get('/', function(req, res) {
	res.sendStatus(200);
});

module.exports = router;