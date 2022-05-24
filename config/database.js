const mongoose = require('mongoose');

const { MONGODB_URL } = process.env

exports.connect = () => {
    mongoose
        .connect(MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(console.log("DB connected Succes"))
        .catch(error => {
            console.log(error);
            console.log(`DB connection failed`);
            process.exit(1)
        });
};