import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import authRoutes from './routes/auth.routes.js';
import projectRoutes from './routes/projectRoutes.js'
import nodemailer from 'nodemailer';
import cron from 'node-cron';

dotenv.config();

const app = express();

const PORT = 8000;

app.use(cors());
app.use(bodyParser.json({limit: '50mb'}));
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api", projectRoutes);

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sivanivarada@gmail.com',
    pass: process.env.EMAIL_PASSWORD
  }
  });

  const emailSchema = new mongoose.Schema({
    to: String,
    subject: String,
    text: String,
    cronTime: String
  });
  
  const EmailJob = mongoose.model('EmailJob', emailSchema);

  const sendEmails = async () => {
    const users = ['venkatpandu999@gmail.com'];
    users.forEach(user => {
      const mailOptions = {
        from: 'sivanivarada@gmail.com',
        to: user,
        subject: 'Monthly Update',
        text: 'This is your monthly email update.'
      };
  
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log('Error sending email: ', error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
    });
  };

  cron.schedule('0 0 1 1,4,7,10 *', () => {
    console.log('Running a job at the start of the month');
    sendEmails();
  });

mongoose.connect(process.env.MONGODB_URI, {
}).then(() => {
    console.log("Database connected");
    app.listen(8000, () => {
        console.log('App running on PORT 8000');
    })
}).catch((error) => {
    console.log(error);
});