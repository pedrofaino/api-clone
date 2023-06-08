import mongoose from 'mongoose';
import config from './config/mongodb.js';

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Sucessfully connected to database.');
    } catch (error) {
        console.error('Error connecting to database.', error);
        process.exit(1); // Stop the application if it can't connect to the database.
    }
};