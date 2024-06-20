function convert() {
    let celsius = parseFloat(document.getElementById('celsius').value);
    if (isNaN(celsius)) {
        alert('Masukkan angka yang valid untuk Celsius');
        return;
    }
    let fahrenheit = (celsius * 9/5) + 32;
    document.getElementById('fahrenheit').value = fahrenheit.toFixed(2);
    document.getElementById('calculation').innerHTML = `${celsius}°C * (9/5) + 32 = ${fahrenheit.toFixed(2)}°F`;
    document.getElementById('conversionTitle').innerHTML = 'Cara Konversi Dari Celsius (°C) ke Fahrenheit (°F)';
    document.getElementById('conversionExplanation').innerHTML = `
        Suhu <b>S</b> dalam derajat Fahrenheit (°F) sama dengan suhu <b>S</b> dalam derajat Celsius (°C) kali <b>9/5</b> tambah <b>32</b>.
        <br><br>
        <code>S<sub>(°F)</sub> = (${celsius}°C × 9/5) + 32</code>
        <br><br>
        atau
        <br><br>
        <code>S<sub>(°F)</sub> = (${celsius}°C × 1.8) + 32</code>
    `;
}

function reset() {
    document.getElementById('celsius').value = '';
    document.getElementById('fahrenheit').value = '';
    document.getElementById('calculation').innerHTML = '';
    document.getElementById('conversionTitle').innerHTML = 'Cara Konversi Dari Celsius (°C) ke Fahrenheit (°F)';
    document.getElementById('conversionExplanation').innerHTML = `
        Suhu <b>S</b> dalam derajat Fahrenheit (°F) sama dengan suhu <b>S</b> dalam derajat Celsius (°C) kali <b>9/5</b> tambah <b>32</b>.
        <br><br>
        <code>S<sub>(°F)</sub> = (S<sub>(°C)</sub> × 9/5) + 32</code>
        <br><br>
        atau
        <br><br>
        <code>S<sub>(°F)</sub> = (S<sub>(°C)</sub> × 1.8) + 32</code>
    `;
}

function reverse() {
    let fahrenheit = parseFloat(document.getElementById('fahrenheit').value);
    if (isNaN(fahrenheit)) {
        alert('Masukkan angka yang valid untuk Fahrenheit');
        return;
    }
    let celsius = (fahrenheit - 32) * 5/9;
    document.getElementById('celsius').value = celsius.toFixed(2);
    document.getElementById('calculation').innerHTML = `${fahrenheit}°F - 32 * (5/9) = ${celsius.toFixed(2)}°C`;
    document.getElementById('conversionTitle').innerHTML = 'Cara Konversi Dari Fahrenheit (°F) ke Celsius (°C)';
    document.getElementById('conversionExplanation').innerHTML = `
        Suhu <b>S</b> dalam derajat Celsius (°C) sama dengan suhu <b>S</b> dalam derajat Fahrenheit (°F) kurang <b>32</b> kali <b>5/9</b>.
        <br><br>
        <code>S<sub>(°C)</sub> = (${fahrenheit}°F - 32) × 5/9</code>
    `;
}
