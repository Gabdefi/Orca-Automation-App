// Toggle Sidebar
document.getElementById('settings-icon').addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('active');
});

// Toggle Dark/Light Theme
document.getElementById('toggle-theme').addEventListener('click', function () {
    document.body.classList.toggle('dark-theme');
});

// Show/Hide Info
document.getElementById('show-info').addEventListener('click', function () {
    document.getElementById('info').classList.toggle('active');
});
