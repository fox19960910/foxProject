//nav__bar
var navBar = {
    init: function() {
        this.navBarClick();
        this.headerFixed();
        this.displayModel();
        this.overlay();
        this.t();
    },
    navBarClick: function() {
        var getNavBar = document.querySelector('.nav__bar');
        var getNavMenu = document.querySelector('.nav__menu');
        getNavBar.addEventListener('click', function() {
            getNavMenu.classList.toggle("nav__menu--show");
        })
    },
    headerFixed: function() {
        var getHeader = document.querySelector('.header');
        var sticky = getHeader.offsetTop;
        var getlogo = document.querySelector('.sticky__logo');
        window.addEventListener('scroll', function() {

            if (sticky < window.pageYOffset) {
                getHeader.classList.add('header__sticky');
                getlogo.src = 'assest/image/logo-two.png';
            } else {
                getHeader.classList.remove('header__sticky');
                getlogo.src = 'assest/image/logo.png';
            }
        })

    },
    displayModel: function() {
        var button = document.querySelector('.portfolio__btn');
        var overlay = document.querySelector('.portfolio__overlayModal');
        var contentModel = document.querySelector('.portfolio__modal');
        button.addEventListener('click', function() {
            overlay.classList.add('is-visible');
            contentModel.classList.add('is-visible', 'transform-center');
        })
    },

    overlay: function() {
        var overlay = document.querySelector('.portfolio__overlayModal');
        var contentModel = document.querySelector('.portfolio__modal');
        overlay.addEventListener('click', function() {
            overlay.classList.remove('is-visible');
            contentModel.classList.remove('is-visible', 'transform-center');
        })
    },
    t: function() {
        var index = 0;
        var pre = document.querySelector('.pre-btn');
        var next = document.querySelector('.next-btn');
        // var buttonSlide = document.querySelector('.slide');
        var slides = document.querySelectorAll('.slide');
        var tesitimoniSlide = document.querySelector('.testimoni__slide');
        var lengClass = slides.length;
        const size = slides[0].clientWidth;
        next.addEventListener('click', function() {
            if (index > lengClass - 1) return;
            tesitimoniSlide.style.transition = "transform 0.4s ease-in-out";
            index++;
            tesitimoniSlide.style.transform = 'translateX(' + (-size * index) + 'px)';
            console.log(tesitimoniSlide);
            // if (index > lengClass - 1) {
            //     index = 0;
            // }

        })
        pre.addEventListener('click', function() {
            tesitimoniSlide.style.transition = "transform 0.4s ease-in-out";
            index--;
            tesitimoniSlide.style.transform = 'translateX(' + (-size * index) + 'px)';
            // if (index < 0) {
            //     index = lengClass - 1;
            // }

        })

    }

}
navBar.init();