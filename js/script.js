
    var pwd = document.getElementById("pwd");
    var eye = document.getElementById("eye");
    eye.addEventListener('click', togglePass );
    function togglePass(){
        eye.classList.toggle('active');
     if (pwd.type == 'password') {
        pwd.type = 'text'
     } else {
        pwd.type = 'password';
     }
    }
