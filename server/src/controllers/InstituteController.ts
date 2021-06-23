import { Request, Response } from "express";
import { IInstitute } from "../models/Institute";
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import { IResponse } from "../types/shared";
import { IUser } from "../models/User";
import InstituteService from "../services/InstituteService";

export async function registerInstitute(req: Request, res: Response) {
    console.log(req.body);
    /* Variable to be passed to service layer */
    let inst: IInstitute;
    let user: IUser;

    /* Response body */
    let responseBody: IResponse<any> = {
        succcess: false,
        errorMsg: '',
        successMsg: '',
        response: undefined
    }

    const instService = new InstituteService();

    if (!req.body.inst || !req.body.user) {
        responseBody.errorMsg = 'Institute and User is required';
        res.status(StatusCodes.BAD_REQUEST).json(responseBody);
        return;
    }

    if (!req.body.inst.instName) {
        responseBody.errorMsg = 'Institute name is required';
        res.status(StatusCodes.BAD_REQUEST).json(responseBody);
        return;
    }

    if (!req.body.inst.address) {
        responseBody.errorMsg = 'Institute address is required';
        res.status(StatusCodes.BAD_REQUEST).json(responseBody);
        return;
    }

    if (!req.body.inst.city) {
        responseBody.errorMsg = 'Institute city name is required';
        res.status(StatusCodes.BAD_REQUEST).json(responseBody);
        return;
    }

    if (!req.body.inst.district) {
        responseBody.errorMsg = 'Institute district name is required';
        res.status(StatusCodes.BAD_REQUEST).json(responseBody);
        return;
    }

    if (!req.body.inst.state) {
        responseBody.errorMsg = 'Institute state name is required';
        res.status(StatusCodes.BAD_REQUEST).json(responseBody);
        return;
    }

    if (!req.body.inst.pincode) {
        responseBody.errorMsg = 'Institute pincode is required';
        res.status(StatusCodes.BAD_REQUEST).json(responseBody);
        return;
    }

    if (!req.body.user.firstName) {
        responseBody.errorMsg = 'User first name is required';
        res.status(StatusCodes.BAD_REQUEST).json(responseBody);
        return;
    }

    if (!req.body.user.lastName) {
        responseBody.errorMsg = 'User last name is required';
        res.status(StatusCodes.BAD_REQUEST).json(responseBody);
        return;
    }

    if (!req.body.user.email) {
        responseBody.errorMsg = 'User email is required';
        res.status(StatusCodes.BAD_REQUEST).json(responseBody);
        return;
    }

    if (!req.body.user.contact) {
        responseBody.errorMsg = 'User contact is required';
        res.status(StatusCodes.BAD_REQUEST).json(responseBody);
        return;
    }

    if (!req.body.user.password) {
        responseBody.errorMsg = 'User password is required';
        res.status(StatusCodes.BAD_REQUEST).json(responseBody);
        return;
    }

    inst = { ...req.body.inst };
    user = { ...req.body.user };
    let serviceResponse = await instService.addInstituteByAdmin(inst, user);
    if (serviceResponse.internalError || !serviceResponse.success) {
        responseBody.errorMsg = ReasonPhrases.INTERNAL_SERVER_ERROR;
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(responseBody);
        return;
    }

    responseBody.succcess = true;
    responseBody.successMsg = 'Institute added successfuly';
    responseBody.response = serviceResponse.response;
    res.status(StatusCodes.OK).json(responseBody);
}