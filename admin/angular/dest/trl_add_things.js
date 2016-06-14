app.controller('addThingsCtrl', function($scope, $http, listCategory, translitWords){
  listCategory.category().success(function(response){
        $scope.categories = response;
  });
  $scope.currencyThing = "UAH";
  $scope.onStock = {
    status: "В наличии"
  }
  // $scope.getContent = function() {
  //     console.log('Editor content:', $scope.tinymceModel);
  //   };
  $scope.addThing = function() {
    if($scope.myCategory === 'undefined') {
      $scope.myCategory.id = 0;
    };
    // $http({
    //     method: "post",
    //     url: "http://instrumentik.biz/admin/query/add_thing.php",
    //     data: {
    //         meta_title: $scope.metaTitleThing,
    //         meta_keywords:  $scope.metaKeywordsThing,
    //         meta_description:  $scope.metaDescriptionThing,
    //         title:  $scope.nameThing,
    //         eng_title:  translitWords.urlRusLat($scope.nameCategory),
    //         cost:  $scope.costThing,
    //         currency:  $scope.currencyThing,
    //         ea:  $scope.eaThing,
    //         on_stock:  $scope.onStock.status,
    //         category_id:  $scope.myThing.id,
    //         text:  $scope.tinymceModel,
    //         delivery_term:  $scope.termDeliveryThing,
    //         prod:  $scope.factoryThing,
    //         country_prod:  $scope.countryThing,
    //         packaging_method:  $scope.packageThing,

    //         own_condition:  $scope.nameThing,

    //         image:  $scope.nameThing,

    //         add_block:  $scope.nameThing,

    //         add_block_id:  $scope.nameThing
    //     },
    //     headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    // });
  }
});
