// Student ID: 1234568796
// Name: Julio Vinicius
// Data: Oct 01, 2022

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render(
    'index', 
    { 
      title: 'Welcome', 
      name: 'Chung Hin Ng(Allen)',
      description : 'Hello, welcome to my portfolio of COMP229 - Assignment 1. Here, you can find my information, projects, services. It is my pleasure to invite you to my page, thank you.',
      description2 :'About Me',
      description3 : '"To build the most convenient software."'

    }
  );
});

// Renders the projects page
router.get('/projects', function(req, res, next) {
  res.render(
    'projectservices', 
    { 
      title: 'Projects',
    }
  );
});

router.get('/services', function(req, res, next) {
  res.render(
    'projectservices', 
    { 
      title: 'Services',
    }
  );
});

router.get('/about', function(req, res, next) {
  res.render(
    'index', 
    { 
      title: 'About Me',
      name: 'Julio',
      description:'here is my detail',
      description2 :'',
      description3 :''
    }
  );
});



module.exports = router;