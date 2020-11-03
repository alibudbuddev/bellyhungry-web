//Install express server
const express = require('express');
const path = require('path');
const port = process.env.PORT || 3001;
const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist'));

app.get('/*', function(req,res) {
	res.sendFile(path.join(__dirname+'/dist/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(port, function() {
	console.log(`Server is running in port ${port}`);
});