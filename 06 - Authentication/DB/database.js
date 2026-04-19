import mongoose from 'mongoose';

export const connectDatabase = async (connectionURL) => {
    const connection = await mongoose.connect(connectionURL);
    return connection;
}