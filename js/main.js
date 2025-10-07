// Menú móvil
document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
    document.getElementById('main-nav').classList.toggle('active');
});

// Smooth scrolling para navegación
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
        
        // Cierra el del menú móvil si está abierto
        document.getElementById('main-nav').classList.remove('active');
    });
});

// Botones de acción
document.getElementById('register-btn').addEventListener('click', function() {
    alert('Redirigiendo al formulario de registro...');
    // Aquí va la lógica para redirigir al registro
});

document.getElementById('download-app').addEventListener('click', function() {
    alert('Redirigiendo a la tienda de aplicaciones...');
    // Aquí va la lógica para redirigir a la app store
});

document.getElementById('learn-more').addEventListener('click', function() {
    document.querySelector('#como-funciona').scrollIntoView({
        behavior: 'smooth'
    });
});

document.getElementById('cta-button').addEventListener('click', function() {
    alert('Redirigiendo a la tienda de aplicaciones...');
    // Aquí va la lógica para redirigir a la app store
});