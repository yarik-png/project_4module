




$(document).ready(function(em){

    var windowInnerWidth = window.innerWidth
    var divElement = document.getElementById('nav'); // замените 'yourDivId' на ID вашего 
    var inputElement = document.getElementById('elastic');


   

    isvis = 0;
    
    

    if (divElement.innerHTML.trim() === '') {
        var spanElement = document.createElement('span');
        var divElementinner = document.createElement('div');
        spanElement.innerText = 'К сожалению, по вашему запросу не нашлось товаров, но мы готовы выслушать ваши предложения и                          постараться найти то, что вам нужно. Мы всегда открыты для обратной связи и готовы сделать                             все возможное,чтобы удовлетворить потребности наших клиентов.';
        divElementinner.id = 'not_search';
        divElementinner.classList.add('innerdiv');
        divElement.appendChild(divElementinner);
        divElementinner.appendChild(spanElement);
        
    }
    
    
   
    
    
    
    
    
    
    Promise.all(Array.from(document.images).filter(img => !img.complete).map(img => new Promise(resolve => { img.onload = img.onerror = resolve; }))).then(() => {
       
        
    
        var products = document.getElementsByClassName("prod_cart");
        console.log(products)

        var max_height = 0
        for (let i = 0; i < products.length; i++) {
            var cont = products[i].offsetHeight
            if (cont > max_height) {
                var max_height = cont
            }
            console.log(products[i].offsetHeight)
        }
        console.log(max_height)
    
        for (let el = 0; el < products.length; el++) {
            products[el].style.height = max_height + 'px';
        }
        
        
        var images = document.getElementsByClassName("prod_img");
        
        var max_height = 0
        for (let i = 0; i < images.length; i++) {
            var cont = images[i].offsetHeight
            if (cont > max_height) {
                var max_height = cont
            }
            
        }
        
    
        for (let el = 0; el < products.length; el++) {
            images[el].style.height = max_height + 'px';
        }
        
        
        
        
    
    
    });
    
  

    
    








    var prices = document.getElementsByClassName("prod_price");
    console.log(prices.length)


     for (let i = 0; i < prices.length; i++) {
        console.log(prices[i].textContent)
     }


    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }


    $('#sort_btn').on('click', function(el) {
        el.preventDefault();
        if (isvis == 0) {

            var degrees = 180;
            var angle = $("#sort_btn_png").data("angle");
            if (!angle)
                angle = 0;
            angle = +angle + degrees;

            $("#sort_btn_png")
                .data("angle", angle)
                .css({ transform: "rotate(" + angle + "deg)", transition: "0.5 s" });



            document.getElementById("sort_div").animate({ opacity: 1 }, 100 );
            sleep(100).then(() => { document.getElementById("sort_div").style.opacity="1"; });
            document.getElementById("sort_div").style.visibility="visible";
            document.getElementById("sort_div").style.left="5%";

            if (windowInnerWidth < 1000) {
                console.log("test");
                document.getElementById("sort_div").style.left="70px";
            }

            isvis = 1;


        } else if (isvis == 1) {
            

            var degrees = -180;
            var angle = $("#sort_btn_png").data("angle");
            if (!angle)
                angle = 180;
            angle = +angle + degrees;

            $("#sort_btn_png")
                .data("angle", angle)
                .css({ transform: "rotate(" + angle + "deg)", transition: "0.5s" });


            document.getElementById("sort_div").style.opacity="0";
            document.getElementById("sort_div").style.visibility="hidden";
            document.getElementById("sort_div").style.left="-700";
            isvis = 0;
        }



        console.log("Cортировка");

    });


    document.querySelector('#btn_sort_down').onclick = mySort;
    document.querySelector('#btn_sort_up').onclick = mySortDesk;
    document.querySelector('#btn_sort_new').onclick = mySortNew;
    document.querySelector('#btn_sort_alt').onclick = mySortAlt;





    function mySort(el) {
        el.preventDefault();
        $("#sort_btn").html("По возрастанию");
        var div = document.querySelector("#nav");
        for (let i = 0; i < div.children.length; i++) {
            for(let j = i; j < div.children.length; j++) {
                if (+div.children[i].getAttribute('data-product-price') > +div.children[j].getAttribute('data-product-price')) {
                    replacedNode = nav.replaceChild(div.children[j], div.children[i]);
                    insertAfter(replacedNode, div.children[i]);
                }
            }
        }
    }
    function mySortDesk(el) {
        el.preventDefault();
        $("#sort_btn").html("По убыванию");
        console.log("май сорт")
        var div = document.querySelector("#nav");

        for (let i = 0; i < div.children.length; i++) {
            for(let j = i; j < div.children.length; j++) {
                if (+div.children[i].getAttribute('data-product-price') < +div.children[j].getAttribute('data-product-price')) {
                    replacedNode = nav.replaceChild(div.children[j], div.children[i]);
                    insertAfter(replacedNode, div.children[i]);
                }
            }
        }
    }


    function mySortNew(el) {
        el.preventDefault();
        $("#sort_btn").html("Сначала новые");
        console.log("май сорт")
        var div = document.querySelector("#nav");
        for (let i = 0; i < div.children.length; i++) {
            for(let j = i; j < div.children.length; j++) {
                if (+div.children[i].getAttribute('data-product-id') < +div.children[j].getAttribute('data-product-id')) {
                    replacedNode = nav.replaceChild(div.children[j], div.children[i]);
                    insertAfter(replacedNode, div.children[i]);
                }
            }
        }
    }

    function mySortAlt(el) {
        el.preventDefault();
        $("#sort_btn").html("Сначала старые");
        console.log("май сорт")
        var div = document.querySelector("#nav");
        for (let i = 0; i < div.children.length; i++) {
            for(let j = i; j < div.children.length; j++) {
                if (+div.children[i].getAttribute('data-product-id') > +div.children[j].getAttribute('data-product-id')) {
                    replacedNode = nav.replaceChild(div.children[j], div.children[i]);
                    insertAfter(replacedNode, div.children[i]);
                }
            }
        }
    }




    function insertAfter(elem, refElem) {
        return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
    }

    document.querySelector('#elastic').oninput = function() {
        let val = this.value.trim().toUpperCase();
        let elasticItems = document.querySelectorAll(".prod_cart");
        if (val != '') {
            elasticItems.forEach(function (elem) {
                var cont = elem.getAttribute('data-product-name').toUpperCase().search(val)

                if (cont == -1) {
                    elem.classList.add('hide');
                }
                else {
                    elem.classList.remove('hide');
                }
            });
        }
        else {
            elasticItems.forEach(function (elem){
                elem.classList.remove('hide');
            });
        }

    }






    $('.category').on('click', function(el) {
        el.preventDefault();
        console.log("сортировка по кателогриям");
        var val = this.textContent;

        let elasticItems = document.querySelectorAll(".prod_cart");
        if (val != '') {
            elasticItems.forEach(function (elem) {
                var cont = elem.getAttribute('data-product-category')

                console.log(cont);
                if (val != cont) {
                    var bool = 0;
                } else {
                    var bool = 1;
                }

                if (windowInnerWidth < 1000) {
                    console.log("test");
                    document.getElementById("left_block").style.left="-300%";
                }




                if (bool == 0) {
                    elem.classList.add('hide');
                }
                else {
                    elem.classList.remove('hide');
                }
            });
        }
        else {
            elasticItems.forEach(function (elem){
                elem.classList.remove('hide');
            });
        }
        
        var divElement = document.getElementById('nav'); 

        var allElements = divElement.querySelectorAll('.prod_cart');
        console.log(allElements)
        var hideElements = divElement.querySelectorAll('.hide');
        console.log(hideElements.length + "количество невидимых");
        console.log(allElements.length + "количество всех");
        
        innerdivs = divElement.querySelectorAll('.innerdiv');
        
        if (hideElements.length == allElements.length && innerdivs.length < 1)  {
            console.log("нет видимых эдементов")
            var spanElement = document.createElement('span');
            var divElementinner = document.createElement('div');
            spanElement.innerText = 'К сожалению, по вашему запросу не нашлось товаров, но мы готовы выслушать ваши предложения и постараться найти то, что вам нужно. Мы всегда открыты для обратной связи и готовы сделать все возможное, чтобы удовлетворить потребности наших клиентов.';
            divElementinner.id = 'not_search';
            divElementinner.classList.add('innerdiv');
            
            divElement.appendChild(divElementinner);
            divElementinner.appendChild(spanElement);
            
           
                        
            
      
            
        } else if (hideElements.length < allElements.length) {
            var divElementinner = document.getElementById('not_search');
            console.log("есть видимые")
            divElement.removeChild(divElementinner);
   
        }



    });

    $('.brand').on('click', function(el) {
        el.preventDefault();
        console.log("сортировка по брендам");
        var val = this.textContent;


        let elasticItems = document.querySelectorAll(".prod_cart");
        if (val != '') {
            elasticItems.forEach(function (elem) {
                var cont = elem.getAttribute('data-product-brand')

                console.log(cont + "полученные");
                console.log(val + "имеющиеся");

                if (val != cont) {
                    var bool = 0;
                } else {
                    var bool = 1;
                }

                if (windowInnerWidth < 1000) {
                    document.getElementById("left_block").style.left="-300%";
                }

                if (bool == 0) {
                    elem.classList.add('hide');
                }
                else {
                    elem.classList.remove('hide');
                }
            });
        }
        else {
            elasticItems.forEach(function (elem){
                elem.classList.remove('hide');
            });
        }
        
        var divElement = document.getElementById('nav'); 

        var allElements = divElement.querySelectorAll('.prod_cart');
        console.log(allElements)
        var hideElements = divElement.querySelectorAll('.hide');
        console.log(hideElements.length + "количество невидимых");
        console.log(allElements.length + "количество всех");
        
        innerdivs = divElement.querySelectorAll('.innerdiv');
        
        if (hideElements.length == allElements.length && innerdivs.length < 1)  {
            console.log("нет видимых эдементов")
            var spanElement = document.createElement('span');
            var divElementinner = document.createElement('div');
            spanElement.innerText = 'К сожалению, по вашему запросу не нашлось товаров, но мы готовы выслушать ваши предложения и постараться найти то, что вам нужно. Мы всегда открыты для обратной связи и готовы сделать все возможное, чтобы удовлетворить потребности наших клиентов.';
            divElementinner.id = 'not_search';
            divElementinner.classList.add('innerdiv');
            
            divElement.appendChild(divElementinner);
            divElementinner.appendChild(spanElement);
            
           
                        
            
      
            
        } else if (hideElements.length < allElements.length) {
            var divElementinner = document.getElementById('not_search');
            console.log("есть видимые")
            divElement.removeChild(divElementinner);
   
        }



    });



    $('.off_filter').on('click', function(el) {
        el.preventDefault();
        console.log("все категории");
        let elasticItems = document.querySelectorAll(".prod_cart");

        if (windowInnerWidth < 1000) {
            console.log("test");
            document.getElementById("left_block").style.left="-300%";
        }

        elasticItems.forEach(function (elem){
            elem.classList.remove('hide');
        });
        
        var divElement = document.getElementById('nav'); 

        var allElements = divElement.querySelectorAll('.prod_cart');
        console.log(allElements)
        var hideElements = divElement.querySelectorAll('.hide');
        console.log(hideElements.length + "количество невидимых");
        console.log(allElements.length + "количество всех");
        
        innerdivs = divElement.querySelectorAll('.innerdiv');
        
        if (hideElements.length == allElements.length && innerdivs.length < 1)  {
            console.log("нет видимых эдементов")
            var spanElement = document.createElement('span');
            var divElementinner = document.createElement('div');
            spanElement.innerText = 'К сожалению, по вашему запросу не нашлось товаров, но мы готовы выслушать ваши предложения и постараться найти то, что вам нужно. Мы всегда открыты для обратной связи и готовы сделать все возможное, чтобы удовлетворить потребности наших клиентов.';
            divElementinner.id = 'not_search';
            divElementinner.classList.add('innerdiv');
            
            divElement.appendChild(divElementinner);
            divElementinner.appendChild(spanElement);
            
           
                        
            
      
            
        } else if (hideElements.length < allElements.length) {
            var divElementinner = document.getElementById('not_search');
            console.log("есть видимые")
            divElement.removeChild(divElementinner);
   
        }
    });

    $('.off_filter').on('click', function(el) {
        el.preventDefault();
        console.log("все категории");
        let elasticItems = document.querySelectorAll(".prod_cart");

         if (windowInnerWidth < 1000) {
            console.log("test");
            document.getElementById("left_block").style.left="-300%";
         }


        elasticItems.forEach(function (elem){
            elem.classList.remove('hide');
        });
        
        var divElement = document.getElementById('nav'); 

        var allElements = divElement.querySelectorAll('.prod_cart');
        console.log(allElements)
        var hideElements = divElement.querySelectorAll('.hide');
        console.log(hideElements.length + "количество невидимых");
        console.log(allElements.length + "количество всех");
        
        innerdivs = divElement.querySelectorAll('.innerdiv');
        
        if (hideElements.length == allElements.length && innerdivs.length < 1)  {
            console.log("нет видимых эдементов")
            var spanElement = document.createElement('span');
            var divElementinner = document.createElement('div');
            spanElement.innerText = 'К сожалению, по вашему запросу не нашлось товаров, но мы готовы выслушать ваши предложения и постараться найти то, что вам нужно. Мы всегда открыты для обратной связи и готовы сделать все возможное, чтобы удовлетворить потребности наших клиентов.';
            divElementinner.id = 'not_search';
            divElementinner.classList.add('innerdiv');
            
            divElement.appendChild(divElementinner);
            divElementinner.appendChild(spanElement);
            
           
                        
            
      
            
        } else if (hideElements.length < allElements.length) {
            var divElementinner = document.getElementById('not_search');
            console.log("есть видимые")
            divElement.removeChild(divElementinner);
   
        }
    });


    $('#close').on('click', function(el) {
        el.preventDefault();
        document.getElementById("left_block").animate({left: "-300%"}, 500);
        sleep(480).then(() => { document.getElementById("left_block").style.left="-300%"; });
    });

    $('#filter_btn').on('click', function(el) {
        el.preventDefault();
        document.getElementById("left_block").animate({left: "0%"}, 500);
        sleep(480).then(() => { document.getElementById("left_block").style.left="0%"; });
    });
    
    
    
    
    
    
     inputElement.addEventListener('input', function() {
        
        
        
        var divElement = document.getElementById('nav'); 

        var allElements = divElement.querySelectorAll('.prod_cart');
        console.log(allElements)
        var hideElements = divElement.querySelectorAll('.hide');
        console.log(hideElements.length + "количество невидимых");
        console.log(allElements.length + "количество всех");
        
        innerdivs = divElement.querySelectorAll('.innerdiv');
        
        if (hideElements.length == allElements.length && innerdivs.length < 1)  {
            console.log("нет видимых эдементов")
            var spanElement = document.createElement('span');
            var divElementinner = document.createElement('div');
            spanElement.innerText = 'К сожалению, по вашему запросу не нашлось товаров, но мы готовы выслушать ваши предложения и постараться найти то, что вам нужно. Мы всегда открыты для обратной связи и готовы сделать все возможное, чтобы удовлетворить потребности наших клиентов.';
            divElementinner.id = 'not_search';
            divElementinner.classList.add('innerdiv');
            
            divElement.appendChild(divElementinner);
            divElementinner.appendChild(spanElement);
            
           
                        
            
      
            
        } else if (hideElements.length < allElements.length) {
            var divElementinner = document.getElementById('not_search');
            console.log("есть видимые")
            divElement.removeChild(divElementinner);
   
        }
        

    });
    





});