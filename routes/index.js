// <!--  File name: assignment1
// Student ID: 301236167
// Name: Chung Hin Ng
// Data: Oct 07, 2022 -->

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
    'aboutme', 
    { 
      title: 'About Me',
      description:'My name is Chung Hin Ng(Allen). I am student of Centennial College, studying in Software Engineering Technician program. On the way of being a software engineer.',

    }
  );
});



module.exports = router;