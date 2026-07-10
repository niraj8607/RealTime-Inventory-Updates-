import axios from "axios";

const API = "https://realtime-inventory-updates.onrender.com/api";

export const getInventory = () =>
    axios.get(`${API}/inventory`);

export const purchaseInventory = () =>
    axios.post(`${API}/purchase`);