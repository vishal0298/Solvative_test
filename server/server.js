const express = require('express')
const mongoose = require('mongoose');
const cors = require("cors");
const userRoute = require('./routes/userRoute');
const peerFiveRoute = require('./routes/peerFiveRoute');
require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 3002
const MongoDbURI = process.env.MONGODB_URI
const path = __dirname + '/dist/';

mongoose.connect(`${MongoDbURI}`)

const corsOptions = {origin: "http://localhost:5173"}

app.use(express.json())
app.use(express.static(path));
app.use(cors(corsOptions));

app.use('/users', userRoute);
app.use('/peerFive', peerFiveRoute)

app.get('/', function (req, res) {
    res.sendFile(path + "index.html");
});



app.listen(PORT, () => {
    console.log(`SERVER RUNING ON PORT ${PORT}`);
});