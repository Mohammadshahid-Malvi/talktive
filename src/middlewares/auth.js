const adminAuth = (req, res, next) => {
    console.log('Admin Auth is getting Checked!');
    const token = "aa";
    const isAdminAuthorized = token == "aa";
    if(!isAdminAuthorized){
        res.send("Unauthorized Admin");
    }else{
        next();
    }
}

const userAuth = (req, res, next) => {
    console.log('User Auth is getting Checked!');
    const token = 'bb';
    isUserAuthorized = token == 'bb';
    if(!isUserAuthorized){
        res.send('Unauthorized User');
    }else{
        next();
    }
}

module.exports = { adminAuth, userAuth };