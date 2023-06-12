const express = require("express");
const router = express.Router();

const { validateBody, authentication, upload } = require("../../middlewares");

const ctrl = require("../../controllers/auth");

const { schemas } = require("../../models/user");

router.post("/register", validateBody(schemas.registerSchema), ctrl.register);
router.post("/login", validateBody(schemas.loginSchema), ctrl.login);
router.get("/current", authentication, ctrl.getCurrent);
router.post("/logout", authentication, ctrl.logout);
router.patch(
  "/avatars",
  authentication,
  upload.single("avatar"),
  ctrl.updateAvatar
);
router.get("/verify/:verificationCode", ctrl.verify);
router.post(
  "/verify",
  validateBody(schemas.emailSchema),
  ctrl.resendVerifyEmail
);

module.exports = router;
