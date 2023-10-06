function hitungBMI() {
    const berat = parseFloat(document.getElementById("berat").value);
    const tinggi = parseFloat(document.getElementById("tinggi").value);

    if (!isNaN(berat) && !isNaN(tinggi)) {
        const bmi = berat / Math.pow(tinggi / 100, 2);
        let kategori = "";

        if (bmi < 18.5) {
            kategori = "Underweight";
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            kategori = "Normal weight";
        } else if (bmi >= 25 && bmi <= 29.9) {
            kategori = "Overweight";
        } else {
            kategori = "Obesity";
        }

        const hasil = `BMI = ${bmi.toFixed(1)}<br>BMI Categories: ${kategori}`;
        document.getElementById("hasil").innerHTML = hasil;
    } else {
        alert("Masukkan berat dan tinggi yang valid.");
    }
}