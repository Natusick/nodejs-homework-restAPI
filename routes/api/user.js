const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers/user");

const { authenticate, upload } = require("../../middlewares");

router.patch("/avatars", authenticate, upload.single("avatar"), ctrl.addUserAvatar);

module.exports = router;