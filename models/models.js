const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//create schema for inserting searches into db
const searchTermSchema = new Schema({
    searchTerm : {type : String},
    date : {type : String}
},
{
    timestamps: true
})
//make our model for the schema
const searchTermModel = mongoose.model('searchTerm', searchTermSchema);
//make it available to other parts of our app
module.exports = searchTermModel;