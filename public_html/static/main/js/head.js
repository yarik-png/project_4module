$(document).ready(function(el){

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    console.log("12312123123");

     $('#close_head_text').on('click', function(el) {
        el.preventDefault();
        console.log("12312123123");
         document.getElementById("head_text_div").animate({left: "-300%"}, 500);
         sleep(480).then(() => { document.getElementById("head_text_div").style.left="-300%"; });




    });


    $('#menu_btn').on('click', function(eld) {
        eld.preventDefault();
        console.log("меню");
        document.getElementById("head_text_div").animate({left: "0%"}, 500);
        sleep(480).then(() => { document.getElementById("head_text_div").style.left="0%"; });

    });

});

