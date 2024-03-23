const { Schema, model } = require('mongoose');

const rewardHistorySchema = new Schema({
    date: Date,
    points: Number,
    givenBy: String,
    givenTo: String

})

module.exports = model("RewardHistory", rewardHistorySchema)