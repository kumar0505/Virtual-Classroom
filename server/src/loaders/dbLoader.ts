import { createConnection } from "typeorm";
import logger from "../config/logger";
import { ormConfig } from "../ormconfig";
/**
 * This function made the default connection with mongoDB database
 */

export default async () => {
    try {
        const connection = await createConnection(ormConfig);
        if (connection) {
            logger.info('System connected to database');
            process.on('SIGINT', async () => {
                logger.error(`Closing database default connection due to application termination`);
                await connection.close();
                process.exit();
            })
        } else {
            logger.error(`DB connection error : ${'Unable to connect with DB'}`);
            process.exit();
        }
    } catch (error) {
        logger.error(`DB connection error : ${error}`);
        process.exit();
    }

}