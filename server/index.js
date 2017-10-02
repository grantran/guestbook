const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 8000;


//Middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('assets'));

app.get('/', function (req, res) {
  res.render('../assets/index.ejs');
})

app.listen(PORT, function () {
  console.log('Example app listening on port', PORT)
})