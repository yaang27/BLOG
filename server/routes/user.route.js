import express from "express";
const router = express.Router();
import { test } from "../controllers/user.controller.js";

router.post("/test", test);

export default router;