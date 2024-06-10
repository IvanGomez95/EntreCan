// Función para controlar el desplazamiento
$(window).on("scroll", function() {
    var scrollPosition = $(window).scrollTop();
    if (scrollPosition > 50) {
        $("#navbar").addClass("navbar-scroll");
    } else {
        $("#navbar").removeClass("navbar-scroll");
    }

    // Eliminar la clase fade-in-visible de todos los elementos
    let allFadeElements = document.querySelectorAll('.fade-in-element');
    allFadeElements.forEach(function(element) {
        element.classList.remove('fade-in-visible');
    });

    // Agregar la clase fade-in-visible a los elementos actualmente en el viewport
    let visibleFadeElements = document.querySelectorAll('.fade-in-element:not(.fade-in-visible)');
    visibleFadeElements.forEach(function(element) {
        if (isElementInViewport(element)) {
            element.classList.add('fade-in-visible');
        }
    });
});

// Función para determinar si el elemento está en el viewport
function isElementInViewport(el, margin = 100) {
    let rect = el.getBoundingClientRect();
    return (
        rect.bottom >= -margin &&
        rect.top <= window.innerHeight + margin
    );
}















