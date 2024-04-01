import express from 'express';
import { Login, Register } from '../controller/UserController.js';

const router = express.Router();
//  register router
router.post("/register",Register)
router.post("/login", Login)
export default router;