var show_hide_password = 0;
$('#input-password').on('keyup', function() {
    var password = document.querySelector('#input-password').value;
    if(password != ""){
        document.querySelector('#icon-show-hide-password').style.display = "block";
    }else{
        document.querySelector('#icon-show-hide-password').style.display = "none";
    }
});

$('#icon-show-hide-password').on('click', function() {
    if(show_hide_password == 0){
        document.querySelector('#icon-show-hide-password').innerHTML = "visibility";
        document.querySelector('#input-password').type = "text";
        show_hide_password = 1;
    }else{
        document.querySelector('#icon-show-hide-password').innerHTML = "visibility_off";
        document.querySelector('#input-password').type = "password";
        show_hide_password = 0;
    }
});



document.querySelector('#input-email').addEventListener("keyup",function(e){
    document.querySelector('#input-email').style.color = "rgb(0, 156, 184)";
    document.querySelector('.login-box-email').style.borderBottom = "1px solid rgb(0, 156, 184)";
    document.querySelector('#response-input-email').innerHTML = "";
    validate_data_login();
},false);


document.querySelector('#input-password').addEventListener("keyup",function(e){
    document.querySelector('#input-password').style.color = "rgb(0, 156, 184)";
    document.querySelector('.login-box-password').style.borderBottom = "1px solid rgb(0, 156, 184)";
    document.querySelector('#response-input-password').innerHTML = "";
    validate_data_login();
},false);


function validate_data_login(){
    var email = document.querySelector('#input-email').value;
    var password = document.querySelector('#input-password').value;
    var er = new RegExp(/^[A-Za-z0-9_\-\.]+@[A-Za-z0-9_\-\.]{2,}\.[A-Za-z0-9]{2,}(\.[A-Za-z0-9])?/);

    if(email == ""){
        document.querySelector('.login-box-email').style.borderBottom = "1px solid red";
        document.querySelector('#response-input-email').style.color = "red";
        document.querySelector('#response-input-email').innerHTML = "Informe o seu Email";
        //document.querySelector('#input-email').focus();
        return false;
    }else if(!er.test(email)){
        document.querySelector('#input-email').style.color = "red";
        document.querySelector('.login-box-email').style.borderBottom = "1px solid red";
        document.querySelector('#response-input-email').style.color = "red";
        document.querySelector('#response-input-email').innerHTML = "Este endereço de Email não é válido";
        //document.querySelector('#input-email').focus();
    }else if(password == ""){
        document.querySelector('.login-box-password').style.borderBottom = "1px solid red";
        document.querySelector('#response-input-password').style.color = "red";
        document.querySelector('#response-input-password').innerHTML = "Informe a sua Senha";
        //document.querySelector('#input-password').focus();
    }else if(password.length < 8){
        document.querySelector('#input-password').style.color = "red";
        document.querySelector('.login-box-password').style.borderBottom = "1px solid red";
        document.querySelector('#response-input-password').style.color = "red";
        document.querySelector('#response-input-password').innerHTML = "A sua Senha deve ter mais de 7 Caractêres";
        //document.querySelector('#input-password').focus();
    }else{
        document.querySelector('#btn-login').style.opacity = "1";
        document.querySelector('#btn-login').style.cursor = "pointer";
        return true;
    }

}


document.querySelector('#btn-login').addEventListener("click",function(e){
    if(validate_data_login() === true){
        alert("OK");
    }
},false);