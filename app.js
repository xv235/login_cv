document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');
  const errorMessage = document.getElementById('error-message');

  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      // Simple authentication check
      if (username === 'admin' && password === '123') {
        localStorage.setItem('authenticated', 'true');
        localStorage.setItem('username', username);
        window.location.href = 'minimalistic_CV_example.html';
      } else {
        errorMessage.textContent = 'Invalid username or password';
      }
    });
  }

  const userNameDisplay = document.getElementById('user-name');
  const logoutButton = document.getElementById('logout-button');

  if (userNameDisplay && logoutButton) {
    const isAuthenticated = localStorage.getItem('authenticated');
    const username = localStorage.getItem('username');

    if (isAuthenticated !== 'true') {
      window.location.href = 'index.html';
    } else {
      userNameDisplay.textContent = username;
    }

    logoutButton.addEventListener('click', () => {
      localStorage.removeItem('authenticated');
      localStorage.removeItem('username');
      window.location.href = 'index.html';
    });
  }
});
