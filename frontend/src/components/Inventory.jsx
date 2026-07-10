import { useEffect, useState } from "react";
import socket from "../socket/socket";
import {
    getInventory,
    purchaseInventory,
} from "../api/inventoryApi";
import "../index.css";

function Inventory() {
    const [stock, setStock] = useState(0);
    const [isPurchasing, setIsPurchasing] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        loadStock();

        socket.on("inventoryUpdate", (data) => {
            setStock(data.stock);
        });

        return () => {
            socket.off("inventoryUpdate");
        };
    }, []);

    const loadStock = async () => {
        try {
            const res = await getInventory();
            setStock(res.data.stock);
        } catch (err) {
            console.error("Failed to load inventory");
        }
    };

    const handlePurchase = async () => {
        setIsPurchasing(true);
        setError(""); 
        
        try {
            await purchaseInventory();
        } catch (err) {
            setError(err.response?.data?.message || "Error: Transaction Failed!");
            setTimeout(() => setError(""), 3000); 
        } finally {
            setIsPurchasing(false);
        }
    };

    const isOutOfStock = stock === 0;

    return (
        <div className="inventory-wrapper">
            <div className="inventory-card">
                
                {/* BLUE SECTION: Header */}
                <div className="card-header">
                    <h1>LIVE INVENTORY</h1>
                    <p>Real-Time Sync Activated <span className="live-dot"></span></p>
                </div>

                <div className="card-body">
                    {/* GREEN / RED SECTION: Stock Display */}
                    <div className={`stock-display ${isOutOfStock ? "out-of-stock" : "available"}`}>
                        <h2>{isOutOfStock ? "OUT OF STOCK" : "CURRENT STOCK"}</h2>
                        <div className="stock-number">{stock}</div>
                    </div>

                    {/* RED SECTION: Error Message */}
                    {error && (
                        <div className="error-message">
                            ⚠️ {error}
                        </div>
                    )}

                    {/* BLUE SECTION: Action Button */}
                    <button
                        onClick={handlePurchase}
                        disabled={isOutOfStock || isPurchasing}
                        className={`purchase-btn ${isOutOfStock ? "btn-disabled" : "btn-active"}`}
                    >
                        {isPurchasing ? "Processing..." : isOutOfStock ? "Sold Out" : "PURCHASE ITEM"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Inventory;