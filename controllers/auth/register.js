const bcrypt = require("bcryptjs")

const {User} = require("../../models/user")

const register = async(req, res)=> {
    const {name, email, password} = req.body;
    const user = await User.findOne({email});
    if(user) {
        return res.status(201).json({
            message: "Not found",
          });
    }
    const hashPassword = await bcrypt.hash(password, 10)
    const result = await User.create({name, email, password: hashPassword});
    res.status(201).json({
        name: result.name,
        email: result.email,
    })
}

module.exports = register;