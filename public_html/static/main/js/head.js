$(document).ready(function(el){

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    
     $('#close_head_text').on('click', function(el) {
        el.preventDefault();
         document.getElementById("head_text_div").animate({left: "-300%"}, 1500);
         sleep(1500).then(() => { document.getElementById("head_text_div").style.left="-300%"; });




    });


    $('#menu_btn').on('click', function(eld) {
        eld.preventDefault();
        document.getElementById("head_text_div").animate({left: "0%"}, 1500);
        sleep(1500).then(() => { document.getElementById("head_text_div").style.left="0%"; });

    });

});

