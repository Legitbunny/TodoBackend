

const mongoose = require('mongoose')

require("dotenv").config();

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Connected to database"))
    .catch((err) => {
        console.log("couldn't connect to database")
        console.error(err.message)
        //find out iska ky amatlb hai
        process.exit(1);
    });
}


module.exports = dbConnect;