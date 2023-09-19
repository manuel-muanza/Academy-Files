document.querySelector('#input-email').addEventListener("keyup",function(e){
    document.querySelector('#input-email').style.color = "rgb(0, 156, 184)";
    document.querySelector('.login-box-email').style.borderBottom = "1px solid rgb(0, 156, 184)";
    document.querySelector('#response-input-email').innerHTML = "";
    validate_data_reset();
},false);

function validate_data_reset(){
    var email = document.querySelector('#input-email').value;
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
    }else{
        document.querySelector('#btn-login').style.opacity = "1";
        document.querySelector('#btn-login').style.cursor = "pointer";
        return true;
    }

}


document.querySelector('#btn-rest-password').addEventListener("click",function(e){
    if(validate_data_reset() === true){
        alert("OK");
    }
},false);