const mongoose = require("mongoose");

function mongodbConnection() {
    mongoose.connect(process.env.DATABASE)
        .then(() => {
            console.log(`MongoDB is connected.`);
        }).catch((err) => {
            console.log(err);
        });
}

module.exports = mongodbConnection();