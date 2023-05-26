const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
    user_name: {
        type:String,
        required: true
    },
    email: {
        type: String,
        match:[
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Please use a valid email",
            ],
    },
    password: {
        type: String,
        required: true
    },
    coins: {
        type: String
    },
    collections: {
        type: Array
    },
    score: {
        type: String
    }   
})

module.exports = mongoose.model("Users", usersSchema);



