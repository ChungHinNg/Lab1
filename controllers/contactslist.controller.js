let Contacts = require('../models/contactslist.model');

exports.contactsListss = function(req, res, next){

    Contacts.find((err, contactsListss) =>{
// console.log(contactsListss);
  if(err)
{
    return console.error(err);
}
else
{
    res.render('businessContacts/list',{
            title: 'Business Contacts List',
            ContactsList : contactsListss,
            userName: req.user ? req.user.username : ''
        })            
    }
})
}



module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    Contacts.findById(id, (err, itemToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('businessContacts/add_edit', {
                title: 'Edit Item', 
                item: itemToEdit
            })
        }
    });
}


module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    let updatedItem = Contacts({
        _id: req.body.id,
        name: req.body.name,
        number: req.body.number,
        email: req.body.email,
    });

    // console.log(updatedItem);

    Contacts.updateOne({_id: id}, updatedItem, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // console.log(req.body);
            // refresh the book list
            res.redirect('/businessContacts/list');
        }
    });
}


module.exports.displayAddPage = (req, res, next) => {
    let newItem = Contacts();

    res.render('businessContacts/add_edit', {
        title: 'Add a new Item',
        item: newItem
    })          
}

module.exports.processAddPage = (req, res, next) => {
    let newItem = Contacts({

        _id: req.body.id,
        name: req.body.name,
        number: req.body.number,
        email: req.body.email,
    });

    Contacts.create(newItem, (err, item) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            console.log(item);
            res.redirect('/businessContacts/list');
        }
    });

}



module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    Contacts.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            res.redirect('/businessContacts/list');
        }
    });
}

