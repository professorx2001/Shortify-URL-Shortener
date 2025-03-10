import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
    shortId : {
        type : String, 
        required : true,
        unique : true
    },
    originalUrl : {
        type : String,
        required : [true, "URL is required!!!"]
    },
    visitHistory : [{
        timestamp : {
            type : Number
        }
    }]
}, {timestamps : true})

export const URL = mongoose.model("URL", urlSchema);