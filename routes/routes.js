const express = require("express"),
      router  = express.Router(),
      Bing    = require("node-bing-api")({ accKey: process.env.API_KEY }),
      model   = require("../models/models");

router.get("/api/:id", (request, response)=>{
    //get the search parameter from user
    const searchTerm = request.params.id;
    const query = request.query;
    const offset = query.offset;
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
        skip:10
    },(err, res, body)=>{
        if (err){
            console.error(err);
        }
        console.log(res);
        console.log(body);
        
    })
   
});

router.get("/api/recent/imagesearch/:id", (request, response)=>{
    //get last ten recent searches from the db
   
});

module.exports = router;