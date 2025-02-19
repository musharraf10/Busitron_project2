
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
        user: "8608b8001@smtp-brevo.com",
        pass: "37OvcXw4xBNbydT8",
    },
});


export default  transporter


// SMTP Server
// smtp-relay.brevo.com
// Port
// 587
// Login
// 8608b8001@smtp-brevo.com

//pass:37OvcXw4xBNbydT8
//sendreemail":main