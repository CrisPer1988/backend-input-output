import express from "express";
import { createCashIn, getCash } from "../controllers/index.js";

const router = express.Router();

router.route("/").post(createCashIn);

router.route("/getCash").post(getCash);

export default router;
