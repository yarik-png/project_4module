$(document).ready(function(){

    var images = document.getElementsByClassName("img");

    // Проходимся по каждому изображению и обрезаем атрибут src на 8 символов
    for (var i = 0; i < images.length; i++) {
        var src = images[i].getAttribute('src');

        // Укорачиваем атрибут src на 8 символов
        var shortenedSrc = src.substring(6);

        // Устанавливаем обрезанный атрибут src обратно в элемент <img>
        images[i].setAttribute('src', shortenedSrc);
    }


    var form = $('#form1');

    const window_height = document.documentElement.clientHeight;

    console.log(window_height);

    $('#hidden_order').css('height', window_height);



    if (Cookies.get('basket') == ","){
        Cookies.set('basket', '');
    }




    var buttons = document.getElementsByClassName("del"); // получаем все кнопки на странице
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function() { // добавляем обработчик события клика для каждой кнопки
        var buttonId = this.getAttribute("data-button-id"); // получаем значение атрибута button-id нажатой кнопки
        console.log(buttonId); // выводим значение атрибута в консоль

        var basket = Cookies.get('basket');             // присваеваем переменной баскет текущий куки
        var array = basket.split(",");
        var array = array.filter(Number);
        //
        //
        var index = array.indexOf(String(buttonId)); // получаем индекс элемента со значением
        console.log(index)


        console.log('удаление')
        array.splice(index, 1); // удаляем элемент из массива по его индексу


        console.log(String(array));
        Cookies.set("basket", String(array) + ",", { expires: 30 });

        console.log(Cookies.get('basket'));
        location.reload()

        });
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


    $('.ord').on('click', function(ed) {
        ed.preventDefault();
        console.log("Оформить заказ");
        document.getElementById("hidden_order").style.visibility="visible";
    });






});