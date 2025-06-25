import { supabase } from '../config/supabase.js';
import { Router } from 'express';
import { register, login } from '../controllers/auth.controller.js';
const router = Router();

// Ruta para probar si el backend responde
router.get('/', (req, res) => {
  res.send('Ruta de autenticación funcionando');
});

// Rutas de autenticación
router.post('/register', register);
router.post('/login', login);



export default router;
