
$(document).ready(function(em){

    Promise.all(Array.from(document.images).filter(img => !img.complete).map(img => new Promise(resolve => { img.onload = img.onerror = resolve; }))).then(() => {
        
        var images = document.getElementsByClassName("news_img");
                
        var max_height = 0
        for (let i = 0; i < images.length; i++) {
            var cont = images[i].offsetHeight
            if (cont > max_height) {
                var max_height = cont
            }
            
        }
        
    
        for (let el = 0; el < images.length; el++) {
            images[el].style.height = max_height + 'px';
        }
    
    });

});