const { User } = require("../../models/user")

const { sendEmail } = require("../../helpers")

const { BASE_URL } = process.env;

const resendEmail = async (req, res) => {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user || user.verify) {
        return res.status(404).json({
            message: "User not found",
          });
    }
    
    const mail = {
        to: email,
        subject: "Verify email",
        html: `<a target="_blank" href="${BASE_URL}/api/auth/verify/${user.verificationToken}">Click to verify you email</a>`
    }
    await sendEmail(mail);

    res.json({
        message: "Email send success"
    })
}

module.exports = resendEmail;