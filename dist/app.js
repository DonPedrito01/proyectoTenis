/*document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('app');

    // Guardar el contenido inicial
    const initialContent = content.innerHTML;

    // Función para cargar el contenido dinámico
    function loadContent(url) {
        // Si la URL es la raíz (#/ o #/index), restauramos el contenido inicial
        if (url === '#/') {
            content.innerHTML = initialContent;
            return;
        }

        // Ajusta la ruta para buscar en la carpeta "pages"
        const route = url.replace('#', '');
        fetch(`pages/${route}.html`)
            .then(response => {
                // Si la respuesta no es válida (por ejemplo, 404), cargar la página de error
                if (!response.ok) {
                    throw new Error('Página no encontrada');
                }
                return response.text();
            })
            .then(html => {
                content.innerHTML = html;
            })
            .catch(err => {
                console.error('Error loading content:', err);
                // Cargar la página de error 404
                fetch('pages/404.html')
                    .then(response => response.text())
                    .then(html => {
                        content.innerHTML = html;
                    })
                    .catch(err => console.error('Error loading 404 page:', err));
            });
    }

    // Manejador de eventos para los enlaces
    document.body.addEventListener('click', (e) => {
        if (e.target.matches('[data-link]')) {
            e.preventDefault();
            const href = e.target.getAttribute('href');
            history.pushState(null, null, href);
            loadContent(href);
        }
    });

    // Manejar el evento de retroceso/avance en el navegador
    window.addEventListener('popstate', () => {
        const path = window.location.hash.replace('#', '');
        loadContent(`#${path}`);
    });

    // Cargar el contenido inicial basado en la URL actual
    const initialPath = window.location.hash.replace('#', '');
    loadContent(`#${initialPath}`);
}); */