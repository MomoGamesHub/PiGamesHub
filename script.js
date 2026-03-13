// دالة لإنشاء المربعات الـ 81
function createGrid() {
    const grid = document.getElementById('sudoku-grid');
    for (let i = 0; i < 81; i++) {
        const input = document.createElement('input');
        input.type = 'text';
        input.maxLength = 1; // رقم واحد فقط في المربع
        grid.appendChild(input);
    }
}

// تنفيذ الدالة عند تحميل الصفحة
window.onload = createGrid;

// دالة التحقق من الحل (سنكملها لاحقاً)
document.getElementById('check-btn').addEventListener('click', () => {
    alert("جارٍ التحقق من القوانين...");
});
