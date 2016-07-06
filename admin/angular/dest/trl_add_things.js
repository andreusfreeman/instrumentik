app.controller('addThingsCtrl', function($scope, $http, listCategory, translitWords, textOnImage){
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

  $scope.addCondition = function(){
    var test2 = document.getElementById("add_own_condition");
    var newEl = document.createElement("div");
    newEl.className = "add_own_condition";
    test2.appendChild(newEl).innerHTML = "<div style='float:left'><input type='text' id='more_condition' placeholder='Название'> <input type='text' id='more_condition' placeholder='Значение+ед.измерения'></div><div style='float:left;margin-top:10px'><a href='#' onclick='deleteConditionPosition(this.parentNode);return false'><img src='http://instrumentik.biz/image/close_basket.png' width='25px' style='cursor:pointer' title='Удалить'/></a></div>";
 }
  $scope.imageText = "instrumentik.biz";
  $scope.addText = function() {
    textOnImage.textOn($scope.imageText);
  }
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
