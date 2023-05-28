const express = require("express");
const router = express.Router();

const { validateBody, authentication } = require("../../middlewares");

const ctrl = require("../../controllers/auth");

const { schemas } = require("../../models/user");

router.post("/register", validateBody(schemas.registerSchema), ctrl.register);
router.post("/login", validateBody(schemas.loginSchema), ctrl.login);
router.get("/current", authentication, ctrl.getCurrent);
router.post("/logout", authentication, ctrl.logout);

module.exports = router;
