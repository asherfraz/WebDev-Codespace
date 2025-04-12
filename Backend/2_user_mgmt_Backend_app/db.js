const mongoose = require('mongoose');

const dotenv = require('dotenv');
dotenv.config()

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {
            useNewUrlParser: true,
        });
        console.log(`MongoDB Connected: ${connection.connection.host}`);
    } catch (error) {

        console.error(error.message);
        process.exit(1);
    }
}

module.exports = connectDB;