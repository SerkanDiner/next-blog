import mongoose from 'mongoose';

let initialized = false;

export const connect = async () => {
    mongoose.set('strictQuery', true);

    if (initialized) {
        console.log('Already connected to MongoDB');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'next-blog',
        });

        console.log('Connected to MongoDB');

        // Check the connection state
        const state = mongoose.connection.readyState;
        switch (state) {
            case 0:
                console.log("❌ Disconnected from MongoDB");
                break;
            case 1:
                console.log("✅ Successfully connected to MongoDB");
                break;
            case 2:
                console.log("⏳ Connecting to MongoDB...");
                break;
            case 3:
                console.log("🔄 Disconnecting from MongoDB...");
                break;
            default:
                console.log("Unknown MongoDB connection state:", state);
        }

        initialized = true;
    } catch (error) {
        console.error('❌ Error connecting to MongoDB:', error);
    }
};
