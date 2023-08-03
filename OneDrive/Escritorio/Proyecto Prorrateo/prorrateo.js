function calcularResultado() {
    var lecturaOS = parseFloat(document.getElementById("lecturaOS").value);
    var lecturaAnt = parseFloat(document.getElementById("lecturaAnt").value);
    var fechaOS = new Date(document.getElementById("fechaOS").value);
    var fechaLecturaAnterior = new Date(document.getElementById("fechaLecturaAnterior").value);
    var fechaCorregir = new Date(document.getElementById("fechaCorregir").value);
  
    var diasTotalConsumo = Math.round((fechaOS - fechaLecturaAnterior) / (1000 * 60 * 60 * 24));
    var diasConsumoCorregir = Math.round((fechaCorregir - fechaLecturaAnterior) / (1000 * 60 * 60 * 24));
    var diferenciaLecturas = lecturaOS - lecturaAnt;
    var consumoDiario = diferenciaLecturas / diasTotalConsumo;
    var consumoEstimado = consumoDiario * diasConsumoCorregir;
    var lecturaCorregir = lecturaAnt + consumoEstimado;
  
    document.getElementById("lecturaCorregir").value = lecturaCorregir.toFixed(2);
    document.getElementById("OS").value = consumoEstimado.toFixed(2);
  
    var resultado = "Resultado: Consumo estimado: " + consumoEstimado.toFixed(2) + " kWh, Lectura a Corregir: " + lecturaCorregir.toFixed(2);
    document.getElementById("resultado").innerHTML = resultado;
  }
  