import express from "express";
import { registerInstitute } from "../controllers/InstituteController";

const instituteRouter = express.Router();

instituteRouter.post('/registerInstitute', registerInstitute);

export default instituteRouter;