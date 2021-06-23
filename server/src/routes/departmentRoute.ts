import express from 'express';
import { addDepartment } from '../controllers/DepartmentController';

const departmentRouter = express.Router();

departmentRouter.post('/addDepartment', addDepartment);

export default departmentRouter;