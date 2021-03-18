var express = require('express');
const { request } = require('../app');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/hola', (req,res,next)=>{
  console.log('Saludando');
  res.send("<h1>saludo desde el backend</h1>");
} );

module.exports = router;
