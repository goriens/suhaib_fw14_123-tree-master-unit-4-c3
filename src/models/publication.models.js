const { type } = require("express/lib/response");
const mongoose = require("mongoose");
const publicationSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
            required: true,
        },
        name: { type: String, required: true },
    },
    {
        timestamps: true,
        versionKey: false
    },
);
const Publication = mongoose.model("publication", publicationSchema);
module.exports = Publication;