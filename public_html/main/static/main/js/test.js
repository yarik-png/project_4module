$(document).ready(function(){
    $( "#submit_btn" ).on( "click", function(el) {
      el.preventDefault();
      console.log( "Handler for `click` called." );
    } );
} );