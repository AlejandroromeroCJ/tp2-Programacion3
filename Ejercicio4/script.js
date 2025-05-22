document.getElementById('calcularBtn').addEventListener('click', function() {
    const peso = parseFloat(document.getElementById('peso').value);
    const estatura = parseFloat(document.getElementById('estatura').value);

    if (isNaN(peso) || isNaN(estatura) || peso <= 0 || estatura <= 0) {
        alert("Por favor, ingresa valores válidos para peso y estatura.");
        return;
    }

    const imc = peso / (estatura * estatura);
    let mensaje = '';

    if (imc < 18.5) {
        mensaje = 'Bajo peso';
    } else if (imc >= 18 && imc < 25) {
        mensaje = 'Peso normal';
    } else if (imc >= 25 && imc < 29.9) {
        mensaje = 'Sobrepeso';
    } else {
        mensaje = 'Obesidad';
    }

    alert(`Tu IMC es ${imc.toFixed(2)} (${mensaje})`);
});
