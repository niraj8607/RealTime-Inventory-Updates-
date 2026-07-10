import sqlite3 from "sqlite3";
import path from "path";
import { fileURLToPath } from "url";

sqlite3.verbose();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dbPath = path.join(__dirname, "../database/inventory.db");

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.log("❌ Database Connection Failed:", err.message);
    } else {
        console.log("✅ SQLite Connected Successfully");

        createInventoryTable();
    }
});

function createInventoryTable() {

    db.run(`
        CREATE TABLE IF NOT EXISTS inventory(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            stock INTEGER NOT NULL
        )
    `);

    db.get(
        "SELECT COUNT(*) AS count FROM inventory",
        (err, row) => {

            if (err) {
                console.log(err.message);
                return;
            }

            if (row.count === 0) {

                db.run(
                    "INSERT INTO inventory(stock) VALUES(?)",
                    [100]
                );

                console.log("Initial Stock Inserted");
            }
        }
    );

}

export default db;