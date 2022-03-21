const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema(
    {
        firstName: { type: String, },
        lastName: { type: String, },
        age: { type: Number, },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        profileImages: { type: String, }
    },
    {
        timestamps: true,
        versionKey: false
    },
);
userSchema.pre("save", function (next) {
    const hash = bcrypt.hashSync(this.password, 8);
    this.password = hash;
    return next();
})
userSchema.methods.checkPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
}
const User = mongoose.model("user", userSchema);
module.exports = User;