app.controller('basketCtrl', function($scope, $http){
  $http.get('http://127.0.0.1:8080/query/order.js?' + Math.random(100000000))
  .success(function(result){
    $scope.orders = result;
    $scope.quantityPagesOrder = [1,2,3,4,5];
  })
  $http.get('http://127.0.0.1:8080/query/callback.js?' + Math.random(100000000))
  .success(function(result){
    $scope.callbacks = result;
    $scope.quantityPagesCallback = [1,2];
  })

  $('.order__block__order').addClass('active');
  $('.order__block__menu li:first').css('background-color','#84bffa');
  $('.order__block__callback').hide();

  $('.order__block__menu a').on('click', function(){
    $('.order__block__menu li').css('background-color','#e9e9e9');
    $(this).parents('.order__block__menu li').css('background-color','#84bffa');
    var divName = $(this).attr('href');
    $('.order__block__order, .order__block__callback').hide();
    $('.'+divName).show();
    return false;
  })
});
