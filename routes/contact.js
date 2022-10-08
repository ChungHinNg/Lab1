var express = require('express');
var router = express.Router();


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