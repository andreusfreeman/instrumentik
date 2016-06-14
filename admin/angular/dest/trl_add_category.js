app.controller('addCategoryCtrl', function($scope, $http, listCategory, translitWords){
  listCategory.category().success(function(response){
        $scope.categories = response;
    });
    $scope.checkboxUndercat = true;

    $scope.addCategory = function() {
      // var test = encodeURIComponent(JSON.stringify($scope.nameCategory));
      // alert(test);
      // test = decodeURIComponent(test);
      // alert(test);
      // test = encodeURIComponent(test);
      // alert(test);
      // test = decodeURIComponent(test);
      // alert(test);
      // alert(translitWords.urlRusLat($scope.nameCategory));
      // if($scope.myCategory === 'undefined') {
      //   $scope.myCategory.id = 0;
      // };
      // $http({
      //     method: "post",
      //     url: "http://instrumentik.biz/admin/query/add_category.php",
      //     data: {
      //         meta_title: 'test',
      //         meta_keywords: 'test',
      //         meta_description: 'test',
      //         cat_title: 'test',
      //         cat_description: 'test',
      //         cat_eng: 'test',
      //         under_cat: 'test'
      //     },
      //     headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      // });
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
