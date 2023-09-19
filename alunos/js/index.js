$('#google-icon-menu').on('click', function() {
    document.querySelector('.responsive-menu').style.right = "0";
    document.querySelector('.responsive-menu').style.transition = "0.6s";
    document.querySelector('.responsive-menu-content').style.right = "0";
    document.querySelector('.responsive-menu-content').style.transition = "0.4s";
    document.querySelector('#google-icon-menu').style.opacity = "0";
});


$('#google-icon-close').on('click', function() {
    document.querySelector('.responsive-menu').style.right = "-100%";
    document.querySelector('.responsive-menu').style.transition = "0.4s";
    document.querySelector('.responsive-menu-content').style.right = "-100%";
    document.querySelector('.responsive-menu-content').style.transition = "0.4s";
    document.querySelector('#google-icon-menu').style.opacity = "1";
});


$(function(){  
    var menu_right = $(".responsive-menu-content");
    $(".responsive-menu").on('click', function(e) {
    if(menu_right.has(e.target).length || e.target == menu_right[0])
    return;

    document.querySelector('.responsive-menu').style.right = "-100%";
    document.querySelector('.responsive-menu').style.transition = "0.4s";
    document.querySelector('.responsive-menu-content').style.right = "-100%";
    document.querySelector('.responsive-menu-content').style.transition = "0.4s";
    document.querySelector('#google-icon-menu').style.opacity = "1";

}); 
});