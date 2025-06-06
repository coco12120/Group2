// 加入購物車按鈕功能
document.getElementById('addToCartBtn').addEventListener('click', function() {
    const sizeSelected = document.querySelector('input[name="size"]:checked') !== null;
    if (sizeSelected) {
        alert('已加入購物車');
    } else {
        alert('請選擇尺碼');
    }
});