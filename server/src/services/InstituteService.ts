import { getManager } from "typeorm";
import logger from "../config/logger";
import { IInstitute, Institute } from "../models/Institute";
import { RoleMap } from "../models/RoleMap";
import { IUser, User } from "../models/User";
import { IServiceResponse } from "../types/shared";
import UtilityService from "./UtilityService";

export default class InstituteService {

    private _utility: UtilityService;

    constructor() {
        this._utility = new UtilityService;
    }

    async addInstituteByAdmin(inst: IInstitute, user: IUser): Promise<IServiceResponse<any>> {
        let res: IServiceResponse<any> = {
            errMsg: '',
            internalError: false,
            response: {},
            success: false
        }
        let newInst = new Institute({ ...inst });
        let newUser = new User({ ...user });
        let newRoleMap = new RoleMap({ roleType: 'admins' });

        let hashedPassword = await this._utility.generatePasswordHash(newUser.password);
        if (!hashedPassword) {
            res.internalError = true;
            res.errMsg = "Not been able to hash the password";
            return res;
        }
        newUser.password = hashedPassword;

        try {
            await getManager().transaction(async transactionalEntityManager => {
                let roleMap = await transactionalEntityManager.save(newRoleMap);
                newUser.role = roleMap;
                await transactionalEntityManager.save(newInst);
                await transactionalEntityManager.save(newUser);
            })
        } catch (error) {
            logger.error(error);
            res.errMsg = 'Database error while inserting document.';
            ///return res;
        }

        res.success = true;
        res.response.inst = inst;
        res.response.user = user;

        return res;
    }
}
