const User = require("../models/users.models");
const jwt = require('jsonwebtoken');
require('dotenv').config()

const newToken = (user) => {
    return jwt.sign({ user }, process.env.SECRET_KEY);
}
const register = async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).send({ message: "Email already exists" });
        }
        user = await User.create(req.body);
        const token = newToken(user);
        return res.status(200).send({ user, token });
    }
    catch (error) {
        return res.status(500).send({ error: error.message });
    }
}

const login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(400).send("Wrong email or password");
        }
        const match = user.checkPassword(req.body.password);
        if (!match) {
            return res.status(400).send({ message: "Wrong email or password" });
        }
        const token = newToken(user)
        return res.status(200).send({ user, token });

    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
}
module.exports = { register, login };