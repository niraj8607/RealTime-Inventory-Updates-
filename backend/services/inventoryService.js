import mutex from "../utils/mutex.js";
import { getStock, updateStock } from "../models/inventoryModel.js";
import { getIO } from "../sockets/socket.js";



// Current Stock
export const fetchStock = async () => {
    return await getStock();
};

// Purchase Logic
export const purchaseItem = async () => {

    return await mutex.runExclusive(async () => {

        const inventory = await getStock();

        if (inventory.stock <= 0) {
            return {
                success: false,
                message: "Out of Stock"
            };
        }

        const newStock = inventory.stock - 1;

        await updateStock(inventory.id, newStock);

        // Broadcast to all connected clients
        getIO().emit("inventoryUpdate", {
            stock: newStock
        });
        
        return {
            success: true,
            stock: newStock
        };

    });

};