var action = {
    init: function() {
        this.fixedHeader();
        this.navBar();
        this.clickTab();
        this.countDown();
    },
    fixedHeader: function() {
        var nav = document.querySelector('.header');

        var stickey = nav.offsetTop;
        window.addEventListener('scroll', function() {
            if (stickey < window.pageYOffset) {
                nav.classList.add('stickey__nav');

            } else {
                nav.classList.remove('stickey__nav');
            }
        })
    },
    navBar: function() {
        var btn = document.querySelector('.nav__bar ');
        var menu = document.querySelector('.nav__menu ');
        var exit = document.querySelector('.exit__icon');

        btn.addEventListener('click', function() {
            menu.classList.toggle('show-menu');
        })
        exit.addEventListener('click', function() {
            menu.classList.remove('show-menu');
        })
    },

}
action.init();