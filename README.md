# 🌱 Ambiente y Desarrollo - Plataforma con Login y Registro

Este proyecto es una aplicación web enfocada en el tema del medio ambiente y el desarrollo sostenible. Utiliza un stack moderno con Node.js (Express), Supabase como backend-as-a-service, y HTML/CSS/JS para el frontend.

---

## ✅ Tecnologías utilizadas

| Componente | Tecnología |
|------------|-------------|
| Frontend   | HTML + CSS + JavaScript |
| Backend    | Node.js con Express |
| Base de datos + Auth | Supabase |
| Autenticación | Supabase Auth (Service Role + API REST) |
| Estilos    | CSS con temática ecológica |

---

## 📁 Estructura del proyecto

ambiente-y-desarrollo/
│
├── public/
│ ├── css/
│ │ └── styles.css
│ ├── js/
│ │ └── main.js
│ ├── login.html
│ ├── register.html
│ └── index.html
│
├── server/
│ ├── config/
│ │ └── supabase.js
│ ├── controllers/
│ │ └── auth.controller.js
│ ├── routes/
│ │ ├── auth.routes.js
│ │ ├── huella.routes.js
│ │ └── ods.routes.js
│ └── server.js
│
├── .env
├── package.json
└── README.md

## Configurar variables de entorno .env

- SUPABASE_URL= (la URL de la base de datos)
- SUPABASE_SERVICE_ROLE= (la API KEY del proyecto)
- PORT=3000

### Cómo ejecutar el proyecto
- npm run dev

### El servidor iniciará en
- http://localhost:3000/

## Pruebas en el navegador
- Abre en el navegador:

- http://localhost:3000/ → Login
- http://localhost:3000/register.html


