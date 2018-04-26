const nav = document.querySelector('#main');
//measuring the threshold of how far you scroll down then change to fixed navbar
//grab top of the Nav
const topOfNav = nav.offsetTop;
function fixNav(e) {
    //console.log(topOfNav);
    if(window.scrollY >= topOfNav) {
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        document.body.classList.add('fixed-nav');
    } else {
        document.body.style.paddingTop = 0;
        document.body.classList.remove('fixed-nav');
    }
}

window.addEventListener('scroll', fixNav);