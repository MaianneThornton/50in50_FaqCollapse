const toggling = document.querySelectorAll('.faq-toggle')

toggling.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})