const express = require("express");
const connect = require("./configs/db");
const userController = require("./controllers.js/users.controllers");
const publicationContoller = require("./controllers.js/publications.controllers");
const { register, login } = require("./controllers.js/auth.controllers");
const app = express();
app.use(express.json());

app.use("/publication", publicationContoller);
app.use("/users", userController);
app.post("/register", register);
app.post("/login", login);
app.listen(5000, async () => {
    try {
        await connect();
        console.log("Listening on port 5000");
    } catch (error) {
        console.log(error.message);
    }
});