import express from "express";

import {
    getInventory,
    purchaseInventory
} from "../controllers/inventoryController.js";

const router = express.Router();

router.get("/inventory", getInventory);

router.post("/purchase", purchaseInventory);

export default router;