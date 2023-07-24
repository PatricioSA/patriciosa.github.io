const nav = document.getElementById('header')
window.addEventListener('scroll', () => {
    if (window.scrollY >= 100) {
        nav.classList.add('bg-primary')
    } else {
        nav.classList.remove('bg-primary')
    }
})