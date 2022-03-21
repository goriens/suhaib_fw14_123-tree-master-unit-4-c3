const mongoose = require("mongoose");
const booksSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
            required: true,
        },
        publicationId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "publication",
            required: true,
        },
        likes: { type: Number, default: 0 },
        coverImage: { type: String, required: false },
        content: { type: String, required: true },
    },
    {
        timestamps: true,
        versionKey: false
    },
);
const Books = mongoose.model("book", booksSchema);
module.exports = Books;