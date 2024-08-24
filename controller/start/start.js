// Icono Hamburguesa

document.querySelector(".bars__menu").addEventListener("click", animateBars)

var line1__bars = document.querySelector(".line1__bars-menu")
var line2__bars = document.querySelector(".line2__bars-menu")
var line3__bars = document.querySelector(".line3__bars-menu")

var conli = document.querySelector('.conli')
var li = document.querySelectorAll('.conli li')

function animateBars() {
    line1__bars.classList.toggle('active')
    line2__bars.classList.toggle('active')
    line3__bars.classList.toggle('active')

    conli.classList.toggle('active')

    li.forEach(item => {
        item.addEventListener('click', () => {
            line1__bars.classList.remove('active')
            line2__bars.classList.remove('active')
            line3__bars.classList.remove('active')

            conli.classList.remove('active')
        })
    });
}

// Banner

window.onscroll = function () {

    var posicion = window.pageYOffset || document.documentElement.scrollTop
    var elemento1 = document.getElementById("icon_heart")
    var elemento2 = document.getElementById("icon_fire")

    elemento1.style.bottom = `${posicion * 0.1}px`
    elemento2.style.top = `${posicion * 0.1}px`

}

// plus Info

var btninfo = document.querySelectorAll('.plusinfo')

btninfo.forEach(button => {
    button.addEventListener('click', () => {
        location.href = "#about"
    });
});

