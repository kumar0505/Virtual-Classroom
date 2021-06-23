import { Application } from "express";
import logger from "../config/logger";
import dbLoader from "./dbLoader";
import expressLoader from "./expressLoader";

/**
 * This module implement the app initiallizer, when the server started this module runs first
 * and initialize and configure the different services like express App instance, Database connection etc.
 */

export default async (app: Application) => {

    logger.info('Initializing database...');
    await dbLoader();

    logger.info('Initializing Express App Instance...');
    await expressLoader(app);
    logger.info('Express Application Initialized Successfuly.');
}