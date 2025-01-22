$(function () {
    // Configura el estado inicial del body con opacidad 0 y transición suave


    // Gradualmente aumenta la opacidad a 1
    setTimeout(function () {
        $('body').css({ opacity: 1 });
    },.5); // Ejecuta inmediatamente después de que la página cargue
});
