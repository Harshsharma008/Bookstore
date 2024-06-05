
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
// import bookRoute from "./route/book.route.js"
const app = express();

dotenv.config();
const PORT = process.env.PORT || 4001;
const URI = process.env.MongoDBURI;

// connect to mongoDB
try {
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Hello Database");
} catch (error) {
    console.log("Error:", error);
}

// defining routes
// app.use('/', bookRoute)


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})