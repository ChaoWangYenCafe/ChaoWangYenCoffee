function removeFromCart(product) {
    const index = cart.findIndex(item => item.product === product);
    if (index > -1) {
        cart.splice(index, 1); // ลบรายการออกจากตะกร้า
    }
    displayCart();
}
// script.js
let cart = [];

function addToCart(product, price) {
    // เช็คว่ามีสินค้านี้อยู่ในตะกร้าหรือไม่
    const existingProduct = cart.find(item => item.product === product);
    if (existingProduct) {
        existingProduct.quantity += 1; // เพิ่มจำนวนถ้ามีอยู่แล้ว
    } else {
        cart.push({ product, price, quantity: 1 }); // เพิ่มสินค้าใหม่
    }
    displayCart();
}

function displayCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.product} - ${item.quantity} ชิ้น (ราคา: ${item.price} บาท)`;
        cartItems.appendChild(li);
        total += item.price * item.quantity; // คำนวณราคาสุทธิ
    });

    document.getElementById('total-price').textContent = `รวม: ${total} บาท`;
}

function checkout() {
    alert('กำลังไปยังหน้าชำระเงิน...');
    // แทนที่ด้วยการดำเนินการชำระเงิน QR Code
}
function scrollLeft() {
    document.querySelector('.product-container').scrollBy({
        left: -200,
        behavior: 'smooth'
    });
}

function scrollRight() {
    document.querySelector('.product-container').scrollBy({
        left: 200,
        behavior: 'smooth'
    });
}
function orderNow() {
    window.location.href = "order-confirmation.html"; // เปลี่ยนเป็น URL ของหน้าการยืนยันคำสั่งซื้อ
 }
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
