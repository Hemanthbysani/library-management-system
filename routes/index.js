import { Router } from "express";
import bookRoute from "./bookRoute.js";
import userRouter from "./userRoute.js";
import { verifyToken } from "../middlewares/verifyToken.js";
const router = Router();

router.use("/books", verifyToken, bookRoute);
router.use("/user", userRouter);

export default router;
