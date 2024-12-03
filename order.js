function placeOrder() {
  const phone = document.getElementById('phone').value;
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  if (!phone) {
    alert("กรุณากรอกเบอร์โทรศัพท์ก่อนทำการสั่งซื้อ");
    return;
  }

  cart.forEach(item => {
    const orderData = {
      productName: item.product,
      quantity: item.quantity,
      price: item.price * item.quantity,
      phoneNumber: phone
    };

    // ส่งข้อมูลไปยัง Web App
    fetch('https://script.google.com/macros/s/AKfycbyTZuNRKbd_tU-a7-EeIKbjKUWM2iSBXztI2ymzEuHemYmz47tXaUtSwut4qzhP8Xo/exec', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(orderData)  // ส่งข้อมูลในรูปแบบ JSON
    })
    .then(response => response.json())
    .then(data => {
      if (data.result === 'success') {
        alert("คำสั่งซื้อของคุณได้รับการบันทึกในระบบ!");
        localStorage.removeItem('cart');
        window.location.href = "qr.html"; // ไปยังหน้าอื่นหลังจากสั่งซื้อ
      } else {
        alert("เกิดข้อผิดพลาดในการบันทึกข้อมูล");
      }
    })
    .catch(error => {
      alert("เกิดข้อผิดพลาด: " + error);
    });
  });
}
