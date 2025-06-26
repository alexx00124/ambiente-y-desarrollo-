    console.log('Script cargado');

    const form = document.getElementById('loginForm');
    const msg = document.getElementById('loginMsg');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const email = document.getElementById('loginEmail').value;
      const password = document.getElementById('loginPass').value;

      try {
        if (email === 'donjose@admin.com' && password === '1234') {
          // Redirige al login personalizado de admin
          const res = await fetch('/admin-login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
          });

          const data = await res.json();

          if (res.ok && data.redirect) {
            window.location.href = data.redirect;
          } else {
            msg.textContent = data.error || 'Error desconocido.';
          }

        } else {
          // Login normal con Supabase
          const res = await fetch('/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
          });

          const data = await res.json();

          if (data.error) {
            msg.textContent = data.error;
          } else {
            msg.textContent = '¡Bienvenido! Redirigiendo…';
            setTimeout(() => {
              window.location.href = '/huella';
            }, 1500);
          }
        }

      } catch (err) {
        console.error('Error al hacer login:', err);
        msg.textContent = 'Error del servidor';
      }
    });