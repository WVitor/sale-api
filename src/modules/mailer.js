var nodemailer = require('nodemailer');
var mailerHbs = require('nodemailer-express-handlebars');
var path = require('path');
var transport = nodemailer.createTransport({
    host: process.env.MAILER_HOST,
    port: parseInt(process.env.MAILER_PORT),
    auth: {
        user: process.env.AUTH_USER,
        pass: process.env.AUTH_PASS
    },
    secure: false,
    tls: {
        rejectUnauthorized: false
    },
});
transport.use('compile', mailerHbs({
    'viewEngine': {
        extName: ".handlebars",
        partialsDir: path.resolve('./public/views'),
        defaultLayout: false,
    },
    'viewPath': path.resolve('./public/views'),
    'extName': '.handlebars'
}));
module.exports = transport;
//# sourceMappingURL=mailer.js.map