const express = require('express');
const app = express();

//load cofig fromenv file
require('dotenv').config();
const PORT = process.env.PORT || 4000;

//middleware to parse json reuest body
app.use(express.json());

//import routes for todo api
const todoRoutes = require('./routes/todos');

//mount todo API routes
app.use("/api/v1", todoRoutes);


//start server
app.listen(PORT,() => {
    console.log(`listening on port ${PORT}`);
});


//connect to database
const dbConnect = require("./config/database");
dbConnect();

//default route
app.get("/", (req,res) => {
    res.send(`<h1>This is HomePage</h1>`)
})