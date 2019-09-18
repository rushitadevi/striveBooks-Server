const express = require('express')
const fs = require("fs-extra")
const router = express.Router()
var multer  = require('multer')
var id=require("shortid")

//get all books
router.get('/',(request,response)=>{
   // console.log(request.body)
   var buffer = fs.readFileSync("./books.json");
    console.log(buffer)
    var content = buffer.toString()
    response.send(content)
})

// //to get single book
// router.get('/:bookid',(request,response)=>{
//     // console.log(request.body)
//     var buffer = fs.readFileSync("./services/books.json");
//      console.log(buffer)
//      var content = buffer.toString()
//      response.send(content)
//  })
 

//get comments by book id
router.get('/:bookid',(request,response)=>{
    
    var buffer = fs.readFileSync("./comments.json");
    console.log("hi")
    var content = buffer.toString()
    var oldDb=JSON.parse(content)
    var newDb=oldDb.filter(value=>value.BookID==request.params.bookid)
    console.log(newDb)
    if(!newDb)
    console.log("No comments yet")
    else
    response.send(newDb)
})

router.post("/:bookid",(req,res)=>{
    var reqBody=req.body 
    var buffer = fs.readFileSync("./comments.json");
    var content = buffer.toString()
    var NewDb=JSON.parse(content)
    reqBody.BookID=req.params.bookid
    reqBody.Date=new Date()
    NewDb.push(reqBody)
    fs.writeFileSync("./comments.json", JSON.stringify(NewDb))
    res.send(NewDb) 
})

module.exports = router;
