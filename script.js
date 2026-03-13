const grid = document.getElementById('sudoku-grid');

// إنشاء 81 مربع وإضافتها للشبكة
for (let i = 0; i < 81; i++) {
    const input = document.createElement('input');
    input.type = 'number';
    input.classList.add('cell');
    grid.appendChild(input);
}

// دالة التحقق البسيطة
document.getElementById('check-btn').addEventListener('click', () => {
    const cells = document.querySelectorAll('.cell');
    let filledCount = 0;
    cells.forEach(cell => { if (cell.value !== "") filledCount++; });
    
    if (filledCount === 81) {
        alert("تم ملء الشبكة! جاري التحقق من النتائج...");
    } else {
        alert("يرجى ملء جميع الخانات أولاً.");
    }
});
