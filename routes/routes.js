const express = require("express"),
      router  = express.Router(),
      Bing    = require("node-bing-api")({ accKey: process.env.API_KEY }),
      model   = require("../models/models");

router.get("/api/:id", (request, response)=>{
    //get the search parameter from user
    const searchTerm = request.params.id;
    const query = request.query;
    const offset = query.offset;
    //function to check if offset was inputed
    function checkOffset(offset){
        if(offset && offset >= 0){
            return offset;
        }
        else{
            return 0;
        }
    }
    //create model data from user input
    const data = new model({
        searchTerm : searchTerm,
        date : new Date()
    })
    //save it in the the db
    data.save((err, docs)=>{
        if(err){
            console.error(err);
        }
        else if(docs){
            console.log(docs);
        }
    })
    //query the image search api and send the user the json response
    Bing.images(searchTerm, {
        top:10,
        skip: checkOffset(offset)
    },(err, res, body)=>{
        if (err){
            console.error(err);
        }
        else if(body){
            /*iterate through the body and store needed info in an array */
            var outputArr = []
            for(var i = 0; i<10; i++){
                var output = {
                    url : body.value[i].contentUrl,
                    snippet : body.value[i].name,
                    thumbnail : body.value[i].thumbnailUrl,
                    context : body.value[i].hostPageUrl
                } 
                //put each result in array
                outputArr.push(output)
            }
            response.send(outputArr);
        }
    })
});

router.get("/api/recent/imagesearch/:id", (request, response)=>{
    //get last ten recent searches from the db and send to user
    var search = model.find().sort({day : -1}).limit(10);
    search.exec(function(err, posts) {
        if (err){
            response.send({error: "internal server error"})
        }
        else if(posts){
            response.send(posts);
        }
    });
});

module.exports = router;