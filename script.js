function changeimg(url) {
    document.getElementById('section2c__container').style.background = url;
    document.getElementById('elt1').style.backgroundImage = 'none';
    document.getElementById('elt2').style.backgroundImage = 'none';
    document.getElementById('elt3').style.backgroundImage = 'none';
    document.getElementById('elt4').style.backgroundImage = 'none';
}
function closeimg() {
    document.getElementById('section2c__container').style.background = 'none';
    document.getElementById('elt1').style.backgroundImage =
        'url(img/design-banner.webp)';
    document.getElementById('elt2').style.backgroundImage =
        'url(img/development-banner.webp)';
    document.getElementById('elt3').style.backgroundImage =
        'url(img/digital-banner.webp)';
    document.getElementById('elt4').style.backgroundImage =
        'url(img/technical-banner.webp)';
}
///////////////////////////////////////////////////////////
// Faire switcher les boutons du menu au clic

const btnNavEl = document.querySelector(' .btn__mobile__nav ');
const headerEl = document.querySelector('.header');

btnNavEl.addEventListener('click', function () {
    headerEl.classList.toggle('nav__open');
});
