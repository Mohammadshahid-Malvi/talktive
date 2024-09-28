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