// <!--  File name: assignment1
// Student ID: 301236167
// Name: Chung Hin Ng
// Data: Oct 07, 2022 -->
var express = require('express');
var router = express.Router();
let contactslistController = require('../controllers/contactslist.controller')

function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        req.session.url = req.originalUrl;
        return res.redirect('/users/signin');
    }
    next();
}

/* Renders contact page. */

router.get('/list', contactslistController.contactsListss);


// Routers for edit
router.get('/edit/:id', requireAuth, contactslistController.displayEditPage);
router.post('/edit/:id', requireAuth, contactslistController.processEditPage);


/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', requireAuth, contactslistController.displayAddPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', requireAuth, contactslistController.processAddPage);


// Route for Delete
router.get('/delete/:id', requireAuth, contactslistController.performDelete);





module.exports = router;