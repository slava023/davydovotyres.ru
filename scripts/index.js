const $menu = document.querySelector('.burger__body');
const $menuBtn = document.querySelector('.js-burger__icon');
const body = document.body;

$menuBtn.addEventListener('click', function (e) {
    $menu.classList.toggle('active');
    $menuBtn.classList.toggle('active');
    body.classList.toggle('lock');
});

$menu.addEventListener('click', function (e) {
    if (!e.target.closest('.burger__list')) {
        $menu.classList.remove('active');
        $menuBtn.classList.remove('active');
        body.classList.remove('lock');
    }
});

const navLinks = document.querySelectorAll('.burger__list a');
navLinks.forEach(link => {
    link.addEventListener('click', function () {
        $menu.classList.remove('active');
        $menuBtn.classList.remove('active');
        body.classList.remove('lock');
    });
});
// скролл
document.querySelector('.container-video__arrow').addEventListener('click', function () {
    const aboutSection = document.getElementById('about');
    let offset = window.innerWidth < 768 ? 60 : 80;

    const elementPosition = aboutSection.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
});