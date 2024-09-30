const express = require('express');
const connectDB = require("./config/database.js");
const User = require("./models/user.js");
const validator = require('validator');

// Creating a new Express.js Application
const app = express();

app.use(express.json());

// Going to create first API of user
    // app.post("/signup", async (req, res) => {
    //     const userObj = {
    //         firstName:"Mohammadshahid",
    //         lastName:"Malvi",
    //         emailId:"mohmmadmalvi@gmail.com",
    //         password:"malvi1234",
    //         phoneNo:9999999999,
    //         gender:"Male"
    //     }
    //     // Creating new instance of the user model
    //     const user = new User(userObj);

    //     try {
    //         // It will return us a promise & save data into database
    //         await user.save();
    //         res.send('User Added Successfully');
    //     }catch(err){
    //         res.status(400).send('Error While Saving User data:'+err.message);
    //     }
    // });

// Dynamic Data Create API
app.post("/signup",async (req, res) => {
    // Create new instance of user model
    const user = new User(req.body);
    try {
        console.log(user);
        await user.save();
        res.send('User added successfully');
    }catch(err){
        res.status(400).send('Error which Save Data: '+err.message);
    }
});

// Get User By Email
app.get("/user", async (req, res) => {
    const userEmail = req.body.emailId;
    try {
        const users = await User.findOne({emailId: userEmail});
        if(users.length === 0){
            res.status(404).send('Data not there');
        }else{
            res.send(users);
        }
    }catch(err){
        res.status(400).send('Cant find: '+err.message);
    }
});

// Feed API - GET - Feed - get all the users from the database
app.get("/feed", async (req, res) => {
    try {
        const allUSer = await User.find({});
        res.send(allUSer);
    }catch(err){
        res.status(400).send('All Data not Available: '+err.message);
    }
});

// API - Delete by Id
app.delete("/user", async (req, res) => {
    const userId = req.body._id;
    try {
        const user = await User.findByIdAndDelete({_id: userId});
        res.send("User Deleted Successfully");
    }catch(err){
        res.status(404).send('Data not found');
    }
});

// API - Update Data of the User
app.patch("/user/:userId", async(req, res) => {
    const userId = req.params?.userId;
    const data = req.body;
    try {
        // const ALLOWED_UPDATES = [
        //     "firstname",
        //     "lastName",
        //     "password",
        //     "phoneNo",
        //     "gender",
        //     "photoURL",
        //     "about",
        //     "skills"
        // ];
        // const isUpdateAllowed = Object.keys(data)
        // .every((k) => ALLOWED_UPDATES.includes(k));

        // if(!isUpdateAllowed){
        //     throw new Error('Updates not allowed');
        // }
        if(data?.skills.length > 3){
            throw new Error("Skills not greater than 3");
        }
        await User.findByIdAndUpdate({_id:userId},
            data, {
                returnDocument: "after",
                runValidators:true
            }
        );
        res.send('USer Updated Successfully');
    }catch(err) {
        res.status(404).send('Something Went wrong with update...'+err.message);
    }
});


connectDB().
then(()=>{
    console.log('Database Connection Success');
    app.listen(3000, ()=>{
        console.log('server is running on 3000 port......');
    });
}).catch((err)=>{
    console.log('Database Connection failure');
})


// Creating a new Express.js Application
// const app = express();

// const { adminAuth, userAuth } = require("./middlewares/auth.js");

// Way 1 :- Handle Error in Middleware
// app.get("/user", (req, res) => {
//     try {
//         throw new Error("dfdfd");
//         res.send('Data send Successfully');
//     }catch(err){
//         res.status(500).send('Something Went Wriong !');
//     }
// });

// Way 2 :- Handle Error in Middleware
// app.get("/user", (req, res) => {
//     throw new Error('ddsfsd');
//     res.send('Fetch Data Successfylly');
// });
// app.use("/", (err, req, res, next) => {
//     if(err){
//         res.status(500).send('Something Went Wriong in Way 2 !');
//     }
// });

// Handle Auth Middleware for all request GET, POST, PUT, PATCH, DELETE
// app.all("/admin",
//     adminAuth
// );

// app.get('/user', userAuth, (req, res, next) => {
//     res.send('User Fetch Successfully');
// });

// app.get("/admin/getUserData",
//     (req, res, next) => {
//         res.send("Data Fetch Successfully");
//     }
// );

// app.get("/admin/deleteUserData",
//     (req, res, next) => {
//         res.send('User Deleted Successfully');
//     }
// );

// app.get("/user",(req,res,next)=>{   //This is middleware because it doesn't have response back fn like res.send.
//     console.log('Second Request handler...1');
//     next();
// });

// app.get("/user",(req,res,next)=>{   //This is request handler which handle fulfill request of users.
//     console.log('first Request handler...2')
//     res.send('Request 2...');
// });


// app.get(
//     "/user",
//     (req, res, next)=>{
//         res.send('Request 1....');
//         next();
//     },
//     (req, res, next) => {
//         res.send('Request 2...');
//         next();
//     },
//     (req, res,next) => {
//         res.send('Request 3...');
//         next();
//     },
//     (req, res,next) => {
//         res.send('Request 4...');
//         next();
//     }
// )


// if url '/ab+c' so you can add as much character b only before c as you can.
// if url '/ab*cd' so you can add as much character between ab & cd.
// if url '/ab?c' so you can ac/abc : because b is optional over here...
// if use regex like /.*fly$/ means at end fly must present.

// app.use("/user",(req,res)=>{
//     // res.send('Route handler 1');
// });

// app.get("/user/:userId/:firstName/:lastName",(req,res)=>{
//     console.log(req.query);     //to get data from postman url like "?userId?userName"
//     console.log(req.params);    //to get data from here only also pass original data to postman url.
//     res.send({firstName:"Mohammadshahid",lastName:"Malvi"});
// });

// Handle any request which are coming in port 3000
// app.get("/user",(req,res)=>{
//     res.send({firstName:"Mohammadshahid",lastName:"Malvi"});
// });

// app.post("/user",(req,res)=>{
//     //Saving data to db
//     res.send("Save data to Database!");
// });

// app.delete("/user",(req,res)=>{
//     res.send('USer Deleted Successfully !');
// });

// app.use("/test",(req, res)=>{   //this fn is know as request handler.
//     res.send("Dashboard...");
// });




// Creating web server on 3000 port and it is listening
// app.listen(3000, () => {
//     console.log('server is running on 3000 port...');
// });
