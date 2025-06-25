import { supabase } from '../config/supabase.js';

export async function register(req, res) {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({ error: 'Email y contraseña son obligatorios' });

  const { data, error } = await supabase.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
  });

  if (error) return res.status(400).json({ error: error.message });

  res.status(201).json({ message: 'Usuario creado correctamente', data });
}

export async function login(req, res) {
  const { email, password } = req.body;
  
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) return res.status(401).json({ error: 'Credenciales incorrectas' });

  res.status(200).json({ message: 'Login exitoso', data });
}
