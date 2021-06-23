import cors from "cors";
import express, { Application, Request, Response } from "express";
import { config } from "./config/config";
import logger from "./config/logger";
import loaders from "./loaders";
import 'reflect-metadata';



export async function startServer() {
    const app: Application = express();

    await loaders(app);

    app.listen({ port: 5000, host: '0.0.0.0' }, () => {
        logger.info(`server is running at port ${5000}`)
    });
}