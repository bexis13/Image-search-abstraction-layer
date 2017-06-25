var express = require("express");
var app = express();
var path = require("path");
var mongoose = require("mongoose");


var port = process.env.PORT;

app.use(express.static(path.join(__dirname, 'public')));

//connect to the database
var mlabUrl = process.env.MONGOLAB_URI + "image-search-abstraction-layer" ; /*get mlab url(credentials) from environment variables and url-shortner is dbname*/
console.log(mlabUrl);
mongoose.Promise = global.Promise;
mongoose.connect(mlabUrl || "mongodb://localhost:27017/imageSearchAbstractionLayer"); /*connect to mongodb(on mlab, not locally) with mongoose
either on mlab cloud remote database or on locally installed mongodb*/

var connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'connection error:'))
connection.on('open', function(){
    console.log("connected correctly to the database");
})

app.get("/new/:search", function(request, response){
    //get the search parameter from user
    
    //save it in the the db
    
    //query the image search api and send the usrer the json response
    
   
});

app.get("/recent", function(request, response){
    //get last ten recent searches from the db
   
});


app.listen(port, function(){
    console.log("app is listening on port");
})