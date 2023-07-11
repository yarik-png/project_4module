$(document).ready(function(em){
    document.getElementById("score_neg_btn").style.opacity="1";
    document.getElementById("score_pos_btn").style.opacity="1";



    $('.all_comments').isotope({
        itemSelector: '.comment_div',
        layoutMode: 'masonry'
    });

    $('#score_pos_btn').on('click', function(el) {
        el.preventDefault();

        if (document.getElementById("score_pos_btn").style.opacity == "1") {
            document.getElementById("score_pos_btn").style.opacity="0.5";
            document.getElementById("score_neg_btn").style.opacity="1";
            document.getElementById("id_score").value = 1
        } else if (document.getElementById("score_pos_btn").style.opacity == "0.5") {
            document.getElementById("score_pos_btn").style.opacity="1";
            document.getElementById("id_score").value = None
        }




    });


    $('#score_neg_btn').on('click', function(el) {
        el.preventDefault();

        if (document.getElementById("score_neg_btn").style.opacity == "1") {
            document.getElementById("score_neg_btn").style.opacity="0.5";
            document.getElementById("score_pos_btn").style.opacity="1"
            document.getElementById("id_score").value = 2
        } else if (document.getElementById("score_neg_btn").style.opacity == "0.5") {
            document.getElementById("score_neg_btn").style.opacity="1";
            document.getElementById("id_score").value = None
        }


    });


    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }



    $("#add_comment")
    .mouseenter(function() {
         // навели курсор на объект (не учитываются переходы внутри элемента)
         console.log("навели");

          var degrees = 90;
          var angle = $("#sort_btn_png").data("angle");
          if (!angle)
              angle = 0;
          angle = +angle + degrees;

          $("#img_add_comment")
              .data("angle", angle)
              .css({ transform: "rotate(" + angle + "deg)", transition: "0.5 s" });


    })
    .mouseleave(function(){
        // отвели курсор с объекта (не учитываются переходы внутри элемента)
         console.log("отвели");
         $("#img_add_comment").css({ transform: "rotate(" + 90 + "deg)", transition: "0.5 s" });
    });


    $('#add_comment').on('click', function(el) {
        document.getElementById("form_div").style.display="block";
        document.getElementById("form_div").style.visibility="visible";
    });



    $('#close').on('click', function(el) {
       console.log('НАЖАТИЕ');
       document.getElementById("form_div").style.visibility="hidden";
    });

//    $(".post_comment_btn").on('click', function(el) {
//        Cookies.set('secret_key_comm', "121912", { expires: 1 }, path='');
//    });


});
