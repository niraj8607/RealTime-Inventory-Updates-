import axios from "axios";

const API = "http://localhost:5000/api";

export const getInventory = () =>
    axios.get(`${API}/inventory`);

export const purchaseInventory = () =>
    axios.post(`${API}/purchase`);