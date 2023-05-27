const express = require("express");
const router = express.Router();

const ctrl = require("../../controllers/contacts");
const {
  validateBody,
  validateStatusBody,
  isValidId,
  authentication,
} = require("../../middlewares");
const schemas = require("../../models/contacts");

router.get("/", authentication, ctrl.getAll);
router.get("/:contactId", isValidId, authentication, ctrl.getContactById);

router.post(
  "/",
  authentication,
  validateBody(schemas.addSchema),
  ctrl.addContact
);

router.delete("/:contactId", authentication, isValidId, ctrl.deleteContactByID);

router.put(
  "/:contactId",
  authentication,
  isValidId,
  validateBody(schemas.addSchema),
  ctrl.updateContact
);

router.patch(
  "/:contactId/favorite",
  authentication,
  isValidId,
  validateStatusBody(schemas.updateFavoriteSchema),
  ctrl.updateStatusContact
);

module.exports = router;
