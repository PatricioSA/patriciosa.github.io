const nav = document.getElementById('header')
window.addEventListener('scroll', () => {
    if (window.scrollY >= 100) {
        nav.classList.add('bg-primary')
    } else {
        nav.classList.remove('bg-primary')
    }
})

//carrega a animação depois que a imagem de fundo for carregada
window.onload = function () {
    var backgroundImg = new Image()
    backgroundImg.src = "img/background-azul.jpg"
    backgroundImg.onload = function () {
        var bannerSection = document.getElementById('my-banner')
        bannerSection.style.backgroundImage = "url('img/background-azul.jpg')"
        AOS.init()
    };
};