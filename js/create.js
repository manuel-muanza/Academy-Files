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