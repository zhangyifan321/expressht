var express = require('express');
var router = express.Router();
var mysql = require('mysql')
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'zhangyifan',
  database : 'student'
});
/* GET users listing. */
router.get('/', function(req, res, next) {
  
  connection.query('select * from student', function (err, rows, fields) {
    if (err) throw err
  
    console.log('The solution is: ', rows)
    res.send(rows);
  })
});

module.exports = router;
