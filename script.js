cnt = true;

$(".navbar_toogleBtn").click(function(){

    if(cnt == true){

    $(".navbar_menu").slideDown();
    $(".navbar_icons").slideDown();
        cnt = false;
    }
    else{
            $(".navbar_menu").slideUp();
    $(".navbar_icons").slideUp();
        cnt = true;
    }
});
