const bcrypt = require("bcryptjs")
const gravatar = require("gravatar")

const {User} = require("../../models/user")

const register = async(req, res)=> {
    const {name, email, password} = req.body;
    const user = await User.findOne({email});
    if(user) {
        return res.status(409).json({
            message: "Email in use",
          });
    }
    const hashPassword = await bcrypt.hash(password, 10)
    const avatarURL = gravatar.url(email)
    const result = await User.create({name, email, password: hashPassword, avatarURL});
    res.status(201).json({
        name: result.name,
        email: result.email,
    })
}

module.exports = register;