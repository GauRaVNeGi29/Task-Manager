const dotenv = require("dotenv").config();
const express= require("express");
// const connectDB = require("./config/connectDB");
const mongoose = require("mongoose");
const Task = require("./models/taskModel");
const taskRoutes = require("./routes/taskRoute")
const cors = require("cors")

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors()); 
  
app.use("/api/tasks", taskRoutes);

// Routes
app.get("/", (req,res)=>{
    res.send("Home Page");
});





const PORT = process.env.PORT || 5000;

mongoose
    .connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(PORT, ()=> {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((error)=> console.log("err"))





