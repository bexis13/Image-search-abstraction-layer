const express = require("express"),
      router  = express.Router(),
      Bing    = require("node-bing-api");

router.get("/api/:id", (request, response)=>{
    //get the search parameter from user
    const searchTerm = request.params.id;
    const query = request.query;
    console.log(searchTerm);
    console.log(query);
    //save it in the the db
    
    //query the image search api and send the usrer the json response
    
   
});

router.get("/api/recent/imagesearch/:id", (request, response)=>{
    //get last ten recent searches from the db
   
});

module.exports = router;