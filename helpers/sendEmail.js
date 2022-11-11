require('dotenv').config()
const sgMail = require("@sendgrid/mail");

const {SENDGRID_API_KEY} = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async(data) => {
    const mail = {...data, from: "natallia.daniluk@gmail.com"};
    await sgMail.send(mail);
    return true;
}

module.exports = sendEmail;