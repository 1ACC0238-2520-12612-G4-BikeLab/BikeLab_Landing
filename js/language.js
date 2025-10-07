// Textos en diferentes idiomas
const translations = {
    es: {
        // Header
        "register-btn": "Registrarse",
        
        // Hero
        "hero-title": "Movilidad sostenible para estudiantes universitarios",
        "hero-text": "Alquila bicicletas y scooters de otros estudiantes de forma segura y económica. Únete a la comunidad de micromovilidad más grande en campus universitarios.",
        "download-app": "Descargar la App",
        "learn-more": "Saber más",
        
        // Features
        "features-title": "¿Por qué elegir BikeLab?",
        "features-subtitle": "Ofrecemos la solución perfecta para la movilidad en campus universitarios",
        "feature1-title": "Movilidad práctica",
        "feature1-text": "Desplázate rápidamente por el campus y sus alrededores sin preocuparte por el tráfico o el estacionamiento.",
        "feature2-title": "Sostenibilidad",
        "feature2-text": "Reduce tu huella de carbono utilizando un medio de transporte ecológico y responsable con el medio ambiente.",
        "feature3-title": "Ahorro económico",
        "feature3-text": "Alquila vehículos a precios accesibles o genera ingresos extras rentando tu bicicleta o scooter cuando no la uses.",
        "feature4-title": "Comunidad segura",
        "feature4-text": "Nuestro sistema de verificación entre pares garantiza transacciones seguras y confiables.",
        
        // How it works
        "how-it-works-title": "¿Cómo funciona BikeLab?",
        "how-it-works-subtitle": "En solo 3 sencillos pasos podrás disfrutar de la micromovilidad en tu campus",
        "step1-title": "Regístrate",
        "step1-text": "Descarga la app y crea tu perfil verificando tu correo universitario.",
        "step2-title": "Encuentra o ofrece",
        "step2-text": "Busca bicicletas o scooters disponibles cerca de ti, o publica el tuyo para alquilar.",
        "step3-title": "Disfruta del viaje",
        "step3-text": "Reserva, desbloquea y disfruta de tu viaje de forma segura y económica.",
        
        // CTA
        "cta-title": "¡Únete a la revolución de la micromovilidad!",
        "cta-text": "Descarga la aplicación hoy mismo y comienza a disfrutar de todos los beneficios de BikeLab en tu campus.",
        "cta-button": "Descargar ahora",
        
        // Footer
        "footer-about": "La plataforma de micromovilidad líder para estudiantes universitarios.",
        "footer-links-title": "Enlaces",
        "footer-support-title": "Soporte",
        "footer-contact-title": "Contacto"
    },
    en: {
        // Header
        "register-btn": "Sign Up",
        
        // Hero
        "hero-title": "Sustainable mobility for university students",
        "hero-text": "Rent bicycles and scooters from other students safely and affordably. Join the largest micromobility community on university campuses.",
        "download-app": "Download the App",
        "learn-more": "Learn More",
        
        // Features
        "features-title": "Why choose BikeLab?",
        "features-subtitle": "We offer the perfect solution for mobility on university campuses",
        "feature1-title": "Practical mobility",
        "feature1-text": "Move quickly around campus and its surroundings without worrying about traffic or parking.",
        "feature2-title": "Sustainability",
        "feature2-text": "Reduce your carbon footprint by using an eco-friendly and environmentally responsible means of transportation.",
        "feature3-title": "Economic savings",
        "feature3-text": "Rent vehicles at affordable prices or generate extra income by renting out your bicycle or scooter when you're not using it.",
        "feature4-title": "Safe community",
        "feature4-text": "Our peer verification system ensures secure and reliable transactions.",
        
        // How it works
        "how-it-works-title": "How does BikeLab work?",
        "how-it-works-subtitle": "In just 3 simple steps you can enjoy micromobility on your campus",
        "step1-title": "Sign up",
        "step1-text": "Download the app and create your profile by verifying your university email.",
        "step2-title": "Find or offer",
        "step2-text": "Search for available bicycles or scooters near you, or list yours for rent.",
        "step3-title": "Enjoy the ride",
        "step3-text": "Book, unlock and enjoy your trip safely and affordably.",
        
        // CTA
        "cta-title": "Join the micromobility revolution!",
        "cta-text": "Download the app today and start enjoying all the benefits of BikeLab on your campus.",
        "cta-button": "Download now",
        
        // Footer
        "footer-about": "The leading micromobility platform for university students.",
        "footer-links-title": "Links",
        "footer-support-title": "Support",
        "footer-contact-title": "Contact"
    }
};

// Cambiar idioma
document.getElementById('language-selector').addEventListener('change', function() {
    const lang = this.value;
    changeLanguage(lang);
});

function changeLanguage(lang) {
    const elements = document.querySelectorAll('[id]');
    elements.forEach(element => {
        const id = element.id;
        if (translations[lang] && translations[lang][id]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][id];
            } else {
                element.textContent = translations[lang][id];
            }
        }
    });
}