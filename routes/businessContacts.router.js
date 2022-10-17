// <!--  File name: assignment1
// Student ID: 301236167
// Name: Chung Hin Ng
// Data: Oct 07, 2022 -->
var express = require('express');
var router = express.Router();
let contactslistController = require('../controllers/contactslist.controller')
/* Renders contact page. */

router.get('/list', contactslistController.contactsListss);


// Routers for edit
router.get('/edit/:id', contactslistController.displayEditPage);
router.post('/edit/:id', contactslistController.processEditPage);


/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', contactslistController.displayAddPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', contactslistController.processAddPage);


// Route for Delete
router.get('/delete/:id', contactslistController.performDelete);





module.exports = router;