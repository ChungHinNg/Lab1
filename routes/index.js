// <!--  File name: assignment1
// Student ID: 301236167
// Name: Chung Hin Ng
// Data: Oct 07, 2022 -->

var express = require('express');
var router = express.Router();
let indexController = require("../controllers/index.controller.js")

/* GET home page. */
router.get('/', indexController.home);

// Renders the projects page
router.get('/projects', indexController.projects);

router.get('/services', indexController.services);

router.get('/about', function(req, res, next) {
  res.render(
    'aboutme', 
    { 
      title: 'About Me',
      description:'My name is Chung Hin Ng(Allen). I am student of Centennial College, studying in Software Engineering Technician program. On the way of being a software engineer.',

    }
  );
});

router.get('/businessContacts', function(req, res, next) {
  res.render(
    'businessContacts', 
    { 
      title: 'Business Contacts List',
      description:'My name is Chung Hin Ng(Allen). I am student of Centennial College, studying in Software Engineering Technician program. On the way of being a software engineer.',

    }
  );
});


module.exports = router;