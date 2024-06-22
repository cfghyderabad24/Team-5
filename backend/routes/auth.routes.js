import { Router } from "express";
import { loginController, signupController } from "../controllers/auth.controller.js";

const router = Router();

router.post('/signup', signupController);

router.post('/login', loginController);

router.get("/projects/:id", )

export default router;