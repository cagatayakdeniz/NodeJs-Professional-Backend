const winston = require("winston");

const timezoned = () => {
    return new Date().toLocaleString('en-US', {
        timeZone: 'Europe/Istanbul'
    });
}

const myformat = winston.format.combine(
    winston.format.timestamp({ format: timezoned }),
    winston.format.printf(info => `${info.timestamp} || ${info.level} || ${info.message}`)
);

const logger = winston.createLogger({
    format:myformat,
    transports: [
        new winston.transports.File({filename:'logs/log.txt'}),
    ]
});

module.exports = logger;