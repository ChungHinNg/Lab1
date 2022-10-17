let mongoose = require('mongoose');

// create model class
let contactslistModel = mongoose.Schema(
{

    name: String,
    number: Number,
    email: String,

},{
collection: "contactslist"

}
);

module.exports = mongoose.model('ContactsList', contactslistModel)

