import { Router } from "express";
import { signupController } from "../controllers/auth.controller";

const router = Router();

router.post('/signup', signupController);

export default router;