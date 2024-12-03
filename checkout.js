function checkout() {
    const phone = prompt("กรุณากรอกเบอร์โทรศัพท์ของคุณ:");
    if (!phone) {
        alert("กรุณากรอกเบอร์โทรศัพท์เพื่อดำเนินการต่อ");
        return;
    }

    const orderList = cart.map(item => `${item.product} x ${item.quantity}`).join(', ');
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    // กรอกข้อมูลลงในฟอร์มที่ส่งไปยัง Google Sheets
    document.getElementById('googleOrderList').value = orderList;
    document.getElementById('googleTotalPrice').value = `${totalPrice} บาท`;
    document.getElementById('googlePhone').value = phone;

    // ส่งข้อมูลไปยัง Google Apps Script
    document.getElementById('googleSheetForm').submit();

    alert("คำสั่งซื้อของคุณถูกส่งแล้ว!");
    localStorage.removeItem('cart');
    cart = [];
    updateCart();
}
