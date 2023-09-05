const express = require("express");
const mongoose = require("mongoose");
const cors= require("cors");
const route = require("./routers/router");
const app = express();
app.use(express.json());

app.use(cors());
app.use("/",route);

//DB connection
mongoose.connect("mongodb+srv://manu12shetty:S6JyQE7udBrfJNri@cluster0.0kvgnm4.mongodb.net/Data")
    .then(()=>{
        console.log('Connected to DB');
    })
    .catch((err)=> {
        console.log(err);
    });
app.listen(3500,()=>{
    console.log(`Server is running on port 3500`);
});



