
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>คาเฟ่</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <header>
        <h1>ยินดีต้อนรับสู่</h1> ชาววัง (เย็น) Coffee
    </header>
    <main>
        
        <div id="product-list">
            <!-- เมนูกาแฟ -->
            <div class="categoryhead">
               <header><h1>เมนูกาแฟ</h1></header> 
               <div class="category">
                <div class="product-container">
                    <!-- อเมริกาโน่ -->
                    <div class="product">
                        <img src="https://raw.githubusercontent.com/ChaoWangYenCafe/ChaoWangYenCafe/refs/heads/main/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B8%84%E0%B9%89%E0%B8%B2/%E0%B8%AD%E0%B9%80%E0%B8%A1%E0%B8%A3%E0%B8%B4%E0%B8%81%E0%B8%B2%E0%B9%82%E0%B8%99%E0%B9%88.webp" alt="อเมริกาโน่">
                        <h2>อเมริกาโน่</h2>
                        <h3>ราคา: 30 บาท</h3>
                        <button class="order-button" onclick="addToCart('อเมริกาโน่', 30)">เพิ่มไปยังตะกร้า</button>
                    </div>

                    <!-- ลาเต้ -->
                    <div class="product">
                        <img src="https://raw.githubusercontent.com/ChaoWangYenCafe/ChaoWangYenCafe/b9502674a2e6e241c29f624d9981667fc8276ecd/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B8%84%E0%B9%89%E0%B8%B2/%E0%B8%A5%E0%B8%B2%E0%B9%80%E0%B8%95%E0%B9%89.webp" alt="ลาเต้">
                        <h2>ลาเต้</h2>
                        <h3>ราคา: 30 บาท</h3>
                        <button class="order-button" onclick="addToCart('ลาเต้', 30)">เพิ่มไปยังตะกร้า</button>
                    </div>

                    <!-- เอสเปสโซ่ -->
                    <div class="product">
                        <img src="https://raw.githubusercontent.com/ChaoWangYenCafe/ChaoWangYenCafe/refs/heads/main/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B8%84%E0%B9%89%E0%B8%B2/%E0%B9%80%E0%B8%AD%E0%B8%AA%E0%B9%80%E0%B8%9B%E0%B8%AA%E0%B9%82%E0%B8%8B%E0%B9%88.webp" alt="เอสเปสโซ่">
                        <h2>เอสเปสโซ่</h2>
                        <h3>ราคา: 30 บาท</h3>
                        <button class="order-button" onclick="addToCart('เอสเปสโซ่', 30)">เพิ่มไปยังตะกร้า</button>
                    </div>
                      <!-- คาปูชิโน่ -->
                      <div class="product">
                        <img src="https://raw.githubusercontent.com/ChaoWangYenCafe/ChaoWangYenCafe/refs/heads/main/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B8%84%E0%B9%89%E0%B8%B2/%E0%B8%84%E0%B8%B2%E0%B8%9B%E0%B8%B9%E0%B8%8A%E0%B8%B4%E0%B9%82%E0%B8%99%E0%B9%88.webp" alt="คาปูชิโน่">
                        <h2>คาปูชิโน่ </h2>
                        <h3>ราคา: 30 บาท</h3>
                        <button class="order-button" onclick="addToCart('คาปูชิโน่', 30)">เพิ่มไปยังตะกร้า</button>
                    </div>
                </div>
            </div>

            <!-- เมนูชา -->
            <div class="categoryhead">
               <header><h1>เมนูชา</h1></header> 
               <div class="category">
                <div class="product-container">
                    <!-- ชาเขียว -->
                    <div class="product">
                        <img src="https://via.placeholder.com/150" alt="ชาเขียว">
                        <h2>ชาเขียว </h2>
                        <h3>ราคา: 30 บาท</h3>
                        <button class="order-button" onclick="addToCart('ชาเขียว', 30)">เพิ่มไปยังตะกร้า</button>
                    </div>

                    <!-- ชาเขียวลิ้นจี่ -->
                    <div class="product">
                        <img src="https://via.placeholder.com/150" alt="ชาเขียวลิ้นจี่">
                        <h2>ชาเขียวลิ้นจี่ </h2>
                        <h3>ราคา: 30 บาท</h3>
                        <button class="order-button" onclick="addToCart('ชาเขียวลิ้นจี่', 30)">เพิ่มไปยังตะกร้า</button>
                    </div>

                    <!-- ชาเขียวแอปเปิล -->
                    <div class="product">
                        <img src="https://via.placeholder.com/150" alt="ชาเขียวแอปเปิล">
                        <h2>ชาเขียวแอปเปิล </h2>
                        <h3>ราคา: 30 บาท</h3>
                        <button class="order-button" onclick="addToCart('ชาเขียวแอปเปิล', 30)">เพิ่มไปยังตะกร้า</button>
                    </div>
                     <!-- ชาเขียวสตอเบอรี่ -->
                     <div class="product">
                        <img src="https://via.placeholder.com/150" alt="ชาเขียวสตอเบอรี่">
                        <h2>ชาเขียวสตอเบอรี่ </h2>
                        <h3>ราคา: 30 บาท</h3>
                        <button class="order-button" onclick="addToCart('ชาเขียวสตอเบอรี่', 30)">เพิ่มไปยังตะกร้า</button>
                    </div>
                     <!-- ชาเเย็น -->
                     <div class="product">
                        <img src="https://via.placeholder.com/150" alt="ชาเเย็น">
                        <h2>ชาเเย็น </h2>
                        <h3>ราคา: 30 บาท</h3>
                        <button class="order-button" onclick="addToCart('ชาเเย็น', 30)">เพิ่มไปยังตะกร้า</button>
                    </div>
                    <!-- ชาเขียวกีวี่ -->
                    <div class="product">
                        <img src="https://via.placeholder.com/150" alt="ชาเขียวกีวี่">
                        <h2>ชาเขียวกีวี่ </h2>
                        <h3>ราคา: 30 บาท</h3>
                        <button class="order-button" onclick="addToCart('ชาเขียวกีวี่', 30)">เพิ่มไปยังตะกร้า</button>
                    </div>
                    
                     <!-- ชานมใต้หวัน -->
                     <div class="product">
                        <img src="https://via.placeholder.com/150" alt="ชานมใต้หวัน">
                        <h2>ชานมใต้หวัน </h2>
                        <h3>ราคา: 30 บาท</h3>
                        <button class="order-button" onclick="addToCart('ชานมใต้หวัน', 30)">เพิ่มไปยังตะกร้า</button>
                    </div>
                     <!-- ชามะลิ -->
                     <div class="product">
                        <img src="https://via.placeholder.com/150" alt="ชามะลิ">
                        <h2>ชามะลิ </h2>
                        <h3>ราคา: 30 บาท</h3>
                        <button class="order-button" onclick="addToCart('ชามะลิ', 30)">เพิ่มไปยังตะกร้า</button>
                    </div>
                     <!-- ชามะนาว -->
                     <div class="product">
                        <img src="https://via.placeholder.com/150" alt="ชามะนาว">
                        <h2>ชามะนาว </h2>
                        <h3>ราคา: 30 บาท</h3>
                        <button class="order-button" onclick="addToCart('ชามะนาว', 30)">เพิ่มไปยังตะกร้า</button>
                    </div>
                    
                     <!-- ชาเขียวมะนาว -->
                     <div class="product">
                        <img src="https://via.placeholder.com/150" alt="ชาเขียวมะนาว">
                        <h2>ชาเขียวมะนาว </h2>
                        <h3>ราคา: 30 บาท</h3>
                        <button class="order-button" onclick="addToCart('ชาเขียวมะนาว', 30)">เพิ่มไปยังตะกร้า</button>
                    </div>
                    <!-- ชาดำ -->
                    <div class="product">
                        <img src="https://via.placeholder.com/150" alt="ชาดำ">
                        <h2>ชาดำ </h2>
                        <h3>ราคา: 30 บาท</h3>
                        <button class="order-button" onclick="addToCart('ชาดำ', 30)">เพิ่มไปยังตะกร้า</button>
                    </div>
                     <!-- ชาเย็นโอริโอ้ -->
                     <div class="product">
                        <img src="https://via.placeholder.com/150" alt="ชาเย็นโอริโอ้">
                        <h2>ชาเย็นโอริโอ้ </h2>
                        <h3>ราคา: 30 บาท</h3>
                        <button class="order-button" onclick="addToCart('ชาเย็นโอริโอ้', 30)">เพิ่มไปยังตะกร้า</button>
                    </div>
                     <!-- ชาเย็นคาราเมล -->
                     <div class="product">
                        <img src="https://via.placeholder.com/150" alt="ชาเย็นคาราเมล">
                        <h2>ชาเย็นคาราเมล </h2>
                        <h3>ราคา: 30 บาท</h3>
                        <button class="order-button" onclick="addToCart('ชาเย็นคาราเมล', 30)">เพิ่มไปยังตะกร้า</button>
                    </div>
                   <!-- ชาเขียวน้ำผึ้งมะนาว -->
                   <div class="product">
                    <img src="https://via.placeholder.com/150" alt="ชาเขียวน้ำผึ้งมะนาว">
                    <h2>ชาเขียวน้ำผึ้งมะนาว </h2>
                    <h3>ราคา: 30 บาท</h3>
                    <button class="order-button" onclick="addToCart('ชาเขียวน้ำผึ้งมะนาว', 30)">เพิ่มไปยังตะกร้า</button>
                </div>
                  <!-- ชาเขียวดำ -->
                  <div class="product">
                    <img src="https://via.placeholder.com/150" alt="ชาเขียวดำ">
                    <h2>ชาเขียวดำ </h2>
                    <h3>ราคา: 30 บาท</h3>
                    <button class="order-button" onclick="addToCart('ชาเขียวดำ', 30)">เพิ่มไปยังตะกร้า</button>
                </div>
                 <!-- ชาเขียวคาราเมล -->
                 <div class="product">
                    <img src="https://via.placeholder.com/150" alt="ชาเขียวคาราเมล">
                    <h2>ชาเขียวคาราเมล </h2>
                    <h3>ราคา: 30 บาท</h3>
                    <button class="order-button" onclick="addToCart('ชาเขียวคาราเมล', 30)">เพิ่มไปยังตะกร้า</button>
                </div>
            <!-- ชาเขียวโอริโอ้ -->
            <div class="product">
               <img src="https://via.placeholder.com/150" alt="ชาเขียวโอริโอ้">
               <h2>ชาเขียวโอริโอ้ </h2>
               <h3>ราคา: 30 บาท</h3>
               <button class="order-button" onclick="addToCart('ชาเขียวโอริโอ้', 30)">เพิ่มไปยังตะกร้า</button>
           </div>
                </div>
                 <!-- เมนูนมสด -->
                <div class="categoryhead">
                    <header><h1>เมนูนมสด</h1></header> 
                    <div class="category">
                     <div class="product-container">
                         <!-- นมสด -->
                         <div class="product">
                             <img src="https://via.placeholder.com/150" alt="นมสด">
                             <h2>นมสด </h2>
                             <h3>ราคา: 30 บาท</h3>
                             <button class="order-button" onclick="addToCart('นมสด', 30)">เพิ่มไปยังตะกร้า</button>
                         </div>
                          <!-- โกโก้ -->
                          <div class="product">
                            <img src="https://via.placeholder.com/150" alt="โกโก้">
                            <h2>โกโก้ </h2>
                            <h3>ราคา: 30 บาท</h3>
                            <button class="order-button" onclick="addToCart('โกโก้', 30)">เพิ่มไปยังตะกร้า</button>
                        </div>
                         <!-- โยเกิร์ต -->
                         <div class="product">
                            <img src="https://via.placeholder.com/150" alt="โยเกิร์ต">
                            <h2>โยเกิร์ต </h2>
                            <h3>ราคา: 30 บาท</h3>
                            <button class="order-button" onclick="addToCart('โยเกิร์ต', 30)">เพิ่มไปยังตะกร้า</button>
                        </div>
                          <!-- นมสดคาราเมล -->
                          <div class="product">
                            <img src="https://via.placeholder.com/150" alt="นมสดคาราเมล">
                            <h2>นมสดคาราเมล </h2>
                            <h3>ราคา: 30 บาท</h3>
                            <button class="order-button" onclick="addToCart('นมสดคาราเมล', 30)">เพิ่มไปยังตะกร้า</button>
                        </div>
                        <!-- นมสดสตอเบอร์รี่ -->
                        <div class="product">
                            <img src="https://via.placeholder.com/150" alt="นมสดสตอเบอร์รี่">
                            <h2>นมสดสตอเบอร์รี่ </h2>
                            <h3>ราคา: 30 บาท</h3>
                            <button class="order-button" onclick="addToCart('นมสดสตอเบอร์รี่', 30)">เพิ่มไปยังตะกร้า</button>
                        </div>
                         <!-- โยเกิร์ตสตอเบอร์รี่ -->
                         <div class="product">
                            <img src="https://via.placeholder.com/150" alt="โยเกิร์ตสตอเบอร์รี่">
                            <h2>โยเกิร์ตสตอเบอร์รี่ </h2>
                            <h3>ราคา: 30 บาท</h3>
                            <button class="order-button" onclick="addToCart('โยเกิร์ตสตอเบอร์รี่', 30)">เพิ่มไปยังตะกร้า</button>
                        </div>
        </div>
        <!-- เมนูโซดา -->
        <div class="categoryhead">
            <header><h1>เมนูโซดา</h1></header> 
            <div class="category">
             <div class="product-container">
                 <!-- ลิ้นจี่ -->
                 <div class="product">
                     <img src="https://via.placeholder.com/150" alt="ลิ้นจี่">
                     <h2>ลิ้นจี่ </h2>
                     <h3>ราคา: 30 บาท</h3>
                     <button class="order-button" onclick="addToCart('ลิ้นจี่', 30)">เพิ่มไปยังตะกร้า</button>
                 </div>
                  <!-- กีวี่ -->
                  <div class="product">
                    <img src="https://via.placeholder.com/150" alt="กีวี่">
                    <h2>กีวี่ </h2>
                    <h3>ราคา: 30 บาท</h3>
                    <button class="order-button" onclick="addToCart('กีวี่', 30)">เพิ่มไปยังตะกร้า</button>
                </div>
                 <!-- ฝรั่ง -->
                 <div class="product">
                    <img src="https://via.placeholder.com/150" alt="ฝรั่ง">
                    <h2>ฝรั่ง </h2>
                    <h3>ราคา: 30 บาท</h3>
                    <button class="order-button" onclick="addToCart('ฝรั่ง', 30)">เพิ่มไปยังตะกร้า</button>
                </div>
                 <!-- แดงโซดา -->
                 <div class="product">
                    <img src="https://via.placeholder.com/150" alt="แดงโซดา">
                    <h2>แดงโซดา </h2>
                    <h3>ราคา: 30 บาท</h3>
                    <button class="order-button" onclick="addToCart('แดงโซดา', 30)">เพิ่มไปยังตะกร้า</button>
                </div>
                 <!-- แอบเปิ้ล -->
                 <div class="product">
                    <img src="https://via.placeholder.com/150" alt="แอบเปิ้ล">
                    <h2>แอบเปิ้ล </h2>
                    <h3>ราคา: 30 บาท</h3>
                    <button class="order-button" onclick="addToCart('แอบเปิ้ล', 30)">เพิ่มไปยังตะกร้า</button>
                </div>
                 <!-- แอบเปิ้ล -->
                 <div class="product">
                    <img src="https://via.placeholder.com/150" alt="แอบเปิ้ล">
                    <h2>แอบเปิ้ล </h2>
                    <h3>ราคา: 30 บาท</h3>
                    <button class="order-button" onclick="addToCart('แอบเปิ้ล', 30)">เพิ่มไปยังตะกร้า</button>
                </div>
                 <!-- สตอเบอรี่ -->
                 <div class="product">
                    <img src="https://via.placeholder.com/150" alt="สตอเบอรี่">
                    <h2>สตอเบอรี่ </h2>
                    <h3>ราคา: 30 บาท</h3>
                    <button class="order-button" onclick="addToCart('สตอเบอรี่', 30)">เพิ่มไปยังตะกร้า</button>
                </div>
                  <!-- สัปปะรด -->
                  <div class="product">
                    <img src="https://via.placeholder.com/150" alt="สัปปะรด">
                    <h2>สัปปะรด </h2>
                    <h3>ราคา: 30 บาท</h3>
                    <button class="order-button" onclick="addToCart('สัปปะรด', 30)">เพิ่มไปยังตะกร้า</button>
                </div>
                  <!-- แดงโซดามะนาว -->
                  <div class="product">
                    <img src="https://via.placeholder.com/150" alt="แดงโซดามะนาว">
                    <h2>แดงโซดามะนาว </h2>
                    <h3>ราคา: 30 บาท</h3>
                    <button class="order-button" onclick="addToCart('แดงโซดามะนาว', 30)">เพิ่มไปยังตะกร้า</button>
                </div>



<!--การคำนวณสินต้า-->
       <div id="floating-cart">
    <button id="toggle-cart-btn">🛒 ตะกร้าสินค้า</button>
    <div id="cart-content">
        <h2>ตะกร้าสินค้า</h2>
        <ul id="cart-items"></ul>
        <p id="total-price">รวม: 0 บาท</p>
        <button onclick="checkout()">ชำระเงิน</button>
    </div>
    <script src="java.js" defer></script>

    <script>
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        function addToCart(product, price) {
            const existingProduct = cart.find(item => item.product === product);
            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                cart.push({ product, price, quantity: 1 });
            }
            updateCart();
            localStorage.setItem('cart', JSON.stringify(cart));
        }

        function updateCart() {
            const cartItems = document.getElementById('cart-items');
            cartItems.innerHTML = '';
            let total = 0;

            cart.forEach((item, index) => {
                const li = document.createElement('li');
                li.innerHTML = `${item.product} - ${item.quantity} ชิ้น (ราคา: ${item.price} บาท)`;

                // สร้างปุ่มลบ
                const removeButton = document.createElement('button');
                removeButton.textContent = 'ลบ';
                removeButton.onclick = () => removeFromCart(index);

                li.appendChild(removeButton);
                cartItems.appendChild(li);
                total += item.price * item.quantity;
            });

            document.getElementById('total-price').textContent = `รวม: ${total} บาท`;
        }

        function removeFromCart(index) {
            const product = cart[index];
            if (product.quantity > 1) {
                product.quantity -= 1;
            } else {
                cart.splice(index, 1);
            }
            updateCart();
            localStorage.setItem('cart', JSON.stringify(cart));
        }

        function checkout() {
            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            window.location.href = `qr.html?amount=${total}`;
        }

        updateCart();
    </script>
