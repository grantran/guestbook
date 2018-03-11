const express = require('express');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs')

//Middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('assets'));

app.get('/', function (req, res) {
  res.render('../assets/index.ejs');
})

app.listen(PORT, function () {
  console.log('Example app listening on port', PORT)
})