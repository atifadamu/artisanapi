  
const User = require("../models/userSchema");


exports.protect=async function(req, res, next){
    let token;

    if (req.headers.authorization && req.headers.authorization.startswith("Bearer")) {
        try{
        token= req.headers.authorization.split(" ")[1];
        const decorded = jwt.verify(token,process.env.JWT_SECRET);
        req.user = await User.findById(decorded.id);
        next();
        }catch(err) {
            res.status(401).json({
                message:"invalid authorization"
            })
        
    } 
    if(!token){
        res.status(401).json({
            message:"You are not authorized"
        });
    }
        
    }
}
exports.admin = async function (req, res, next) {
    if (req.user && req.user.isAdmin) {
        next();
    }else {
        res.status(401).json({
            message: "You are not authorized admin",
        });
    }
}
