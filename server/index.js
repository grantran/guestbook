const express = require('express');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const addUser = require('./routes/addUser'); 
const getUsers = require('./routes/getUsers');

app.set('view engine', 'ejs')
app.set('env', 'development')

//Middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('assets'));

app.get('/', function (req, res) {
  res.render('../assets/index.ejs');
})

app.get('/users', function(req, res) {
  getUsers
    .getUsers()
    .then((users) => res.json(users))

})

app.post('/addUser', (req, res) => {
  console.log('The request', req.body.firstname, req.body.lastname); 
  addUser
    .addUser(req.body.firstname,req.body.lastname, req.body.membership)
    .then(() => res.sendStatus(200))
});

app.listen(PORT, function () {
  console.log('Example app listening on port', PORT)
  console.log(process.env.NODE_ENV);
})