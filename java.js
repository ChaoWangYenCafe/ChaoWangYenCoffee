const express = require('express');
const app = express();
const mysql = require('mysql');

// สร้างการเชื่อมต่อฐานข้อมูล
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cafe_orders'
});

// เชื่อมต่อกับฐานข้อมูล
db.connect(function(err) {
    if (err) throw err;
    console.log("Connected to database!");
});

// ดึงข้อมูลคำสั่งซื้อจากฐานข้อมูล
app.get('/getOrders', (req, res) => {
    const sql = "SELECT * FROM orders";
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result);  // ส่งข้อมูลคำสั่งซื้อในรูปแบบ JSON
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
