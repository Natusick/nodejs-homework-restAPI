const {User} = require("../../models/user")

const verify = async(req, res)=> {
    const {verificationToken} = req.params;
    const user = await User.findOne({verificationToken});
    if(!user){
        return res.status(404).json({
            message: "User not found",
          });
    }
    await User.findByIdAndUpdate(user._id, {verify: true, verificationToken: ""});

    res.json({
        message: "Verification email sent"
    })
}

module.exports = verify;