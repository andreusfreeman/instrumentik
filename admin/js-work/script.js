$(function(){

  $( '.dropdown' ).hover(
          function(){
              $(this).children('.submenu').animate({
                backgroundColor: "#273a4c",
                color: "white",
                height: "toggle"
              }, 200);
          },
          function(){
              $(this).children('.submenu').animate({
                height: "toggle"
              }, 100);
          }
      );
});
