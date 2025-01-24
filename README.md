
<!-- saved from url=(0027)file:///E:/Coffee/Home.html -->
<html lang="th"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>หน้าแรก</title>
    <link rel="stylesheet" href="./หน้าแรก_files/style.css"> <!-- ลิงก์ไฟล์ CSS ภายนอก -->
    <style>
        /* ตั้งค่าพื้นหลังให้มีรูปภาพ */
        body {
            font-family: 'Prompt', sans-serif;
            margin: 0;
            padding: 0;
            text-align: center;
            
            color: #fff;
        }

        /* เพิ่มเลเยอร์สีเข้มเพื่อให้ตัวหนังสืออ่านง่าย */
        .overlay {
           
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        /* การ์ดตรงกลาง */
        .container {
            background: #5d40373b;
            padding: 30px;
            border-radius: 15px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            max-width: 400px;
            width: 100%;
            color: #000000;
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
        .overlay {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed; /* ยึดตำแหน่งให้คงที่ */
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
    </style>
</head>
<body>

    <div class="overlay">
        <div class="container">
            <h1>ยินดีต้อนรับสู่</h1>
            <p></p><h2>ChaoWangYenCoffee</h2><p></p>
            <div class="qr-code">
                
            </div>
            <br>
            <button class="btn" onclick="goToShop()">ไปยังหน้าซื้อของ</button>
        </br>
        <br>
            <a href="https://forms.gle/zce3VxtoE1JpdAHt7" target="_blank">
                <button class="btn">แบบสอบถาม</button>
            </a>
            
        </div>
    </div>

    <script>
        function goToShop() {
            window.location.href = "cafe.html"; // แก้ไข URL ให้ตรงกับไฟล์จริง
        }
    </script>



</body></html>
