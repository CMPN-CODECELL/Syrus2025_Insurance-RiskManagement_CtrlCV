const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        profilePic: {
            type: String,
            // required: true,
        },
        contactNo : 
            {
                type: String,
            },
        
    },
    { timestamps: true }
);
const User = mongoose.model("User", UserSchema);
module.exports = User;
