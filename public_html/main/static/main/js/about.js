$(document).ready(function(){


     $('#vk_btn').on('click', function(el) {
       el.preventDefault();
       console.log("Нажали на вк")
       window.location.replace("https://vk.com/blynskyshop");
    });

    $('#tg_btn').on('click', function(el) {
       el.preventDefault();
       console.log("Нажали на тг")
       window.location.replace("https://t.me/BLYNSKY");

    });



});