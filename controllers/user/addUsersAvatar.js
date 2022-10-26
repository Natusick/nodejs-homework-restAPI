const fs = require("fs/promises")
const path = require("path")

const {User} = require("../../models/user")

const avatarsDir = path.join(__dirname, "../../", "public", "avatars")

const updateAvatar = async(req, res)=> {
    const {_id} = req.user;
    const {path: tempUpload, originalname} = req.file;
    try{
    const [extention]= originalname.split(".").reverse();
    const filename = `${_id}.${extention}`;
    const resultUpload = path.join(avatarsDir, filename);
    await fs.rename(tempUpload, resultUpload);
    const avatarURL = path.join("avatars", filename);
    await User.findByIdAndUpdate(_id, {avatarURL});

    res.json({
        avatarURL,
    });
}
catch (error) { 
    await fs.unlink(tempUpload);
    throw error;
}
}

module.exports = updateAvatar;