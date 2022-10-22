const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers/auth");

const { authenticate, validateBody, upload } = require("../../middlewares");

const { schemas } = require("../../models/user");

router.post("/register", validateBody(schemas.registerSchema), ctrl.register);

router.post("/login", validateBody(schemas.registerSchema), ctrl.login);

router.get("/logout", authenticate, ctrl.logout);

router.get("/current", authenticate, ctrl.getCurrent);

router.patch("/avatar", authenticate, upload.single("avatar"), ctrl.updateAvatar)

module.exports = router;
