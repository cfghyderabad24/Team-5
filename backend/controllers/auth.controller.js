import Frontliner from "../models/Frontliner.js";
import SeniorManager from "../models/SeniorManager.js";
import bcryptjs from 'bcryptjs';

export const signupController = async (req, res) => {
    const {email, password, role} = req.body;
    if (role === "frontliner") {
        let frontliner = await Frontliner.findOne({email});
        if (frontliner) {
            return res.status(400).json({message: "Frontliner already exists"});
        }
        const hashedPassword = bcryptjs.hashSync(password, 12);
        frontliner = await Frontliner.create({email, hashedPassword});
        return res.status(200).json({message: "Frontliner created successfully"});
    }
    else if (role === "senior manager") {
        let seniorManager = await SeniorManager.findOne({email});
        if (seniorManager) {
            return res.status(400).json({message: "Senior Manager already exists"});
        }
        const hashedPassword = bcryptjs.hashSync(password, 12);
        seniorManager = await SeniorManager.create({email, hashedPassword});
        return res.status(200).json({message: "Senior Manager created successfully"});
    }
    else if (role === "general manager") {
        let generalManager = await generalManager.findOne({email});
        if (generalManager) {
            return res.status(400).json({message: "General Manager already exists"});
        }
        const hashedPassword = bcryptjs.hashSync(password, 12);
        generalManager = await GeneralManager.create({email, hashedPassword});
        return res.status(200).json({message: "General Manager created successfully"});
    }
}
