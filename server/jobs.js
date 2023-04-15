const mongoose = require("mongoose");

const jobsDetails = new mongoose.Schema(
    {
        image:String,
        title:String,
        minsal:Number,
        maxsal:Number,
        description:String,
        hiringcompany:String,
        email:String,
        phnumber:Number,
        address:String
    },
    {
        collection:"jobListings",
    }
)
mongoose.model("jobListings",jobsDetails);