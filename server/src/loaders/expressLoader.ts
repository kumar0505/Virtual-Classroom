import cors from "cors";
import express, { Request, Response } from "express";
import departmentRouter from "../routes/departmentRoute";
import instituteRouter from "../routes/instituteRoute";
import userRouter from "../routes/userRoute";
import { IReqUser } from "../types/shared";

/**
 * Initialize the express App
 */
export default async (app: express.Application) => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cors());


    app.get('/', (req: Request, res: Response) => {
        res.send('OK : eClass Server!!');
    })

    app.use('/api/user', userRouter);
    app.use('/api/institute', instituteRouter);
    app.use('/api/department', departmentRouter)
}

/* Adding user object to Express global namespace */
declare global {
    namespace Express {
        interface Request {
            reqUser?: IReqUser
        }
    }
}