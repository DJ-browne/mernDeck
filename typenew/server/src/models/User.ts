import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    userId: String,
    password: String
})

const UserModel = mongoose.model("User", UserSchema);

export default UserModel;