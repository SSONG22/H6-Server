"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const nodemailer = require("nodemailer");
class EmailRoutes {
    constructor() {
        this.emailRouter = express.Router();
        this.router();
    }
    router() {
        this.emailRouter.get('/nodemailerTest', function (req, res) {
            let email = req.body.email;
            let transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'h6.verifying.email@gmail.com',
                    pass: 'starbucks0123' // gmail 계정의 비밀번호를 입력
                }
            });
            let mailOptions = {
                from: 'ansongi527@gmail.com',
                to: 'annna0449@naver.com',
                subject: 'Sending Email using Node.js',
                text: 'That was easy!' // 내용
            };
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                }
                else {
                    console.log('Email sent: ' + info.response);
                }
            });
        });
    }
}
exports.EmailRoutes = EmailRoutes;
exports.emailRoutes = new EmailRoutes();
//# sourceMappingURL=email.js.map