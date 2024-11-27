function addToCart(product, price) {
    // ตรวจสอบว่าสินค้ามีในตะกร้าหรือยัง
    const existingProduct = cart.find(item => item.product === product);
    if (existingProduct) {
        existingProduct.quantity += 1; // เพิ่มจำนวนสินค้า
    } else {
        cart.push({ product, price, quantity: 1 }); // เพิ่มสินค้าใหม่
    }

    // อัปเดตตะกร้าและบันทึกลง localStorage
    updateCart();
    localStorage.setItem('cart', JSON.stringify(cart));
}
// ฟังก์ชันแสดงหรือซ่อนตะกร้าสินค้า
document.getElementById('toggle-cart-btn').addEventListener('click', () => {
    const cartContent = document.getElementById('cart-content');
    if (cartContent.style.display === 'none' || !cartContent.style.display) {
        cartContent.style.display = 'block'; // แสดงตะกร้า
    } else {
        cartContent.style.display = 'none'; // ซ่อนตะกร้า
    }
});
