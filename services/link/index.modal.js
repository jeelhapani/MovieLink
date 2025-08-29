const mongoose = require("mongoose");

const linklModel = new mongoose.Schema(
    {
        title: {
            type: String,
            require: [true, "title are require"],
        },
        link: {
            type: String,
            require: [true, "link are require"],
        }
    },
    { timestamps: true }
)

module.exports = mongoose.model("movie_link", linklModel);