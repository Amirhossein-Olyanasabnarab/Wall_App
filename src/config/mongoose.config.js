const mongoose = require("mongoose");
const dotEnv = require("dotenv");
dotEnv.config();

const MONGO_HOST = process.env.DB_HOST;
mongoose.connect(MONGO_HOST)
    .then(() => {
        console.log(`Connecting to MongoDB was successfully.`);
    })
    .catch((err) => {
        console.log(err?.message ?? 'Connecting to MongoDB was failed.')
    })