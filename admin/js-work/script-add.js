$(function(){
  $('.add__things__common').addClass('active');
  $('.add__things__menu li:first').css('background-color','#84bffa')
  $('.add__things__add, .add__things__image, .add__things__same, .add__things__meta').hide();

  $('.add__things__menu a').on('click', function(){
    $('.add__things__menu li').css('background-color','#e9e9e9');
    $(this).parents('.add__things__menu li').css('background-color','#84bffa');
    var divName = $(this).attr('href');
    $('.add__things__common, .add__things__add, .add__things__image, .add__things__same, .add__things__meta').hide();
    $('.'+divName).show();
    return false;
  })
});
