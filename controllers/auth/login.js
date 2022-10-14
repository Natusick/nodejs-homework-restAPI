const bcrypt = require("bcryptjs")

const {User} = require("../../models/user")

const login = async(req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if(!user) {
        return res.status(401).json({
            message: "Email or password wrong",
          });
    }
    const passwordCompare = await bcrypt.compare(password, user.password);
    if(!passwordCompare) {
        return res.status(401).json({
            message: "Email or password wrong",
          });
    }
    const token = "212rts.34qes.4352";
    res.json({
        token,
    })
}
module.exports = login;