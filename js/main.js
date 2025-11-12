// =============================================
//  FORMULARIO MODAL 
// =============================================

function createModal() {
    const modalHTML = `
<div id="register-modal" class="modal">
    <div class="modal-content">
        <span class="close-modal">&times;</span>
        <h2 id="modal-title">Regístrate en BikeLab</h2>
        <form id="register-form">
            <div class="form-group">
                <label for="user-name" id="label-name">Nombre completo</label>
                <input type="text" id="user-name" name="name" required placeholder="Ej: Juan Pérez">
            </div>
            
            <div class="form-group">
                <label for="user-email" id="label-email">Correo universitario</label>
                <input type="email" id="user-email" name="email" required placeholder="ejemplo@universidad.edu">
            </div>
            
            <div class="form-group">
                <label for="user-phone" id="label-phone">Teléfono</label>
                <input type="tel" id="user-phone" name="phone" required placeholder="Ej: 987654321">
            </div>
            
            <div class="form-group">
                <label for="user-university" id="label-university">Universidad</label>
                <select id="user-university" name="university" required>
                    <option value="" id="select-university-default">Selecciona tu universidad</option>
                    <option value="UNI" id="uni-option">Universidad Nacional de Ingeniería</option>
                    <option value="UNMSM" id="unmsm-option">Universidad Nacional Mayor de San Marcos</option>
                    <option value="PUCP" id="pucp-option">Pontificia Universidad Católica del Perú</option>
                    <option value="UPC" id="upc-option">Universidad Peruana de Ciencias Aplicadas</option>
                    <option value="ULIMA" id="ulima-option">Universidad de Lima</option>
                    <option value="USIL" id="usil-option">Universidad San Ignacio de Loyola</option>
                    <option value="UPN" id="upn-option">Universidad Privada del Norte</option>
                    <option value="otra" id="other-option">Otra universidad</option>
                </select>
            </div>
            
            <div class="form-group" id="other-university-group" style="display: none;">
                <label for="other-university" id="label-other-university">Especifica tu universidad</label>
                <input type="text" id="other-university" name="other_university" placeholder="Nombre de tu universidad">
            </div>
            
            <div class="form-group">
                <label for="user-role" id="label-role">¿Qué te interesa?</label>
                <select id="user-role" name="role" required>
                    <option value="" id="select-role-default">Selecciona una opción</option>
                    <option value="renter" id="renter-option">Alquilar vehículos</option>
                    <option value="owner" id="owner-option">Rentar mi vehículo</option>
                    <option value="both" id="both-option">Ambas opciones</option>
                </select>
            </div>
            
            <div class="form-group checkbox-group">
                <input type="checkbox" id="terms" name="terms" required>
                <label for="terms" id="terms-label">Acepto los <a href="#" class="terms-link">términos y condiciones</a> y la <a href="#" class="terms-link">política de privacidad</a></label>
            </div>
            
            <button type="submit" class="btn btn-primary btn-full" id="submit-form">
                Crear cuenta
            </button>
        </form>
    </div>
</div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
        const currentLang = localStorage.getItem('preferred-language') || 'es';
    updatePlaceholders(currentLang);
    setupModalEvents();
}

// Configurar eventos del modal
function setupModalEvents() {
    const modal = document.getElementById('register-modal');
    const closeBtn = document.querySelector('.close-modal');
    
    // Cerrar con la X
    closeBtn.addEventListener('click', hideModal);
    
    // Cerrar al hacer clic fuera
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            hideModal();
        }
    });
    
    // Manejar cambio de universidad
    document.getElementById('user-university').addEventListener('change', function(e) {
        const otherGroup = document.getElementById('other-university-group');
        if (e.target.value === 'otra') {
            otherGroup.style.display = 'block';
        } else {
            otherGroup.style.display = 'none';
        }
    });
    
    // Envío del formulario
    document.getElementById('register-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('user-name').value,
            email: document.getElementById('user-email').value,
            phone: document.getElementById('user-phone').value,
            university: document.getElementById('user-university').value,
            other_university: document.getElementById('other-university').value,
            role: document.getElementById('user-role').value,
            terms: document.getElementById('terms').checked
        };
        
        // Validar
        const errors = validateForm(formData);
        
        if (errors.length > 0) {
            alert('Por favor corrige los siguientes errores:\n\n' + errors.join('\n'));
            return;
        }
        
        // Enviar
        submitForm(formData);
    });
}

// Mostrar modal
function showModal() {
    const modal = document.getElementById('register-modal');
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        // Enfocar el primer campo automáticamente
        setTimeout(() => {
            const firstInput = document.getElementById('user-name');
            if (firstInput) {
                firstInput.focus();
            }
        }, 300);
    }
}

// Ocultar modal
function hideModal() {
    const modal = document.getElementById('register-modal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        
        // Resetear formulario al cerrar
        document.getElementById('register-form').reset();
        document.getElementById('other-university-group').style.display = 'none';
    }
}

// Validar formulario
function validateForm(formData) {
    const errors = [];
    
    if (!formData.name.trim()) {
        errors.push('El nombre es obligatorio');
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        errors.push('El correo electrónico no es válido');
    } else if (!formData.email.includes('.edu')) {
        errors.push('Por favor usa tu correo universitario');
    }
    
    const phoneRegex = /^[0-9]{9,15}$/;
    if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
        errors.push('El teléfono no es válido');
    }
    
    if (!formData.university) {
        errors.push('Debes seleccionar una universidad');
    }
    
    if (!formData.terms) {
        errors.push('Debes aceptar los términos y condiciones');
    }
    
    return errors;
}

// Enviar formulario
function submitForm(formData) {
    console.log('Datos del formulario:', formData);
    
    const submitBtn = document.getElementById('submit-form');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Procesando...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        hideModal();
        showSuccessMessage();
        
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        document.getElementById('register-form').reset();
        
    }, 2000);
}

// Mostrar mensaje de éxito
function showSuccessMessage() {
    const successHTML = `
        <div id="success-message" class="success-message">
            <div class="success-content">
                <h3>¡Registro exitoso!</h3>
                <p>Te hemos enviado un correo de confirmación a tu email universitario.</p>
                <button class="btn btn-primary" id="close-success">Continuar</button>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', successHTML);
    
    document.getElementById('close-success').addEventListener('click', function() {
        document.getElementById('success-message').remove();
    });
}

// =============================================
// FAQ
// =============================================

// Inicializar FAQ
function initFAQ() {
    console.log('Inicializando FAQ...'); 
    
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', function() {
            console.log('Click en pregunta FAQ'); 
            
            const faqItem = this.parentElement;
            const isActive = faqItem.classList.contains('active');
            
            const currentCategory = faqItem.closest('.faq-category');
            currentCategory.querySelectorAll('.faq-item').forEach(item => {
                if (item !== faqItem) {
                    item.classList.remove('active');
                }
            });
            
            if (isActive) {
                faqItem.classList.remove('active');
            } else {
                faqItem.classList.add('active');
            }
        });
    });
    
    document.querySelectorAll('.faq-category-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            console.log('Cambiando categoría FAQ'); 
            
            const category = this.getAttribute('data-category');
            
            document.querySelectorAll('.faq-category-btn').forEach(b => {
                b.classList.remove('active');
            });
            this.classList.add('active');
            
            document.querySelectorAll('.faq-category').forEach(cat => {
                cat.classList.remove('active');
            });
            
            const targetCategory = document.getElementById(`category-${category}`);
            if (targetCategory) {
                targetCategory.classList.add('active');
                
                targetCategory.querySelectorAll('.faq-item').forEach(item => {
                    item.classList.remove('active');
                });
            }
        });
    });
    
    // Botón de contacto en FAQ
    const faqContactBtn = document.getElementById('faq-contact-btn');
    if (faqContactBtn) {
        faqContactBtn.addEventListener('click', function() {
            document.querySelector('#contacto').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
    
    console.log('FAQ inicializado correctamente'); 
}
// =============================================
// EVENT LISTENERS PRINCIPALES
// =============================================

// Menú móvil
document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
    document.getElementById('main-nav').classList.toggle('active');
});

// scrolling para navegación
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
        document.getElementById('main-nav').classList.remove('active');
    });
});

// Botones que abren el modal
document.getElementById('register-btn').addEventListener('click', showModal);
document.getElementById('about-cta-button').addEventListener('click', showModal);

// Cerrar con ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        hideModal();
    }
});

// Botones de descarga
document.getElementById('download-app').addEventListener('click', function() {
    alert('Redirigiendo a la tienda de aplicaciones...');
});

document.getElementById('learn-more').addEventListener('click', function() {
    document.querySelector('#como-funciona').scrollIntoView({
        behavior: 'smooth'
    });
});

document.getElementById('cta-button').addEventListener('click', function() {
    alert('Redirigiendo a la tienda de aplicaciones...');
});

// Cerrar menú móvil al hacer clic fuera
document.addEventListener('click', function(e) {
    const nav = document.getElementById('main-nav');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    
    if (nav && nav.classList.contains('active') && 
        !nav.contains(e.target) && 
        !menuBtn.contains(e.target)) {
        nav.classList.remove('active');
    }
});

// Efecto de scroll para header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (header) {
        if (window.scrollY > 100) {
            header.style.backgroundColor = 'rgba(26, 26, 26, 0.98)';
            header.style.backdropFilter = 'blur(15px)';
        } else {
            header.style.backgroundColor = 'rgba(26, 26, 26, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        }
    }
});

// =============================================
// INICIALIZACIÓN
// =============================================

document.addEventListener('DOMContentLoaded', function() {
    createModal();
    initFAQ;
    console.log('Modal de registro inicializado correctamente');
});

setTimeout(() => {
    console.log('=== DEBUG FAQ ===');
    console.log('Elementos .faq-question encontrados:', document.querySelectorAll('.faq-question').length);
    console.log('Elementos .faq-item encontrados:', document.querySelectorAll('.faq-item').length);
    console.log('Botones categoría encontrados:', document.querySelectorAll('.faq-category-btn').length);
    
    initFAQ();
    
    const firstQuestion = document.querySelector('.faq-question');
    if (firstQuestion) {
        console.log('Primera pregunta encontrada, probando funcionalidad...');
        firstQuestion.addEventListener('click', function() {
            console.log('Click funcionando!');
        });
    }
}, 1000);
