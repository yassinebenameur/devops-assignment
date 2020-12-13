const express = require('express')
const dotenv = require('dotenv');
dotenv.config();
const app = express()

// get configurations from .env
const PORT = process.env.PORT || 3000

const {
    MONGO_HOSTNAME,
    MONGO_PORT,
    MONGO_DB
} = process.env;

const mongoose = require('mongoose');
const url = `mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;


// connect to database
// mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});


mongoose.connect(url, {useNewUrlParser: true});
// example of a model
const ConnectionLog = mongoose.model('Connections', {name: String, time: Date});


// getting all connections from database
ConnectionLog.find({}).exec().then(r => console.log(r));

app.get('/', (req, res) => {
    // res.send('Hello World!')

    // saving the time of a connection
    const connection = new ConnectionLog({name: 'Yassine', time: new Date()});
    connection.save().then(() => console.log('Saved new connection '));


    ConnectionLog.find({}).exec().then(r =>
        res.send(r))
})

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})
