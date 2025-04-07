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
    backgroundImg.src = "img/background-azul.webp"
    backgroundImg.onload = function () {
        var bannerSection = document.getElementById('my-banner')
        bannerSection.style.backgroundImage = "url('img/background-azul.webp')"
        AOS.init()
    };
};

function disableRightClick(event) {
    event.preventDefault();
}

function calculateAge() {
    const birthDate = new Date('2001-04-08');
    const birthMonth = birthDate.getMonth()
    const birthDay = birthDate.getDate()

    const currentDate = new Date();
    const currentMonth = currentDate.getMonth()
    const currentDay = currentDate.getDate()

    let age = currentDate.getFullYear() - birthDate.getFullYear();

    // Verificando se já fez aniversário este ano
    if (currentMonth < birthMonth || 
        (currentMonth === birthMonth && currentDay < birthDay)) {
        age--;
    }

    // Definindo o texto no elemento com id 'idade'
    document.getElementById('idade').innerText = age;
}

calculateAge()