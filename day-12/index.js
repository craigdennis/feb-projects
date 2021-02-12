const toggleButton = document.querySelectorAll('.faq-toggle');

toggleButton.forEach((btn) => {
    btn.addEventListener('click', () => {
        btn.parentNode.classList.toggle('active');
    })
});