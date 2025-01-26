import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema =  new Schema({
    username : {
        type : String
    },
    email : {
        type : String
    },
    googleId : {
        type : String
    },
    profileImage : {
        type : String
    }
})

const User = mongoose.models.user || mongoose.model("user", userSchema);

export default User;    