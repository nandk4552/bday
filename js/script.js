let dayNight = document.querySelector('.dayNight')
let menuToggle = document.querySelector('.menuToggle')
let body = document.querySelector('body')
let navigation = document.querySelector('.navigation')

dayNight.onclick = function() {
    body.classList.toggle('dark')
    dayNight.classList.toggle('active')
}
menuToggle.onclick = function() {
        menuToggle.classList.toggle('active')
        navigation.classList.toggle('active')
    }
    // typed script
var typed = new Typed(".auto-input", {
    strings: ["Happy", "Birthday", "Lavu ❤️ "],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
});