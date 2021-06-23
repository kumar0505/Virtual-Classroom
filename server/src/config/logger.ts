import winston, { Logger, format } from 'winston';


const logger : Logger = winston.createLogger({
    transports: [
        new winston.transports.Console({
            format: format.combine(
                format.timestamp(),
                format.colorize(),
                format.simple()
              )
        }),
        new winston.transports.File({
            filename: 'error.log',
            level: 'info',
            format: winston.format.combine(winston.format.timestamp(), winston.format.json())
        })
    ]
})

export default logger;