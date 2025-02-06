//Função para digitar um texto;
function typeText(elementId, text, speed, delayBeforeErase) {
    const element = document.getElementById(elementId);
    let index = 0;
    let isDeleting = false;

    function typeEffect() {
        if (!isDeleting && index < text.length) {
            // Digitando letra por letra
            element.textContent += text.charAt(index);
            index++;
            setTimeout(typeEffect, speed);
        } else if (!isDeleting && index === text.length) {
            // Espera um tempo antes de apagar
            isDeleting = true;
            setTimeout(typeEffect, delayBeforeErase);
        } else if (isDeleting && index > 0) {
            // Apagando letra por letra
            element.textContent = text.substring(0, index - 1);
            index--;
            setTimeout(typeEffect, speed / 2); // Apagar mais rápido que digitar
        } else {
            // Quando tudo for apagado, recomeça a digitação
            isDeleting = false;
            setTimeout(typeEffect, speed);
        }
    }
    typeEffect(); // Inicia a animação
}
//Aguarda a pagina ser carregada para se iniciar
window.addEventListener("load", function () {
    typeText("title", "Emerson Souza", 150, 1500); // ID, Texto, Velocidade, Atraso para apagar
});
//Animações em JS;
ScrollReveal().reveal('#P', {
    origin: 'top',
    duration: 4000,
    distance: '20%',
});
ScrollReveal().reveal('#paragraphy', {
    origin: 'bottom',
    duration: 4000,
    distance: '20%',
})
ScrollReveal().reveal('#p1', {
    origin: 'bottom',
    duration: 4000,
    distance: '20%',
})
ScrollReveal().reveal('#p2', {
    origin: 'bottom',
    duration: 4000,
    distance: '20%',
})
ScrollReveal().reveal('#p3', {
    origin: 'left',
    duration: 3000,
    distance: '20%',
})
ScrollReveal().reveal('#p4', {
    origin: 'right',
    duration: 3000,
    distance: '20%',
})
ScrollReveal().reveal('#p5', {
    origin: 'bottom',
    duration: 4000,
    distance: '40%',
})
ScrollReveal().reveal('.skills', {
    origin: 'bottom',
    duration: 2500,
    distance: '20%',
})
ScrollReveal().reveal('#p6', {
    origin: 'left',
    duration: 1500,
    distance: '20%',
})
ScrollReveal().reveal('#p7', {
    origin: 'left',
    duration: 2000,
    distance: '20%',
})
ScrollReveal().reveal('#p8', {
    origin: 'left',
    duration: 3000,
    distance: '20%',
})
ScrollReveal().reveal('#p9', {
    origin: 'left',
    duration: 4000,
    distance: '20%',
})
