//slide
var action = {
    init: function() {
        this.slide1();
        this.headerFixed();
        this.slide2();
    },
    headerFixed: function() {
        var getHeader = document.querySelector('.header');
        var sticky = getHeader.offsetTop;
        var getlogo = document.querySelector('.sticky__logo');
        window.addEventListener('scroll', function() {

            if (sticky < window.pageYOffset) {
                getHeader.classList.add('header__sticky');

            } else {
                getHeader.classList.remove('header__sticky');

            }
        })

    },
    slide1: function() {
        var index = 0;
        var prev = document.querySelector('.prev-p');
        var next = document.querySelector('.next-p');
        var gallery = document.querySelector('.gallery-slide');
        var slide = document.querySelectorAll('.slide');
        var lengSlide = slide.length;
        var widthSlide = slide[0].clientWidth;
        next.addEventListener('click', function() {
            if (index >= lengSlide - 1) return;
            gallery.style.transition = "transform 0.4s ease-in-out";
            index++;
            gallery.style.transform = 'translateX(' + (-widthSlide * index) + 'px)';
            console.log(gallery);
        })
        prev.addEventListener('click', function() {
            if (index <= 0) return;
            gallery.style.transition = "transform 0.4s ease-in-out";
            index--;

            gallery.style.transform = 'translateX(' + (-widthSlide * index) + 'px)';
        })
        gallery.addEventListener('transitionend', function() {
            if (slide[index].id === "lastSlide") {
                gallery.style.transition = "none";
                index = lengSlide - 2;
                gallery.style.transform = 'translateX(' + (-widthSlide * index) + 'px)';
            } else if (slide[index].id === "firstSlide") {
                gallery.style.transition = "none";
                index = 1;
                gallery.style.transform = 'translateX(' + (-widthSlide * index) + 'px)';
            }
        })
    },
    slide2: function() {
        var index = 0;
        var prev = document.querySelector('.prev-e');
        var next = document.querySelector('.next-e');
        var gallery = document.querySelector('.gallery-slide-e');
        var slide = document.querySelectorAll('.slide-e');
        var widthSlide = slide[0].clientWidth;

        next.addEventListener('click', function() {
            slide[index].style.transition = "transform 0.4s ease-in-out";
            index++;
            console.log(slide);
            slide[index].style.transform = 'translateX(' + (-widthSlide * index) + 'px)';
        })
        prev.addEventListener('click', function() {
                slide[index].style.transition = "transform 0.4s ease-in-out";
                index--;
                slide[index].style.transform = 'translateX(' + (-widthSlide * index) + 'px)';

            })
            // gallery.addEventListener('transitionend', function() {
            //     if (slide[index].id === "l-item") {
            //         console.log(slide);
            //         gallery.style.transition = "none";
            //         index = slide.length - 2;
            //         gallery.style.transform = 'translateX(' + (-widthSlide * index) + 'px)';
            //     } else if (slide[index].id === "f-item") {
            //         gallery.style.transition = "none";
            //         index = 1;
            //         gallery.style.transform = 'translateX(' + (-widthSlide * index) + 'px)';
            //     }
            // })
    }


}
action.init();