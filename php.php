<?php
// เชื่อมต่อฐานข้อมูล MySQL
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "cafe_orders";

// สร้างการเชื่อมต่อ
$conn = new mysqli($servername, $username, $password, $dbname);

// ตรวจสอบการเชื่อมต่อ
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// ดึงข้อมูลคำสั่งซื้อจากฐานข้อมูล
$sql = "SELECT * FROM orders";
$result = $conn->query($sql);

// ตรวจสอบว่ามีข้อมูลหรือไม่
if ($result->num_rows > 0) {
    $orders = [];
    while ($row = $result->fetch_assoc()) {
        $orders[] = $row;  // เก็บข้อมูลคำสั่งซื้อในอาร์เรย์
    }

    // ส่งข้อมูลคำสั่งซื้อในรูปแบบ JSON
    echo json_encode($orders);
} else {
    echo json_encode([]);  // ถ้าไม่มีคำสั่งซื้อ
}

$conn->close();
?>
