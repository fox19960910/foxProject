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
        var menu = document.querySelector('.header__nav');
        btn.addEventListener('click', function() {
            menu.classList.toggle('show-menu');
        })
    },
    clickTab: function() {
        var tabs = document.querySelectorAll('.tab ');
        var contents = document.querySelectorAll('.myGuest');

        tabs.forEach((tab, index) => tab.addEventListener('click', () => {
            tabs.forEach(tab => tab.classList.remove('active'));
            contents.forEach(content => content.classList.remove('active'));

            tabs[index].classList.add('active');
            contents[index].classList.add('active');

        }));

    },
    countDown: function() {
        var count = new Date('Feb 11 2020 00:00:00').getTime();
        var x = setInterval(function() {
            var now = new Date().getTime();
            var d = count - now;
            console.log(count);
            console.log(now);
            console.log(d);
            var timePerDay = 1000 * 60 * 60 * 24;
            var timeperhour = 1000 * 60 * 60;
            var days = Math.floor(d / timePerDay);
            var hours = Math.floor((d % timePerDay) / timeperhour);
            var minutes = Math.floor((d % timeperhour) / (1000 * 60));
            var seconds = Math.floor((d % (1000 * 60)) / 1000);

            document.getElementById('days').innerHTML = days;
            document.getElementById('hours').innerHTML = hours;
            document.getElementById('minutes').innerHTML = minutes;
            document.getElementById('seconds').innerHTML = seconds;

            if (d <= 0) {
                clearInterval(x);
            }

        }, 1000);
    }


}
action.init();