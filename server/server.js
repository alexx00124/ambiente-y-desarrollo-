// server/server.js
import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import path from 'path';
import { fileURLToPath } from 'url';

import authRoutes from './routes/auth.routes.js';
import odsRoutes from './routes/ods.routes.js';
import huellaRoutes from './routes/huella.routes.js';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, '..', 'public'))); 

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas API
app.use('/api/auth', authRoutes);
app.use('/api/ods', odsRoutes);
app.use('/api/huella', huellaRoutes);


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'register.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'login.html'));
});

app.get('/ods', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'ods.html'));
});

app.get('/huella', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'huella.html'));
});

app.get('/continente', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'continente.html'));
});

app.get('/calculadora', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'calculadora.html'));
});

let isAdminAuthenticated = false;

app.post('/admin-login', express.json(), (req, res) => {
  const { email, password } = req.body;

  if (email === 'donjose@admin.com' && password === '1234') {
    isAdminAuthenticated = true;
    return res.status(200).json({ redirect: '/admin.html' });
  } else {
    return res.status(401).json({ error: 'Credenciales incorrectas (admin).' });
  }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor listo en http://localhost:${PORT}`));
