#  Ambiente y Desarrollo – Plataforma Educativa con Dashboard Ambiental

Este proyecto es una plataforma web interactiva enfocada en **la conciencia ambiental** y el cumplimiento de los **Objetivos de Desarrollo Sostenible (ODS)**. Los usuarios pueden registrarse, calcular su huella de carbono, explorar datos por continente y acceder a un panel administrativo.

---

## 🚀 Tecnologías utilizadas

| Categoría         | Tecnología                             |
|-------------------|-----------------------------------------|
| 🧠 Backend        | Node.js + Express                       |
| 💾 Base de datos  | Supabase (PostgreSQL + Auth)            |
| 🔐 Autenticación  | Supabase Auth + verificación manual     |
| 🌐 Frontend       | HTML + CSS personalizado + JavaScript   |
| 📊 Gráficas       | Chart.js                                |
| 🎨 Estilo visual  | CSS moderno + variables personalizadas  |
| 📦 Dependencias   | Dotenv, Express, CORS                   |

---
---

## 🧠 Justificación de Tecnologías

Elegimos estas herramientas por su equilibrio entre simplicidad, eficiencia y facilidad de implementación para un proyecto educativo con necesidades reales de autenticación, almacenamiento y visualización:

### 🔐 Supabase (Base de datos + Auth)

- **¿Por qué?**: Supabase ofrece un backend completo (Base de Datos, Auth y Storage) sin tener que configurar servidores complejos.
- **Ventajas**:
  - Registro y login de usuarios con solo unas líneas de código.
  - APIs automáticas y RESTful basadas en PostgreSQL.
  - Control de roles y seguridad granular con políticas.
  - No se requiere un panel de administración externo.

### 🧠 Node.js + Express

- **¿Por qué?**: Node.js con Express permite crear un backend rápido, sencillo y altamente personalizable.
- **Ventajas**:
  - Arquitectura ligera y modular.
  - Buen manejo de rutas.
  - Fácil de conectar con APIs como Supabase.
  - Ideal para apps educativas y prototipos escalables.

### 🌐 HTML, CSS y JavaScript

- **¿Por qué?**: El frontend se construyó sin frameworks para mantenerlo accesible y comprensible para cualquier persona que conozca web básica.
- **Ventajas**:
  - Menos dependencias externas.
  - Control total del diseño y comportamiento.
  - Compatible con navegadores sin configuración adicional.

### 📊 Chart.js

- **¿Por qué?**: Permite visualizar datos de forma clara, interactiva y atractiva.
- **Ventajas**:
  - Ligero y fácil de integrar.
  - Compatible con HTML puro.
  - Ideal para representar datos de huella de carbono y ODS.

### 🎨 CSS Modular y Temática

- **¿Por qué?**: Se usaron variables CSS y estructura modular para que el estilo sea consistente y fácil de mantener.
- **Ventajas**:
  - Escalabilidad visual.
  - Tema ecológico consistente con la temática del proyecto.
  - Código más limpio y reutilizable.

---

Con este stack, logramos un equilibrio entre funcionalidad, facilidad de desarrollo y una experiencia de usuario clara.

## 📁 Estructura del proyecto
```
ambiente-y-desarrollo/
│
├── public/ # Archivos estáticos
│ ├── css/
│ │ └── styles.css # Estilos generales
│ ├── js/
│ │ ├── login.js
│ │ ├── register.js
│ │ ├── calculadora.js
│ │ └── dashboard.js
│ ├── login.html
│ ├── register.html
│ ├── calculadora.html
│ ├── huella.html
│ ├── ods.html
│ ├── admin.html # Acceso restringido al admin
│ └── continente.html
│
├── server/
│ ├── config/
│ │ └── supabase.js # Conexión con Supabase
│ ├── controllers/
│ │ └── auth.controller.js # Lógica de login/registro
│ ├── routes/
│ │ ├── auth.routes.js
│ │ ├── huella.routes.js
│ │ └── ods.routes.js
│ └── server.js # Servidor Express
│
├── .env # Variables de entorno
├── package.json
└── README.md # Este archivo
```

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

- http://localhost:3000/ 


| Página                   | URL                                 |
| ------------------------ | ----------------------------------- |
| Registro                 | `/` o `/register`                   |
| Login                    | `/login`                            |
| Calculadora Huella       | `/calculadora`                      |
| Visualización Huella     | `/huella`                           |
| ODS interactivo          | `/ods`                              |
| Datos por continente     | `/continente`                       |
| Dashboard Administrativo | `/admin` *(solo cuenta autorizada)* |

## Acceso al panel de administrador

Solo usuarios con email validado (ej: hola@admin.com) pueden acceder a /admin.
La verificación se hace manualmente en el backend.

