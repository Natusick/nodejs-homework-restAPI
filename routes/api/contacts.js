const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers/contacts");

const { authenticate } = require("../../middlewares");

router.get("/", authenticate, ctrl.getAll);

router.get("/:id", authenticate, ctrl.getById);

router.post("/", authenticate, ctrl.add);

router.delete("/:id", authenticate, ctrl.removeById);

router.put("/:id", authenticate, ctrl.updateById);

router.patch("/:id/favorite", authenticate, ctrl.updateFavorite);

module.exports = router;
