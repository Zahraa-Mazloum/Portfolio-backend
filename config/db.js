import mongoose from "mongoose";

const connectDB = async() => {
try {
    mongoose.set('strictQuery', false);
<<<<<<< HEAD
    const conn = await mongoose.connect(process.env.MONGO_URI, {
=======
    const conn = await mongoose.connect(process.env.MONGO_URL, {
>>>>>>> 2c80db2e48c955d6ddd8cab7516aec140274bd82
        useUnifiedTopology: true,
        dbName: process.env.DB_NAME
    })

<<<<<<< HEAD
    console.log(`Connected to: ${conn.connection.host}`);
=======
    console.log(`Connected to: ${conn.connection.host} `);
>>>>>>> 2c80db2e48c955d6ddd8cab7516aec140274bd82
} catch (error) {
    console.log(`Error: ${error.message}`)
    process.exit();
}
}

<<<<<<< HEAD
=======

>>>>>>> 2c80db2e48c955d6ddd8cab7516aec140274bd82
export default connectDB;