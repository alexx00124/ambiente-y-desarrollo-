        const barCtx = document.getElementById('barChart');
        new Chart(barCtx, {
            type: 'bar',
            data: {
                labels: ['Europa', 'América del Norte', 'América Latina', 'África', 'Asia', 'Oceanía'],
                datasets: [
                    {
                        label: 'Áreas protegidas (%)',
                        data: [26.4, 12.9, 23.4, 14.2, 14.9, 19.5],
                        backgroundColor: '#4c6ef5'
                    },
                    {
                        label: 'Restricción de agua (relativa)',
                        data: [2, 1, 3, 4, 4, 2], // escala 1–5
                        backgroundColor: '#74c0fc'
                    },
                    {
                        label: 'Regulación de emisiones (relativa)',
                        data: [5, 4, 3, 2, 3, 4],
                        backgroundColor: '#91a7ff'
                    },
                    {
                        label: 'Prohibición de plásticos (relativa)',
                        data: [5, 3, 4, 2, 3, 5],
                        backgroundColor: '#a5d8ff'
                    }
                ]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { position: 'top' },
                    title: {
                        display: true,
                        text: 'Restricciones ambientales por continente'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Índice relativo / Porcentaje'
                        }
                    }
                }
            }
        });

        const pieCtx = document.getElementById('pieChart');
        new Chart(pieCtx, {
            type: 'doughnut',
            data: {
                labels: [
                    'ODS 7: Energía asequible y no contaminante',
                    'ODS 13: Acción por el clima',
                    'ODS 11: Ciudades sostenibles',
                    'ODS 12: Producción y consumo responsables',
                    'ODS 9: Industria, innovación e infraestructura'
                ],
                datasets: [{
                    data: [30, 25, 20, 15, 10],
                    backgroundColor: [
                        '#4c6ef5',
                        '#20c997',
                        '#ffc078',
                        '#ff8787',
                        '#845ef7'
                    ]
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            boxWidth: 12,
                            padding: 15
                        }
                    },
                    title: {
                        display: true,
                        text: 'Distribución de huella de carbono por ODS',
                        font: { size: 16 }
                    }
                }
            }
        });
