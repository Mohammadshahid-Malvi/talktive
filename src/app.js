const express = require('express');

// Creating a new Express.js Application
const app = express();

// if url '/ab+c' so you can add as much character b only before c as you can.
// if url '/ab*cd' so you can add as much character between ab & cd.
// if url '/ab?c' so you can ac/abc : because b is optional over here...
// if use regex like /.*fly$/ means at end fly must present.

app.get("/user/:userId/:firstName/:lastName",(req,res)=>{
    console.log(req.query);     //to get data from postman url like "?userId?userName"
    console.log(req.params);    //to get data from here only also pass original data to postman url.
    res.send({firstName:"Mohammadshahid",lastName:"Malvi"});
});

// Handle any request which are coming in port 3000
app.get("/user",(req,res)=>{
    res.send({firstName:"Mohammadshahid",lastName:"Malvi"});
});

app.post("/user",(req,res)=>{
    //Saving data to db
    res.send("Save data to Database!");
});

app.delete("/user",(req,res)=>{
    res.send('USer Deleted Successfully !');
});

// app.use("/test",(req, res)=>{   //this fn is know as request handler.
//     res.send("Dashboard...");
// });



// Creating web server on 3000 port and it is listening
app.listen(3000, () => {
    console.log('server is running on 3000 port...');
});
