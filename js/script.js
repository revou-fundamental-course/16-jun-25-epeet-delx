document.addEventListener('DOMContentLoaded', function() {
    // Area calculation
    const calculateAreaBtn = document.getElementById('calculate-area');
    calculateAreaBtn.addEventListener('click', calculateArea);
    
    // Perimeter calculation
    const calculatePerimeterBtn = document.getElementById('calculate-perimeter');
    calculatePerimeterBtn.addEventListener('click', calculatePerimeter);
    
    function calculateArea() {
        const base = parseFloat(document.getElementById('base').value);
        const height = parseFloat(document.getElementById('height').value);
        const resultElement = document.getElementById('area-result');
        
        if (isNaN(base) || isNaN(height) || base <= 0 || height <= 0) {
            showError(resultElement, 'Masukkan nilai yang valid untuk alas dan tinggi!');
            return;
        }
        
        const area = 0.5 * base * height;
        showResult(resultElement, `Luas Segitiga: <strong>${area.toFixed(2)}</strong>`);
    }
    
    function calculatePerimeter() {
        const sideA = parseFloat(document.getElementById('sideA').value);
        const sideB = parseFloat(document.getElementById('sideB').value);
        const sideC = parseFloat(document.getElementById('sideC').value);
        const resultElement = document.getElementById('perimeter-result');
        
        if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC) || sideA <= 0 || sideB <= 0 || sideC <= 0) {
            showError(resultElement, 'Masukkan nilai yang valid untuk semua sisi!');
            return;
        }
        
        // Check triangle inequality theorem
        if (sideA + sideB <= sideC || sideA + sideC <= sideB || sideB + sideC <= sideA) {
            showError(resultElement, 'Ini bukan segitiga yang valid! Jumlah dua sisi harus lebih besar dari sisi ketiga.');
            return;
        }
        
        const perimeter = sideA + sideB + sideC;
        showResult(resultElement, `Keliling Segitiga: <strong>${perimeter.toFixed(2)}</strong>`);
    }
    
    function showResult(element, message) {
        element.classList.add('has-result');
        element.innerHTML = `<div class="result-text">${message}</div>`;
        element.style.animation = 'fadeIn 0.5s ease';
    }
    
    function showError(element, message) {
        element.classList.remove('has-result');
        element.innerHTML = `<div class="error-text">${message}</div>`;
        element.style.animation = 'shake 0.5s ease';
        
        // Create shake animation
        const keyframes = `
            @keyframes shake {
                0%, 100% { transform: translateX(0); }
                20% { transform: translateX(-10px); }
                40% { transform: translateX(10px); }
                60% { transform: translateX(-10px); }
                80% { transform: translateX(10px); }
            }
        `;
        
        const style = document.createElement('style');
        style.innerHTML = keyframes;
        document.head.appendChild(style);
        
        setTimeout(() => {
            document.head.removeChild(style);
        }, 500);
    }
});