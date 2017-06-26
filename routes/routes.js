const express = require("express"),
      router  = express.Router();

router.get("/new/:search", (request, response)=>{
    //get the search parameter from user
    
    //save it in the the db
    
    //query the image search api and send the usrer the json response
    
   
});

router.get("/recent", (request, response)=>{
    //get last ten recent searches from the db
   
});

module.exports = router;