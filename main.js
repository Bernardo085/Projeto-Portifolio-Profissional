// Menu Responsivo
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Simulação de envio de formulário
const form = document.getElementById('contactForm');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Mensagem enviada com sucesso! Obrigado por entrar em contato.");
    form.reset();
});

// Dark/Light Mode
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Mantém preferência do usuário
if (localStorage.getItem('theme') === 'light') {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    themeToggle.checked = true;
}

themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        body.classList.replace('dark-mode', 'light-mode');
        localStorage.setItem('theme', 'light');
    } else {
        body.classList.replace('light-mode', 'dark-mode');
        localStorage.setItem('theme', 'dark');
    }
});
