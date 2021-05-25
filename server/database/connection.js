const mongoose = require('mongoose');

const connectdb = async () => {
    try {
        const connect = await mongoose.connect(process.env.mongo_uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })
        console.log('MongoDB connected : ' + connect.connection.host);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectdb;