const themeToggler = document.getElementById('theme-toggler');

const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
const currentTheme = localStorage.getItem('theme') || (prefersDarkMode ? 'dark' : 'light');
document.documentElement.setAttribute('data-bs-theme', currentTheme);

if (currentTheme === 'dark') {
    themeToggler.innerHTML = '🌞';
} else {
    themeToggler.innerHTML = '🌙';
}

themeToggler.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.body.style.transition = 'background-color 0.1s ease-in-out';
    document.documentElement.setAttribute('data-bs-theme', newTheme);
    localStorage.setItem('theme', newTheme);

    setTimeout(() => {
        document.documentElement.style.transition = '';
    }, 500);

    if (newTheme === 'dark') {
        themeToggler.innerHTML = '🌞';
    } else {
        themeToggler.innerHTML = '🌙';
    }
});
