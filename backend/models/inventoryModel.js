import db from "../config/db.js";

// Get Current Stock
export const getStock = () => {
    return new Promise((resolve, reject) => {

        db.get(
            "SELECT * FROM inventory LIMIT 1",
            (err, row) => {

                if (err) {
                    reject(err);
                } else {
                    resolve(row);
                }

            }
        );

    });
};

// Update Stock
export const updateStock = (id, stock) => {

    return new Promise((resolve, reject) => {

        db.run(
            "UPDATE inventory SET stock = ? WHERE id = ?",
            [stock, id],
            function (err) {

                if (err) {
                    reject(err);
                } else {
                    resolve();
                }

            }
        );

    });

};