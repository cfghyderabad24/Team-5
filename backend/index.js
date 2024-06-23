import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import authRoutes from './routes/auth.routes.js';
import projectRoutes from './routes/projectRoutes.js'
import nodemailer from 'nodemailer';
import cron from 'node-cron';
import Reminder from './models/reminder.model.js';
import Frontliner from './models/frontliner.model.js';
import Project from './models/project.models.js';
import twilio from 'twilio';


dotenv.config();

const app = express();

const PORT = 8000;

app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api", projectRoutes);

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'sivanivarada@gmail.com',
        pass: "rffu wbxy dnbd dlvo"
    }
});

const emailSchema = new mongoose.Schema({
    to: String,
    subject: String,
    text: String,
    cronTime: String
});

const EmailJob = mongoose.model('EmailJob', emailSchema);

//   const sendEmails = async () => {
//     const users = ['venkatpandu999@gmail.com'];
//     users.forEach(user => {
//       const mailOptions = {
//         from: 'sivanivarada@gmail.com',
//         to: user,
//         subject: 'Monthly Update',
//         text: 'This is your monthly email update.'
//       };

//       transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//           console.log('Error sending email: ', error);
//         } else {
//           console.log('Email sent: ' + info.response);
//         }
//       });
//     });
//   };

const checkDueDates = async () => {

    const projects = await Project.find({});
    const today = new Date();

    for (let project of projects) {
        for (let key in project.dueDates) {
            if (project.dueDates[key].date) {
                const dueDate = new Date(project.dueDates[key].date);
                const daysDifference = Math.ceil((dueDate - today) / (1000 * 60 * 60 * 24));
                console.log(daysDifference);
                if (daysDifference === 15 || daysDifference === 7) {
                    // Create a reminder
                    const reminder = new Reminder({
                        date: dueDate,
                        content: `Reminder: ${key} is due in ${daysDifference} days for project ${project.name}.`,
                        toSendDate: today
                    });

                    const accountSid = 'ACc18d86c0568ac11462be14b963d24cb4';
                    const authToken = '2684eb772353663ba25ea92b6c72452c';
                    const client = twilio(accountSid, authToken);

                    client.messages
                        .create({
                            body: `Reminder: ${key} is due in ${daysDifference} days for project ${project.name}. `,
                            from: '+15632084759',
                            to: '+919160192858'
                        })
                        .then(message => console.log(message.sid))

                    await reminder.save();

                    // Push the reminder into the frontliner schema
                    const frontliner = await Frontliner.findById(project.assignedTo);
                    frontliner.reminders.push(reminder._id);
                    await frontliner.save();

                    // Send email to frontliner
                    const mailOptions = {
                        from: 'sivanivarada@gmail.com',
                        to: frontliner.email,
                        subject: 'Upcoming Due Date Reminder',
                        text: `Hello ${frontliner.name},\n\nThis is a reminder that the ${key} for project ${project.name} is due in ${daysDifference} days.\n\nBest regards,\nYour Team`,
                        html: `
                            <html>
                                <body style="font-family: Arial, sans-serif; background-color: #f6f6f6; margin: 0; padding: 0;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
        <div style="text-align: center; padding: 20px 0;">
            <img src="./cryLogo.jpeg" alt="Logo" style="width: 100px; margin-bottom: 20px;">
        </div>
        <div style="padding: 20px; text-align: left;">
            <p style="font-size: 16px; color: #333333;">Hello <strong>${frontliner.name}</strong>,</p>
            <p style="font-size: 16px; color: #333333;">This is a reminder that the <strong>${key}</strong> for project <strong>${project.name}</strong> is due in <strong>${daysDifference}</strong> days.</p>
            <p style="font-size: 16px; color: #333333;">Best regards,<br>Your Team</p>
        </div>
        <div style="text-align: center; padding: 20px 0;">
            <a href="#" style="display: inline-block; padding: 10px 20px; background-color: #007BFF; color: #ffffff; text-decoration: none; border-radius: 5px;">View Project Details</a>
        </div>
        <div style="text-align: center; padding: 20px 0; border-top: 1px solid #dddddd;">
            <p style="font-size: 12px; color: #999999;">&copy; ${new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
    </div>
</body>
                            </html>
                        `
                    };

                    transporter.sendMail(mailOptions, (error, info) => {
                        if (error) {
                            console.log('Error sending email:', error);
                        } else {
                            console.log('Email sent:', info.response);
                        }
                    });
                }
            }
        }
    }
};

// Schedule the task to run every day at midnight
const task = cron.schedule('* * * * *', () => {
    checkDueDates().then(() => {
        console.log('Cron job executed');
        task.stop(); // Stop the cron job after execution
    }).catch(error => {
        console.error('Error executing cron job:', error);
    });
});


//   cron.schedule('0 0 1 1,4,7,10 *', () => {
//     console.log('Running a job at the start of the month');
//     sendEmails();
//   });



mongoose.connect(process.env.MONGODB_URI, {
}).then(() => {
    console.log("Database connected");
    app.listen(8000, () => {
        console.log('App running on PORT 8000');
    })
}).catch((error) => {
    console.log(error);
});