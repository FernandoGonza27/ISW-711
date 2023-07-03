const express = require('express');

require('dotenv').config()
const app = express();
// database connection
const mongoose = require("mongoose");

//connection with moongoo
app.use(express.json());

// check for cors
const cors = require("cors");
app.use(cors({
  domains: '*',
  methods: "*"
}));

const connect = async () =>{
    
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to MongoDB");
    } catch (error) {
        throw error;
    }
}
app.listen(3300,()=>{
    connect();
    console.log("Connected to backend")
});