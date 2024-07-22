document.addEventListener('DOMContentLoaded',function(){
       document.getElementById('loginForm').addEventListener('submit',function(event){
        event.preventDefault();

        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        if(username === '' || password === ''){
            alert('vui lòng điền cả tên đăng nhập va mật khẩu');
        }
        else{
            alert('đăng nhập thành công');
        }
    }); 
});
