const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    id : String,
    name : String,
    peerFivePoints: Number, 
    rewardPoints: Number
})

module.exports = model("User", userSchema)