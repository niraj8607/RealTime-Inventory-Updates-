# Inventory Management API

A simple RESTful Inventory Management API built with **Node.js**, **Express.js**, and **SQLite3**. It allows you to manage inventory stock by retrieving the current stock and updating it through API endpoints.

---

## Features

* Get current inventory stock
* Update inventory stock
* SQLite database integration
* Promise-based database operations
* Simple and lightweight REST API

---

## Tech Stack

* Node.js
* Express.js
* SQLite3
* JavaScript (ES Modules)

---

## Project Structure

```text
Inventory-Management/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── inventoryController.js
│
├── models/
│   └── inventoryModel.js
│
├── routes/
│   └── inventoryRoutes.js
│
├── database/
│   └── inventory.db
│
├── app.js
├── package.json
└── README.md
```

---

## Installation

### 1. Clone the repository

```bash
git clone <repository-url>
```

### 2. Navigate to the project

```bash
cd Inventory-Management
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the server

```bash
npm start
```

or (if using nodemon)

```bash
npm run dev
```

---

## API Endpoints

### Get Current Stock

**GET**

```http
GET /api/inventory
```

#### Response

```json
{
  "id": 1,
  "stock": 120
}
```

---

### Update Stock

**PUT**

```http
PUT /api/inventory
```

#### Request Body

```json
{
  "stock": 150
}
```

#### Response

```json
{
  "message": "Stock updated successfully."
}
```

---

## Database

The project uses **SQLite3** as the database.

Example table:

```sql
CREATE TABLE inventory (
    id INTEGER PRIMARY KEY,
    stock INTEGER NOT NULL
);
```

Example data:

```sql
INSERT INTO inventory (id, stock)
VALUES (1, 100);
```

---

## Running the Project

```bash
npm install
npm start
```

The server will start on:

```text
http://localhost:3000
```

---

## Future Improvements

* Add product management
* Authentication and authorization
* Stock history tracking
* Input validation
* Unit testing
* Docker support
* Swagger API documentation

---

## Author

**Niraj Kumar**

* GitHub: https://github.com/niraj8607

---

## License

This project is licensed under the MIT License.
