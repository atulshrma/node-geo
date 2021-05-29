import mongoose from 'mongoose';

const connect = (uri) => {
    mongoose
        .connect(uri)
        .then(() => console.log('MongoDB connected...'))
        .catch((err) => {
            console.log(err);
            process.exit(1);
        });

    mongoose.connection.on('error', (err) => {
        console.error(`Mongoose connection error: ${err}`);
        process.exit(1);
    });

    return true;
};

export default connect;
