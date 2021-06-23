import { Request, Response } from "express";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { Student } from "../models/Student";
import { IUser } from "../models/User";
import UserService from "../services/UserService";
import { IResponse } from "../types/shared";

/**
 * Handler Function for user signup
 * @see /auth/signup
 */
export async function signupHandler(req: Request, res: Response) {
    // extract the user object

    // call signup service with this user object
    // const userService = new UserService();
    // await userService.SignUp({});

    // let usr = new User({ name: 'Shivam' });
    // usr.save();

    // response to client
}

export async function signinHandler(req: Request, res: Response) {
    let userService = new UserService;

    /* Response body */
    let responseBody: IResponse<any> = {
        succcess: false,
        errorMsg: '',
        successMsg: '',
        response: {}
    }

    if (!req.body.email) {
        responseBody.errorMsg = 'User email is required';
        res.status(StatusCodes.BAD_REQUEST).json(responseBody);
        return;
    }

    if (!req.body.password) {
        responseBody.errorMsg = 'User password is required';
        res.status(StatusCodes.BAD_REQUEST).json(responseBody);
        return;
    }

    let serviceResponse = await userService.checkUserCredential(req.body.email, req.body.password);
    if (serviceResponse.internalError) {
        responseBody.errorMsg = ReasonPhrases.INTERNAL_SERVER_ERROR;
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(responseBody);
        return;
    }

    if (!serviceResponse.success) {
        responseBody.errorMsg = ReasonPhrases.BAD_REQUEST;
        responseBody.errorMsg = serviceResponse.errMsg;
        res.status(StatusCodes.BAD_REQUEST).json(responseBody);
        return;
    }

    responseBody.succcess = true;
    responseBody.successMsg = 'Logged in successfuly';
    responseBody.response = serviceResponse.response;
    res.status(StatusCodes.OK).json(responseBody);
}