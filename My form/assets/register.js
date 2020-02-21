var action = {
    init: function(){
        this.form();
    },
    form:function(){
        const form = document.getElementById('form')
        const username = document.getElementById('email')
        const password = document.getElementById('password')
        const confirmPassword = document.getElementById('confirmPassword')
        errorMessage= document.querySelectorAll('.error');
        const showPass = document.getElementById('showPassword')
        const submit = document.getElementById('submit')
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        showPass.addEventListener('click',()=>{
            if(password.type === 'password' || confirmPassword.type === 'password'){
                password.type = 'text';
                confirmPassword.type = 'text';
            }else{
                password.type = 'password';
                confirmPassword.type = 'password';
            }
        });

        form.addEventListener('submit',(e) =>{
            e.preventDefault()
            
            if (!filter.test(username.value)){
                errorMessage[0].innerHTML = ('*Your email is not correct');

            }else if (password.value.length < 8){
                errorMessage[1].innerHTML = ('*Your password is too short');

            }else if (password.value.length > 20){
                errorMessage[1].innerHTML = ('*Your password is too long');
        
            }
            if (password.value != confirmPassword.value){
                errorMessage[2].innerHTML = ('*Your password and confirm password is not match');  
            }else {
                //  localStorage.setItem('username',username.value); 
                //  localStorage.setItem('password',password.value);
                function obj(email,password){
                    this.email= email;
                    this.password = password
                }
                const object = new obj(username.value,password.value)
                var data = JSON.parse(localStorage.getItem('data'));
                
                if (data==null){
                    data=[];
                }
                data.push(object);
                localStorage.setItem('data',JSON.stringify(data));
                alert(" Dé, bạn đã đăng ký thành công :D");
                

            }
            
        })
    },
}
action.init();