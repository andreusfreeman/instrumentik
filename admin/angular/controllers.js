app.factory('listCategory', function($http){
    var obj = {};
    obj.category = function(){
        return $http.get('http://127.0.0.1:8080/query/category.js?' + Math.random(100000000));
        }
    return obj;
});
app.directive('textareaBlock', function() {
  return {
    restrict: 'C',
    link: function(scope){
      scope.tinymceModel = 'Initial content';
      scope.tinymceOptions = {
          selector: '#mytextarea',
           height: 250,
          theme: 'modern',
          plugins: [
            'advlist autolink lists link image charmap print preview hr anchor pagebreak',
            'searchreplace wordcount visualblocks visualchars code fullscreen',
            'insertdatetime media nonbreaking save table contextmenu directionality',
            'emoticons template paste textcolor colorpicker textpattern imagetools'
          ],
          toolbar1: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
          toolbar2: 'print preview media | forecolor backcolor emoticons',
          image_advtab: true,
          templates: [
            { title: 'Test template 1', content: 'Test 1' },
            { title: 'Test template 2', content: 'Test 2' }
          ],
          content_css: [
            '//fast.fonts.net/cssapi/e6dc9b99-64fe-4292-ad98-6974f93cd2a2.css',
            '//www.tinymce.com/css/codepen.min.css'
          ]
        };
    }
  }
});

app.controller('indexCtrl', function($scope){

});

app.controller('thingsCtrl', function($scope, $http, listCategory){
  $http.get('http://127.0.0.1:8080/query/things.js?' + Math.random(100000000))
  .success(function(result){
    $scope.things = result;
    $scope.quantityThings = [1,2,3,4,5];
  })
  listCategory.category().success(function(response){
        $scope.categories = response;
    });
});

app.controller('addThingsCtrl', function($scope, listCategory){
  listCategory.category().success(function(response){
        $scope.categories = response;
    });
});
app.controller('editThingsCtrl', function($scope){
  console.log('editThingsCtrl');
});
app.controller('categoryCtrl', function($scope, listCategory){
  listCategory.category().success(function(response){
        $scope.categories = response;
    });
  $scope.quantityCategory = [1,2,3,4];
});
app.controller('addCategoryCtrl', function($scope, listCategory){
  listCategory.category().success(function(response){
        $scope.categories = response;
    });

    $scope.test = function() {
      alert($scope.tinymceModel);
    }

    $('.add__category__common').addClass('active');
    $('.add__category__menu li:first').css('background-color','#84bffa');
    $('.add__category__meta').hide();

    $('.add__category__menu a').on('click', function(){
      $('.add__category__menu li').css('background-color','#e9e9e9');
      $(this).parents('.add__category__menu li').css('background-color','#84bffa');
      var divName = $(this).attr('href');
      $('.add__category__common, .add__category__meta').hide();
      $('.'+divName).show();
      return false;
    })
});
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


// test tinymce

// app.controller('TinyMceController', function($scope) {
//   $scope.tinymceModel = 'Initial content';
//
//   $scope.getContent = function() {
//     console.log('Editor content:', $scope.tinymceModel);
//   };
//   //
//   // $scope.setContent = function() {
//   //   $scope.tinymceModel = 'Time: ' + (new Date());
//   // };
//
//   $scope.tinymceOptions = {
//     selector: '#mytextarea',
//      height: 250,
//     theme: 'modern',
//     plugins: [
//       'advlist autolink lists link image charmap print preview hr anchor pagebreak',
//       'searchreplace wordcount visualblocks visualchars code fullscreen',
//       'insertdatetime media nonbreaking save table contextmenu directionality',
//       'emoticons template paste textcolor colorpicker textpattern imagetools'
//     ],
//     toolbar1: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
//     toolbar2: 'print preview media | forecolor backcolor emoticons',
//     image_advtab: true,
//     templates: [
//       { title: 'Test template 1', content: 'Test 1' },
//       { title: 'Test template 2', content: 'Test 2' }
//     ],
//     content_css: [
//       '//fast.fonts.net/cssapi/e6dc9b99-64fe-4292-ad98-6974f93cd2a2.css',
//       '//www.tinymce.com/css/codepen.min.css'
//     ]
//   };
// });
