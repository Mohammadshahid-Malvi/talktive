const express = require('express');

// Creating a new Express.js Application
const app = express();

// Handle any request which are coming in port 3000
app.use("/test",(req,res)=>{    //this fn is know as request handler.    
    res.send('Hello, we are listening');
});

app.use("/hellos",(req,res)=>{
    res.send('hellow, hallaw!')
});

// Creating web server on 3000 port and it is listening
app.listen(3000, () => {
    console.log('server is running on 3000 port...');
});
