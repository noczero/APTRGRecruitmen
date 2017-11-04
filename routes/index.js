var express = require('express');
var router = express.Router();
var db = require('../config/firebase.js');

var dataPeserta;

var getPeserta = db.database().ref('Peserta/');
getPeserta.on('value', function(snapshot) {
  dataPeserta = snapshot.val();
});


// var dataPeserta = [
// 		{
// 			"NIM" : "1301154428",
// 			"nama" : "Satrya Budi Pratama",
// 			"jurusan" : "S1 Teknik Informatika"
// 		} ,
// 		{
// 			"NIM" : "1301153300",
// 			"nama" : "Pratama",
// 			"jurusan" : "S1 Teknik Informatika"
// 		} 
// ];


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
  	title: 'APTRG Recruitment',
  	data : dataPeserta
  }); // tampilin halaman index sama kasih data title, sama data
});

module.exports = router;
