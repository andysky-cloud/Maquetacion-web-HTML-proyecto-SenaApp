// - NAVBAR
const navbarHTML = `
<header class="navbar">
    <div class="navbar-marca">
        <a href="index.html" class="logo">
            <span class="logo-icono">S</span>
            <span class="logo-texto">SenaApp</span>
        </a>
    </div>
    <nav class="navbar-nav">
        <ul class="nav-lista">
            <li><a href="index.html" class="nav-link">Inicio</a></li>
            <li><a href="cursos.html" class="nav-link">Cursos</a></li>
            <li class="nav-buscador">
                <span class="buscar-icono">🔍</span>
                <input type="text" placeholder="¿Qué quieres aprender?" class="buscar-input">
            </li>
            <li class="nav-item tiene-dropdown">
                <a href="#" class="nav-link">Páginas <span class="flecha">▼</span></a>
                <ul class="dropdown">
                    <li><a href="cursos.html">Cursos</a></li>
                    <li><a href="resumen.html">Resumen del curso</a></li>
                    <li><a href="instructor.html">Perfil del instructor</a></li>
                </ul>
            </li>
        </ul>
    </nav>
    <div class="navbar-cta">
        <a href="cursos.html" class="btn btn-primary">Comenzar</a>
    </div>
    <button class="hamburger" id="btn-menu">☰</button>
</header>
`;

// - FOOTER
const footerHTML = `
<footer class="footer">
    <div class="container">
        <div class="footer-grid">
            <div class="footer-marca">
                <div class="footer-logo">
                    <span class="logo-icono">S</span> SenaApp
                </div>
                <p>Calle 153, Plaza Williamson</p>
                <p>+57 (062) 109-9222</p>
            </div>
            <div>
                <h5>Empresa</h5>
                <ul>
                    <li><a href="instructor.html">Acerca de</a></li>
                    <li><a href="#">Carreras <span class="badge-footer">Contratando</span></a></li>
                    <li><a href="index.html">Blog</a></li>
                </ul>
            </div>
            <div>
                <h5>Funciones</h5>
                <ul>
                    <li><a href="#">Novedades</a></li>
                    <li><a href="#">Integraciones</a></li>
                    <li><a href="resumen.html">Precios</a></li>
                </ul>
            </div>
            <div>
                <h5>Documentación</h5>
                <ul>
                    <li><a href="#">Soporte</a></li>
                    <li><a href="#">Documentos</a></li>
                    <li><a href="#">Referencia API</a></li>
                </ul>
            </div>
            <div>
                <h5>Recursos</h5>
                <ul>
                    <li><a href="#">Ayuda</a></li>
                    <li><a href="#">Mi cuenta</a></li>
                </ul>
            </div>
        </div>
        <div class="footer-inferior">
            <div class="footer-legal">
                <a href="#">Privacidad y Política</a>
                <span>/</span>
                <a href="#">Términos</a>
                <span>/</span>
                <a href="#">Mapa del sitio</a>
            </div>
            <div class="footer-redes">
                <a href="#">Fb</a>
                <a href="#">Ig</a>
                <a href="#">X</a>
                <a href="#">Gh</a>
            </div>
        </div>
        <p class="footer-copy">&copy; SenaApp 2026. Todos los derechos reservados.</p>
    </div>
</footer>
`;

// Inyectar en la pagina 
document.body.insertAdjacentHTML('afterbegin', navbarHTML);
document.body.insertAdjacentHTML('beforeend', footerHTML);

// Marcar enlace activo
const paginaActual = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-link').forEach(a => {
    if (a.getAttribute('href') === paginaActual) {
        a.style.color = 'var(--azul)';
        a.style.fontWeight = '600';
    }
});

// Hamburger menú móvil
document.getElementById('btn-menu').addEventListener('click', function() {
    document.querySelector('.navbar-nav').classList.toggle('abierto');
});

// Dropdown móvil
document.querySelectorAll('.tiene-dropdown > .nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        if (window.innerWidth < 768) {
            e.preventDefault();
            this.parentElement.classList.toggle('abierto');
        }
    });
});