var action = {
    init: function() {
        // this.processBar();
        this.validateForm();
    },
    validateForm:function(){
        let steps = 0;
        const btnNext = document.querySelectorAll('.next')
        const btnPrev = document.querySelectorAll('.prev')
        const bar = document.querySelectorAll('.process li')
        const form = document.querySelectorAll('.form')
        const email = document.getElementById('email')
        const password = document.getElementById('password')
        const confirmPassword = document.getElementById('confirmPassword')
        const fName = document.getElementById('fName').value
        const lName = document.getElementById('lName').value
        const number = document.getElementById('number')
        let errorMessage = document.querySelector('.error')
        var emailValidate = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        console.log(number)
        btnNext.forEach(next => {
            next.addEventListener('click', (e)=>{
                    e.preventDefault();
                    if (!emailValidate.test(email.value)){
                        errorMessage.innerHTML=('Your email is not correct')
                    }else if (password.value.length < 8){
                        errorMessage.innerHTML = ('*Your password is too short');
                    }else if (password.value.length > 20){
                        errorMessage.innerHTML = ('*Your password is too long');
                    }else if (password.value !== confirmPassword.value){
                        errorMessage.innerHTML = ('*Your confirm password is not match');
                    }else{
                        
                        if(steps<form.length -1){
                            steps++;
                            bar[steps].classList.add('active')
                            form[steps-1].classList.remove('active')
                            form[steps].classList.add('active')
                            console.log(btnNext.length)

                        }
                        else{
                            // if (number.value ==' ' || number.value == null ||  9<= number.value.length <=11){
                            //     errorMessage.innerHTML = ('*Your number is not correct');
                            // }else{
                            // alert('done')
                            // }
                            alert('Successful')
                            localStorage.setItem('email',email.value)
                            localStorage.setItem('password',password.value)

                        } 
                        
                    }     
                });
        });
        btnPrev.forEach(prev => {
            prev.addEventListener('click', (e)=>{
                    e.preventDefault();
                    steps--;
                    bar[steps+1].classList.remove('active')
                    form[steps].classList.add('active')
                    form[steps+1].classList.remove('active')
                    
                });
        });
        
    },

    // processBar:function(){
    //     let steps = 0;
    //     const btnNext = document.querySelectorAll('.next')
    //     const btnPrev = document.querySelectorAll('.prev')
    //     const bar = document.querySelectorAll('.process li')
    //     const form = document.querySelectorAll('.form')
    //     console.log(btnPrev)
    //     btnNext.forEach(next => {
    //         next.addEventListener('click', (e)=>{
    //                 e.preventDefault();
    //                 steps++;
    //                 bar[steps].classList.add('active')
    //                 form[steps-1].classList.remove('active')
    //                 form[steps].classList.add('active')
    //             });
    //     });
        

    // },
  
}
action.init();




                    // else if (fName ==' ' || fName == null){
                    //     errorMessage.innerHTML = ('*Please enter your first name');
                    // }else if (lName ==' ' || lName == null){
                    //     errorMessage.innerHTML = ('*Please enter your last name');
                    // }else if (number ==' ' || number == null ||  9<= number <=11){
                    //     errorMessage.innerHTML = ('*Your number is not correct');