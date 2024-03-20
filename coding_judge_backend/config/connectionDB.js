
//var mongoDB = "mongodb+srv://arifa089:arifa089@cluster0.1bfpqsr.mongodb.net/db_ecom?retryWrites=true&w=majority";


const mongoose = require('mongoose');

const connectDatabase = async () => {
    var mongoDB = "mongodb+srv://user:6QoS3SqH1YkAiwWV@codingjudge.hun05xv.mongodb.net/db_codingjudge?retryWrites=true&w=majority&appName=codingjudge";
    try {
        await mongoose.connect(mongoDB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("MongoDB connection SUCCESS");
    } catch (error) {
        console.log(error);
        console.error("MongoDB connection FAIL");
        process.exit(1);
    }
}

module.exports = connectDatabase;
