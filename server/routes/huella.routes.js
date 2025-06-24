// server/routes/huella.routes.js
import { Router } from 'express';

const router = Router();

/* GET /api/huella  – ruta de prueba */
router.get('/', (req, res) => {
  res.send('Ruta de huella de carbono funcionando');
});

export default router;
