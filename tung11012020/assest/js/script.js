var button = {
    init: function() {
        this.buttonClick();
    },
    buttonClick: function() {
        var getButton = document.querySelector('.header__bar');
        var getText = document.querySelector('.nav__menu');
        getButton.addEventListener('click', function() {
            getText.classList.toggle("nav__menu--show");
        })
    }
}
button.init()