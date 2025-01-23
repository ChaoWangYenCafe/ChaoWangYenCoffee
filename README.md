
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ชำระเงินผ่านพร้อมเพย์ - ร้านกาแฟ</title>
    <link rel="stylesheet" href="style.css"> <!-- ลิงก์ไฟล์ CSS ภายนอก -->
    <style>
        /* ตั้งค่าพื้นหลังให้มีรูปภาพ */
        body {
            font-family: 'Prompt', sans-serif;
            margin: 0;
            padding: 0;
            text-align: center;
            background: url('[file:///C:/Users/toppt/Downloads/Coffe.png](https://raw.githubusercontent.com/ChaoWangYenCafe/ChaoWangYenCoffee/refs/heads/main/Coffe.png)') no-repeat center center fixed;
            background-size: cover;
            color: #fff;
        }

        /* เพิ่มเลเยอร์สีเข้มเพื่อให้ตัวหนังสืออ่านง่าย */
        .overlay {
            background-color: rgba(0, 0, 0, 0.5);
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        /* การ์ดตรงกลาง */
        .container {
            background: rgba(255, 255, 255, 0.9);
            padding: 30px;
            border-radius: 15px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            max-width: 400px;
            width: 100%;
            color: #5d4037;
        }

        h1 {
            font-size: 28px;
        }

        p {
            font-size: 18px;
            color: #7a5c51;
        }

        /* ปุ่มสวย ๆ */
        .btn {
            background-color: #8D6E63;
            color: white;
            padding: 15px 30px;
            font-size: 18px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: 0.3s ease-in-out;
        }

        .btn:hover {
            background-color: #5D4037;
        }

        /* QR Code */
        .qr-code img {
            width: 100%;
            max-width: 300px;
            border-radius: 10px;
        }
    </style>
</head>
<body>

    <div class="overlay">
        <div class="container">
            <h1>ยินดีต้อนรับสู่</h1>
            <p><h1>ChaoWangYenCoffee</h1></p>
            <div class="qr-code">
                <img src="[file:///C:/Users/toppt/Downloads/Coffe%20(1).png](https://raw.githubusercontent.com/ChaoWangYenCafe/ChaoWangYenCoffee/refs/heads/main/Coffe%20(1).png)" alt="QR Code พร้อมเพย์">
            </div>
            <br>
            <button class="btn" onclick="goToShop()">ไปยังหน้าซื้อของ</button>
        </div>
    </div>

    <script>
        function goToShop() {
            window.location.href = "cafe.html"; // แก้ไข URL ให้ตรงกับไฟล์จริง
        }
    </script>

</body>
</html>
