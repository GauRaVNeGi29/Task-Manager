const mongoose = require("mongoose")

const connectDB = async () => {
    try{
        const connect = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected`);    
    }
    catch(error){
        console.log(error);
        process.exit(1);
    }
};

module.exports = connectDB

// Use this func in server.js to connect the MongoDB and start server.

// const startServer = async () => {
//     try {
//         await connectDB();
//         app.listen(PORT, ()=> {
//             console.log(`Server running on port ${PORT}`);
//         });
//     } catch (error) {
//         console.log("error");
//     }
// };
// startServer();