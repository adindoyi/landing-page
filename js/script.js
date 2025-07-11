// js/script.js

export function handleLoginForm() {
  const form = document.querySelector('form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const role = document.getElementById('selectedRole').value;

    if (!role) {
      alert('Pilih role dulu!');
      return;
    }

    // Fake login - simpan ke storage
    localStorage.setItem('role', role);
    localStorage.setItem('isLoggedIn', 'true');

    if (role === 'admin') {
      window.location.href = 'dashboard-admin.html';
    } else if (role === 'vendor') {
      window.location.href = 'dashboard-vendor.html';
    } else {
      window.location.href = 'dashboard-buyer.html';
    }
  });
}
