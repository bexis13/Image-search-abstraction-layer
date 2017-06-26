const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//create schema for inserting searches into db
const searchTermSchema = new Schema({
    searchTerm : String,
    date : Date
},
{
    timestamp: true
})
//make our model for the schema
const searchTermModel = mongoose.model('searchTerm', searchTermSchema);
//make it available to other parts of our app
module.exports = searchTermModel;