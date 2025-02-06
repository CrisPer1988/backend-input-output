import express from "express";
import { createCashIn, deleteCash, getCash } from "../controllers/index.js";

const router = express.Router();

router.route("/").post(createCashIn);

router.route("/getCash").post(getCash);

router.route("/:id").delete(deleteCash);

export default router;
