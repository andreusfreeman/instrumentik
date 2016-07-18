app.controller('addCategoryCtrl', function($scope, $http, listCategory, translitWords){
  listCategory.category().success(function(response){
        $scope.categories = response;
    });
    $scope.checkboxUndercat = true;

    $scope.addCategory = function() {
      if ( $scope.nameCategory.length > 0 ) {
        if($scope.myCategory === 'undefined') {
          $scope.myCategory.id = 0;
        };
        $http({
          method: "post",
          url: "http://instrumentik.biz/admin/query/add_category.php",
          headers: { 'Content-Type': 'application/json' },
          data: {
            meta_title: encodeURIComponent($scope.metaTitleCategory),
            meta_keywords: encodeURIComponent($scope.metaKeywordsCategory),
            meta_description: encodeURIComponent($scope.metaDescriptionCategory),
            cat_title: encodeURIComponent($scope.nameCategory),
            cat_description: encodeURIComponent($scope.tinymceOptions),
            cat_eng: encodeURIComponent(translitWords.urlRusLat($scope.nameCategory)),
            under_cat: encodeURIComponent($scope.myCategory)
          }
        });
      }
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
