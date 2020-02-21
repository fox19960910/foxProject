var action = {
    init: function() {
        this.form();
    },
    form: function() {
        const showPass = document.getElementById('showPassword')
        let dataStore = localStorage.getItem('data');
        let changeData = JSON.parse(dataStore )
        console.log(changeData)
        changeData.forEach(item => {
        const form = document.getElementById('form')
        const username = document.getElementById('email')
        const password = document.getElementById('password')
        
        errorMessage = document.querySelectorAll('.error');
        signUp = document.getElementById('link')
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        signUp.addEventListener('click', () => {
            location.href = "file:///C:/Users/Tung/Desktop/My%20form/Register.html";
        })

        form.addEventListener('submit', (e) => {
            e.preventDefault()

            if (!filter.test(username.value)) {
                errorMessage[0].innerHTML = ('*Your email is not correct');

            } else if (username.value != item.email) {
                errorMessage[0].innerHTML = ('*Your email is not match');

            } else if (password.value != item.password) {
                errorMessage[1].innerHTML = ('*Your password is not match');

            } else {
                errorMessage[0].innerHTML = (' ');
                errorMessage[1].innerHTML = (' ');
                alert(" Yê, đã đăng nhập thành công :D");

            }

        })
        });
        showPass.addEventListener('click', () => {
            if (password.type === 'password') {
                password.type = 'text';
            } else {
                password.type = 'password';
            }
        });
    },
}
action.init();