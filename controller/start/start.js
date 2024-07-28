window.onscroll = function(){

    var  posicion = window.pageYOffset || document.documentElement.scrollTop;

    var elemento1 = document.getElementById("icon_heart");
    var elemento2 = document.getElementById("icon_fire");

    elemento1.style.bottom = posicion * 0.2 + "px"
    elemento2.style.top = posicion * 0.2 + "px"

}

const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    rest: true
}) 

sr.reveal('.hero-text',{delay:200, origin:'top'});
sr.reveal('.hero-img',{delay:450, origin:'top'});
sr.reveal('#icon-hero',{delay:650, origin:'bottom'});
sr.reveal('.banner',{delay:50, origin:'left'});
sr.reveal('.about_us',{delay:200, origin:'bottom'});
sr.reveal('.ingreso',{delay:200, origin:'bottom'});
sr.reveal('.negocio',{delay:400, origin:'bottom'});
sr.reveal('.legales',{delay:600, origin:'bottom'});
sr.reveal('.consultar',{delay:200, origin:'bottom'});
sr.reveal('.redu_cos',{delay:400, origin:'bottom'});
sr.reveal('.employs',{delay:600, origin:'bottom'});
sr.reveal('.hurtos',{delay:800, origin:'bottom'});


