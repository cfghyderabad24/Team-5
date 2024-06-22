import Frontliner from "../models/frontliner.model.js";
import SeniorManager from "../models/seniorManager.model.js";
import GeneralManager from "../models/generalManager.model.js";
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const signupController = async (req, res) => {
    const { email, password, role, phoneNo, name } = req.body;
    if (role === "frontliner") {
        let frontliner = await Frontliner.findOne({ email });
        if (frontliner) {
            return res.status(400).json({ message: "Frontliner already exists" });
        }
        const hashedPassword = bcryptjs.hashSync(password, 12);
        frontliner = await Frontliner.create({
            email, password: hashedPassword,
            phoneNo, name
        });
        return res.status(200).json({ message: "Frontliner created successfully" });
    }
    else if (role === "senior manager") {
        let seniorManager = await SeniorManager.findOne({ email });
        if (seniorManager) {
            return res.status(400).json({ message: "Senior Manager already exists" });
        }
        const hashedPassword = bcryptjs.hashSync(password, 12);
        seniorManager = await SeniorManager.create({
            email, password: hashedPassword,
            phoneNo, name
        });
        return res.status(200).json({ message: "Senior Manager created successfully" });
    }
    else if (role === "general manager") {
        let generalManager = await GeneralManager.findOne({ email });
        if (generalManager) {
            return res.status(400).json({ message: "General Manager already exists" });
        }
        const hashedPassword = bcryptjs.hashSync(password, 12);
        generalManager = await GeneralManager.create({
            email, password: hashedPassword,
            phoneNo, name
        });
        return res.status(200).json({ message: "General Manager created successfully", });
    }
}

export const loginController = async (req, res) => {
    const { email, password, role } = req.body;
    if (role === "frontliner") {
        let frontliner = await Frontliner.findOne({ email });
        if (!frontliner) {
            return res.status(400).json({ message: "Frontliner not found" });
        }
        const isMatch = bcryptjs.compareSync(password, frontliner.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Incorrect password" });
        }
        const token = jwt.sign({ id: frontliner._id, userType: "frontliner" }, process.env.JWT_SECRET);
        return res.status(200).cookie("access_token", token, {
            httpOnly: true,
        }).json({ message: "Frontliner logged in successfully", id: frontliner._id, role: "frontliner" });
    } else if (role === "senior manager") {
        let seniorManager = await SeniorManager.findOne({ email });
        if (!seniorManager) {
            return res.status(400).json({ message: "Senior Manager not found" });
        }
        const isMatch = bcryptjs.compareSync(password, seniorManager.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Incorrect password" });
        }
        const token = jwt.sign({ id: seniorManager._id, userType: "senior manager" }, process.env.JWT_SECRET);
        return res.status(200).cookie("access_token", token, {
            httpOnly: true,
        }).json({ message: "Senior Manager logged in successfully", id: seniorManager._id, role: "senior manager" });
    } else if (role === "general manager") {
        let generalManager = await GeneralManager.findOne({ email });
        if (!generalManager) {
            return res.status(400).json({ message: "General Manager not found" });
        }
        const isMatch = bcryptjs.compareSync(password, generalManager.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Incorrect password" });
        }
        const token = jwt.sign({ id: generalManager._id, userType: "general manager" }, process.env.JWT_SECRET);
        return res.status(200).cookie("access_token", token, {
            httpOnly: true,
        }).json({ message: "General Manager logged in successfully", id: generalManager._id, role: "general manager" });
    }
}