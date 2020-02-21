var action = {
    init: function() {
        // this.processBar();
        this.validateForm();
    },
    validateForm:function(){
        let emailStore = localStorage.getItem('email')
        let passwordStore = localStorage.getItem('password')
        console.log(emailStore)
        console.log(passwordStore)
        const btnNext = document.querySelectorAll('.next')
        const email = document.getElementById('email')
        const password = document.getElementById('password')
        let errorMessage = document.querySelector('.error')
        var emailValidate = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        btnNext.forEach(next => {
            next.addEventListener('click', (e)=>{
                    e.preventDefault();
                    if (!emailValidate.test(email.value)){
                        errorMessage.innerHTML=('Your email is not correct')
                    }else if (email.value !== emailStore){
                        errorMessage.innerHTML = ('*Your email is not correct');
                    }else if (password.value !== passwordStore){
                        errorMessage.innerHTML = ('*Your password is not correct');
                    }else{
                        alert('Login Success')
                        
                    }     
                });
        });
        
        
    },

  
}
action.init();




