const clickButton = document.querySelector('.toggle-icon');

clickButton.addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show-nav');
});

