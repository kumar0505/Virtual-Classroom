import logger from "../config/logger";
import { User } from "../models/User";
import { IServiceResponse } from "../types/shared";
import UtilityService from "./UtilityService";
import jwt from "jsonwebtoken";
import { config } from "../config/config";

export default class UserService {

    private _utitlity: UtilityService;

    constructor() {
        this._utitlity = new UtilityService;
    }

    async SignUp(user: any) {
        // create new user and return ACK
    }

    public async checkUserCredential(email: string, password: string): Promise<IServiceResponse<any>> {
        let res: IServiceResponse<any> = {
            errMsg: '',
            internalError: false,
            response: {},
            success: false
        }

        try {
            let user = await User.findOne({ where: { email: email }, select: ["id", "firstName", "lastName", "email", "password", "role"], relations: ["role", "institute"] });
            console.log(user)
            if (!user) {
                res.success = false;
                res.errMsg = "User Not Found";
                return res;
            }
            let passwordCheck = await this._utitlity.comparePassword(password, user.password);
            let token = jwt.sign({
                email: user.email,
                access: user.role.roleType,
                instId: user.institute.id,
            }, config.secret.key);
            let usr: any = user;
            delete usr.password;
            usr.role = user.role.roleType;
            if (passwordCheck) {
                res.success = true;
                res.errMsg = "";
                res.response.user = usr;
                res.response.token = token;
                return res;
            } else {
                res.success = false;
                res.errMsg = "Incorrect password";
                return res;
            }
        } catch (error) {
            console.log(error);
            logger.error(error);
            res.internalError = true;
            res.errMsg = 'Database error';
        }

        return res;
    }
}