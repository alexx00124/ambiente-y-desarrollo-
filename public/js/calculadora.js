document.getElementById('calcular').addEventListener('click', () => {
    // --- RECOLECCIÓN DE DATOS ---
    const electricidad = parseFloat(document.getElementById('electricidad').value) || 0;
    const gas = parseFloat(document.getElementById('gas').value) || 0;
    const autoKm = parseFloat(document.getElementById('autoKm').value) || 0;
    const transportePublico = parseFloat(document.getElementById('transportePublico').value) || 0;
    const vuelosCortos = parseInt(document.getElementById('vuelosCortos').value) || 0;
    const vuelosLargos = parseInt(document.getElementById('vuelosLargos').value) || 0;
    const dieta = document.getElementById('dieta').value;
    const consumo = document.getElementById('consumo').value;

    // --- FACTORES DE EMISIÓN ---
    const factorElectricidad = 0.176;
    const factorGas = 0.204;
    const factorAuto = 0.185;
    const factorTransporte = 0.041;
    const factorVueloCorto = 150;
    const factorVueloLargo = 900;

    // --- FACTORES DE EMISIÓN PARA DIETA Y CONSUMO ---
    const dietaFactores = {
        omnivora: 2500 / 12,
        vegetariana: 1700 / 12,
        vegana: 1300 / 12
    };

    const consumoFactores = {
        bajo: 1000 / 12,
        medio: 2500 / 12,
        alto: 4500 / 12
    };

    // --- CÁLCULOS ---
    const huellaHogar = (electricidad * factorElectricidad) + (gas * factorGas);
    const huellaMovilidad = (autoKm * factorAuto) + (transportePublico * factorTransporte) + ((vuelosCortos * factorVueloCorto + vuelosLargos * factorVueloLargo) / 12);  // Huella de la movilidad
    const huellaHabitos = dietaFactores[dieta] + consumoFactores[consumo];

    // --- CÁLCULO TOTAL ---
    const totalMensual = huellaHogar + huellaMovilidad + huellaHabitos;
    const totalAnual = totalMensual * 12;

    // --- PROMEDIOS Y OBJETIVOS ---
    const promedioColombia = 1.9;
    const promedioMundial = 4.7;
    const objetivoSostenible = 2.0;

    // --- RESULTADOS ---
    const resultadoDiv = document.getElementById('resultado');
    const comparacionDiv = document.getElementById('comparacion');

    resultadoDiv.innerHTML = `
        <strong>Huella Mensual:</strong> ${totalMensual.toFixed(1)} kg CO₂<br>
        <strong>Huella Anual:</strong> ${(totalAnual / 1000).toFixed(2)} toneladas de CO₂<br>
        <hr>
        <strong>Desglose Mensual:</strong><br>
        Hogar: ${huellaHogar.toFixed(1)} kg CO₂<br>
        Movilidad: ${huellaMovilidad.toFixed(1)} kg CO₂<br>
        Hábitos: ${huellaHabitos.toFixed(1)} kg CO₂
    `;

    comparacionDiv.innerHTML = `
        <h3>¿Cómo te comparas?</h3>
        <p>Tu huella anual es de <strong>${(totalAnual / 1000).toFixed(2)} toneladas.</strong></p>
        <ul>
            <li>Promedio en Colombia: ${promedioColombia.toFixed(2)} toneladas/año.</li>
            <li>Promedio Mundial: ${promedioMundial.toFixed(2)} toneladas/año.</li>
            <li>Objetivo Sostenible 2050: ${objetivoSostenible.toFixed(2)} toneladas/año.</li>
        </ul>
    `;

    // Mostrar el contenedor de resultados
    document.getElementById('resultado-container').classList.remove('hidden');
});