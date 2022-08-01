const express = require("express");
const app = express();
const cors = require("cors");
const pool = require('./db');

//middleware
app.use(cors());
app.use(express.json());

//Routes //

//create user
app.post("/register", async(req, res) => {
    var data = req.body;

    console.log("Name: ", data.name);
    console.log("Email: ", data.email);
    console.log("Password: ", data.password);
    
    res.send('User Added');
});
//create a tod
app.post("/todos", async (req, res) => {
    try {
        const { description } = req.body;
        const newTodo = await pool.query(
            "INSERT INTO todo (description) VALUES($1)", [description]
        );

        res.send("Record Added");

    } catch (err) {
        console.error(err.message);
    }
});
//get all todo

//get a todo

//delete a todo

//run server
app.listen(5000, () => {
    console.log("Server has started on port 5000");
});