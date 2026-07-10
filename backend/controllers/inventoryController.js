import {
    fetchStock,
    purchaseItem
} from "../services/inventoryService.js";

// GET /api/inventory
export const getInventory = async (req, res) => {

    try {

        const inventory = await fetchStock();

        res.status(200).json({
            success: true,
            stock: inventory.stock
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};


// POST /api/purchase
export const purchaseInventory = async (req, res) => {

    try {

        const result = await purchaseItem();

        if (!result.success) {

            return res.status(400).json(result);

        }

        res.status(200).json(result);

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};