import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import authRoutes from './routes/auth.routes.js';
import projectRoutes from './routes/projectRoutes.js'
dotenv.config();

const app = express();

const PORT = 8000;

app.use(cors());
app.use(bodyParser.json({limit: '50mb'}));
app.use(express.json());

app.use("/api/auth", authRoutes);
// app.use("/api/projects", projectRoutes);

mongoose.connect(process.env.MONGODB_URI, {
}).then(() => {
    console.log("Database connected");
    app.listen(8000, () => {
        console.log('App running on PORT 8000');
    })
}).catch((error) => {
    console.log(error);
});
