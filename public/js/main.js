// Ejemplo: cargar los ODS al entrar
document.addEventListener('DOMContentLoaded', async () => {
  const odsRes = await fetch('/api/ods');
  const ods = await odsRes.json();
  const container = document.getElementById('ods-container');

  ods.forEach(o => {
    const card = document.createElement('div');
    card.className = 'ods-card';
    card.innerHTML = `<h3>${o.id}. ${o.titulo}</h3><p>${o.desc}</p>`;
    container.appendChild(card);
  });
});

// Manejo del login usando Supabase
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabase = createClient(
  'https://dtmizsepdlegpyqugvsf.supabase.co', // <- Esta es tu URL del proyecto
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR0bWl6c2VwZGxlZ3B5cXVndnNmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA2MjcyMTAsImV4cCI6MjA2NjIwMzIxMH0.YEPfKeAHpb6i-ya3kaR346vtv8JLRC6zxAcJUDkmo7M'
);


document.getElementById('login-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  document.getElementById('login-msg').textContent =
    error ? `Error: ${error.message}` : `¡Bienvenid@ ${data.user.email}!`;
});
