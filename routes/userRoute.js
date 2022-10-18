import express from "express";
import * as userController from "../controllers/userController.js";
import * as authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/register").post(userController.createUser);
router
  .route("/")
  .get(authMiddleware.authenticateToken, userController.getAllUsers);
router
  .route("/:id")
  .get(authMiddleware.authenticateToken, userController.getAUser);

export default router;
