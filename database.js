const mongoose = require("mongoose");
const connectDB = async () => {
try {

    await mongoose.connect(process.env.DB._URL);
    console.log("Connected to DB")

} catch (error) {
    console.log("ERROR trying to connect to DB!", error);
}
}

