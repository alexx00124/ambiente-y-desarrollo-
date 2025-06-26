async function cargarODS() {
    try {
        const res = await fetch('/api/ods');
        const ods = await res.json();

        const contenedor = document.getElementById('odsContainer');
        ods.forEach(objetivo => {
            const div = document.createElement('div');
            div.className = 'ods-card';
            div.innerHTML = `
                        <img src="${objetivo.imagen}" alt="ODS ${objetivo.id}" style="width:100%; height:auto; border-radius:4px; margin-bottom:10px;" />
                        <p>${objetivo.desc}</p>
                        `;
            contenedor.appendChild(div);
        });
    } catch (err) {
        console.error('Error al cargar los ODS:', err);
    }
}

cargarODS();