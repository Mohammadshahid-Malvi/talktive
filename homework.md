Episode 3 :- Creating our express server

- Create a repository
    - git init :- initialize the git.
    - git add README.md :- add files to git
    - git commit -m "Episode-3 created a express server" :- commit code
        Push code to github repository in github.com
    - git remote add origin https://github.com/Mohammadshahid-Malvi/talktive.git
    - git branch -M main :- creating a branch
    - git push -u origin main :- push code to main branch

- Initialize the repository
- node_module, package.json, package-lock.json
- Install express
- Create a server
- Listen to port 7777
- Write request handlers for /test, /hellow
- Install nodemon and update automatic script inside package.json
- Different between caret & tilda
- what are dependency
- what is use of -g while npm install

Episode 04 :- Routing and Request Handlers

- initialize git
- create a remote repo on github
- push all code to remote origin
- play with all route /hello, /hello/2
- Order of the route matters.
- Install postman app and make a workplace/collections -> test api call.
- Write logic to handle GET | POST | PUT-PATCH | DELETE Api calls and test on POSTMAN
- Explore routing and use of ?, *, + in route 
- user of regex in routes /a/, /.*lastshouldcomethisonly$/
- Reading the query params in the routes
- Reading the dynamic route

Episode 05 :- Middlewares & Error Handlers

- Multiple Route Handlers - play with the code
- next()
- next function and errors along with res.send()
- app.use('/user', fn1, fn2, fn3, fn4, fn5 );
- what is middleware? Why do we need it?
- how express.js basically handle request behind the scene.
- write a dummy auth middleware for admin
- write a dummy auth middleware for all user except /user/login
- Error Handling using app.use("/",(err,req,res,next){});

Episode 06 :- Database, Schema & Models

- Create free cluster on mongodb official website.(Mongo Atlas)
- Install mongoose library
- Connect your application to the Database ConnectionURL/Talktive
- call the connectDB function and connect to database before starting application on 3000
- Create user Schema & user Model
- Create signup API to add data into database
- Push some documents using API calls from postman
- Error handling while working with database

Episode 07 :- Diving into the APIs
- Difference between js Object vs JSON
- add the express.json middleware to your app
- Make your signup API dynamic to receive data from the end user
- user.findOne with duplicate email id, which object returns
- API - Get user by email id
- API - Get allUser
- Create a Delete user API
- Difference between PATCH & PUT
- API - Update a user
- Explore the mongoose documentation for model Method
- What are option in Model.findOneAndUpdate method, explore more about it
- API - Update the user with email id

Episode 08 :- Data sanitization and Schema validation
- add timestamps to use userSchema
- add require, minlength, maxlength, lowercase, unique
- add custom form validation function for schema 