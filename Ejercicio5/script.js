function calcularArea() {
    const a = parseFloat(document.getElementById("a").value);
    const c = parseFloat(document.getElementById("c").value);
    const b = parseFloat(document.getElementById("b").value);

    if (isNaN(a) || isNaN(c) || isNaN(b) || a <= 0 || c <= 0 || b <= 0 || a <= c) {
        document.getElementById("resultado").textContent = "Por favor, ingresa valores válidos. A debe ser mayor que C.";
        return;
    }

    const baseTriangulo = a - c;
    const areaRectangulo = c * b;
    const areaTriangulo = (baseTriangulo * b) / 2;
    const areaTotal = areaRectangulo + areaTriangulo;

    document.getElementById("resultado").textContent = `Área total del terreno: ${areaTotal.toFixed(2)} m²`;
}
