// <!--  File name: assignment1
// Student ID: 301236167
// Name: Chung Hin Ng
// Data: Oct 07, 2022 -->
var express = require('express');
var router = express.Router();

/* Renders contact page. */

router.get('/contactme', function(req, res, next) {
    res.render(
      'contact', 
      { 
        title: 'Contact',
        name: 'Julio' 
      }
    );
  });

module.exports = router;