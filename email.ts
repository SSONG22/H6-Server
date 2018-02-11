import * as express from 'express';
import * as nodemailer from 'nodemailer';

export class EmailRoutes {
    public emailRouter: express.Router = express.Router();

    constructor(){
        this.router();
    }

    public router() {
        this.emailRouter.get('/nodemailerTest', function (req, res) {
            let email = req.body.email;

            let transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'h6.verifying.email@gmail.com',  // gmail 계정 아이디를 입력
                    pass: 'starbucks0123'          // gmail 계정의 비밀번호를 입력
                }
            });

            let mailOptions = {
                from: 'ansongi527@gmail.com',    // 발송 메일 주소 (위에서 작성한 gmail 계정 아이디)
                to: 'annna0449@naver.com',                    // 수신 메일 주소
                subject: 'Sending Email using Node.js',   // 제목
                text: 'That was easy!'  // 내용
            };

            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });
        });

    }
}

export const emailRoutes: EmailRoutes = new EmailRoutes();

