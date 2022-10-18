exports.home = function(req, res, next) {
    res.render(
      'index', 
      { 
        title: 'Welcome', 
        name: 'Chung Hin Ng(Allen)',
        description : 'Hello, welcome to my portfolio of COMP229 - Assignment 1. Here, you can find my information, projects, services. It is my pleasure to invite you to my page, thank you.',
        description2 :'About Me',
        description3 : '"To build the most convenient software."',
        userName: req.user ? req.user.username : ''
      }
    );
  };

  exports.projects = function(req, res, next) {
    res.render(
      'projectservices', 
      { 
        title: 'Projects',
        userName: req.user ? req.user.username : ''
      }
    );
  };

  exports.services = function(req, res, next) {
    res.render(
      'projectservices', 
      { 
        title: 'Services',
        userName: req.user ? req.user.username : ''
      }
    );
  };