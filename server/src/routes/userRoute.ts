import express from 'express';
import { signupHandler, signinHandler } from "../controllers/UserController";

const userRouter = express.Router();

userRouter.post('/signup', signupHandler);
userRouter.post('/signin', signinHandler);

export default userRouter;