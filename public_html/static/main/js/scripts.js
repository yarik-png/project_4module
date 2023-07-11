$(document).ready(function(){






    var form = $('#form1')
    console.log(Cookies.get('basket'));
    $('#hidden_order').css('height',$("#body").innerHeight());





    var submit_btn = $('#submit_btn');
    var product_id = submit_btn.data("product-id");
    var product_name = submit_btn.data("product-name");
    var product_img = submit_btn.data("product-img");
    var product_price = submit_btn.data("product-price");

    if (Cookies.get('basket') != undefined) {
        var basket = Cookies.get('basket');
        var array = basket.split(",");
        var array = array.filter(Number);
        var has = array.includes(String(product_id));
        console.log(has);
        if (has) {
            var submitBtn = document.getElementById("submit_btn");
            submitBtn.innerHTML = "В корзине";
        }
    }


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

    $('#close').on('click', function(el) {
           document.getElementById("hidden_order").style.visibility="hidden";

    });


    $('#order_btn').on('click', function(ed) {
        ed.preventDefault();
        console.log("Оформить заказ");
        document.getElementById("hidden_order").style.visibility="visible";
    });



    $('#submit_btn').on('click', function(el) {
        el.preventDefault();

        if (Cookies.get('basket') == undefined) {
            console.log('Куки не было и мы добавили новое значение');
            Cookies.set('basket', product_id+",", { expires: 30 });
            var submitBtn = document.getElementById("submit_btn");
            submitBtn.innerHTML = "В корзине";

        } else {
            var basket = Cookies.get('basket');             // присваеваем переменной баскет текущий куки
            var array = basket.split(",");
            var array = array.filter(Number);
            console.log(array);
            var has = array.includes(String(product_id));
            console.log(has);

            if (has) {
                console.log('Товар уже у вас в корзине');
            } else {

                console.log("Добавляем");
                var basket = basket + product_id + ",";         // добавляем к текущей ппеременной новое значение
                Cookies.set('basket', basket, { expires: 30 }, path=''); // меняем куки на переменную баск

                var submitBtn = document.getElementById("submit_btn");
                submitBtn.innerHTML = "В корзине";
            }


        }


    });











});