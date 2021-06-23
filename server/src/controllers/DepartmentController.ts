import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { Department } from "../models/Department";
import { IResponse } from "../types/shared";

export async function addDepartment(req: Request, res: Response) {
    let newDept: Department;
    let responseBody: IResponse<any> = {
        succcess: false,
        errorMsg: '',
        successMsg: '',
        response: undefined
    }

    let reqData = req.body;

    if (!reqData.deptName) {
        responseBody.errorMsg = 'Department name is required';
        res.status(StatusCodes.BAD_REQUEST).json(responseBody);
        return;
    }

    if (!reqData.institute) {
        responseBody.errorMsg = 'Department name is required';
        res.status(StatusCodes.BAD_REQUEST).json(responseBody);
        return;
    }

    let dept = await Department.findOne({ where: { deptName: reqData.deptName, institute: reqData.institute } });
    if (dept) {
        responseBody.errorMsg = 'Department already exist';
        res.status(StatusCodes.BAD_REQUEST).json(responseBody);
        return;
    }



    newDept = new Department({ ...reqData });
    await newDept.save();
    responseBody.succcess = true;
    responseBody.successMsg = 'Department added successfully.';
    responseBody.response = newDept;
    res.status(StatusCodes.OK).json(responseBody);

}