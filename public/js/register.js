    const form = document.getElementById('regForm');
    const msg = document.getElementById('regMsg');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = document.getElementById('regEmail').value;
      const password = document.getElementById('regPass').value;

      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();
      if (data.error) {
        msg.textContent = data.error;
      } else {
        msg.textContent = 'Registro exitoso 🎉 Redirigiendo...';
        setTimeout(() => {
          window.location.href = '/login';
        }, 1500);
      }

    });