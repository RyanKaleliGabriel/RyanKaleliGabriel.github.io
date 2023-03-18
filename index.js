document.addEventListener('DOMContentLoaded', function(){
    const currentYear = new Date().getFullYear();
    const yearElem = document.querySelector('.year');
    yearElem.textContent = currentYear;
});

const bodyEl = document.body
const switchEl = document.querySelector('.switch')
const activeTheme = localStorage.getItem('theme')

if (activeTheme) {
    bodyEl.classList.add('dark')
}

switchEl.addEventListener('click', function () {
    bodyEl.classList.toggle('dark')
    if (bodyEl.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark')
    } else {
        localStorage.removeItem('theme')
    }
})