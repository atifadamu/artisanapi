const express =require("express");
const connectDB = require("./config/connectDB");
require("dotenv").config()
const artisanRoute = require("./routes/artisanRoute");
const userRoute = require ("./routes/userRoute");
const morgan = require("morgan")

const app = express()

connectDB()

//middlewares
app.use(express.json())
app.use(morgan("dev"))
app.use("/api/artisans",artisanRoute)
app.use("/api/users", userRoute)



const port = process.env.PORT||9000

//Home route
app.get("/", (req, res)=>{
    res.json("Welcome to my Artisan API")
})
app.listen(port, ()=>{
    console.log("server is working !!!")
})











































































































































































































connectDB()
//middlewares
app.use(express.json());
app.use("/api/artisans",artisanRoute)
app.use("/api/users", userRoute)


// home route
app.get("/", (req, res)=>{
    res.json("WELCOME TO OUR LIBRARY")
})


const PORT = 6000;

app.listen(PORT,()=>{
    console.log("server is working")
})