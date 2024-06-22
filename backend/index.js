import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
dotenv.config();

const app = express();

const PORT = 3000;

app.use(cors());
app.use(bodyParser.json({limit: '50mb'}));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
}).then(() => {
    console.log("Database connected");
    app.listen(3000, () => {
        console.log('App running on PORT 3000');
    })
}).catch((error) => {
    console.log(error);
});
