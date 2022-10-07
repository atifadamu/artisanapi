const { Router }=require("express");
const router = Router();
const { createUser,  loginUser }= require("../controllers/usercontroller");


router
.post("/register",createUser)
.post("/login", loginUser);

module.exports = router;
