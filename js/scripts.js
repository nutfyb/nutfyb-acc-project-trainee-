var navbar = document.querySelector('nav')

window.onscroll = function() {

    // pageYOffset or scrollY
    if (window.pageYOffset > 0) {
        navbar.classList.add('scrolled')
        console.log('hello')
    } else {
        navbar.classList.remove('scrolled')
    }
}

// $(document).ready(function() {
//     $('#text-banner-1').slideUp(1000, function() {});
// });