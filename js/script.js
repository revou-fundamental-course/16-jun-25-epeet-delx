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
        
        if (isNaN(base) || isNaN(height)) {
            alert('Masukkan nilai yang valid untuk alas dan tinggi!');
            return;
        }
        
        const area = 0.5 * base * height;
        resultElement.innerHTML = `Luas Segitiga: ${area.toFixed(2)}`;
        resultElement.style.display = 'block';
    }
    
    function calculatePerimeter() {
        const sideA = parseFloat(document.getElementById('sideA').value);
        const sideB = parseFloat(document.getElementById('sideB').value);
        const sideC = parseFloat(document.getElementById('sideC').value);
        const resultElement = document.getElementById('perimeter-result');
        
        if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC)) {
            alert('Masukkan nilai yang valid untuk semua sisi!');
            return;
        }
        
        const perimeter = sideA + sideB + sideC;
        resultElement.innerHTML = `Keliling Segitiga: ${perimeter.toFixed(2)}`;
        resultElement.style.display = 'block';
    }
});