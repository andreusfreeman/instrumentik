app.controller('addThingsCtrl', function($scope, $http, listCategory, textOnImage, translitWords){
  listCategory.category().success(function(response){
        $scope.categories = response;
  });
  $scope.imageText = "instrumentik.biz";

  $scope.addCondition = function(){
    var test2 = document.querySelector(".add__things__add__own-condition-block");
    var newEl = document.createElement("div");
    newEl.className = "add__things__add__own-condition";
    newEl.setAttribute("ng-model", "conditionThing");
    test2.appendChild(newEl).innerHTML = "<input type='text' class='add__things__add-property' placeholder='Название'> <input type='text' class='add__things__add-value' placeholder='Значение+ед.измерения'><div><img onclick='deleteConditionPosition(this.parentNode);return false' src='http://instrumentik.biz/image/close_basket.png' width='25px' style='cursor:pointer' title='Удалить'></div>";
 };
  $scope.currencyThing = "UAH";
  console.log($scope.conditionThing);

  $scope.onStock = {
    status: "В наличии"
  }

  $scope.downloadAddingThing = function(myCategoryItems){
    document.querySelector('.add__things__same-modal-back').style.display = 'block';
    $http.get('http://127.0.0.1:8080/query/things.js?' + Math.random(100000000))
    .success(function(result){
      $scope.things = result;
    })
  };
  $scope.addSameThings = function() {
    var checkThings = document.querySelectorAll('.add__things__same-modal-window-items input');
    var sameThings = document.querySelectorAll('.add__things__same-modal-window-items tr');
    var arrayThings = $scope.things;
      for(var i = 0; i < checkThings.length; i++){
        if ( checkThings[i].checked ) {
        for ( var x in arrayThings) {
          if (parseInt(sameThings[i].children[0].innerHTML) == arrayThings[x].id) {
            var sameThingBlock = document.querySelector('.add__things__same-list tbody');
            var newBlock = document.createElement('tr');
            sameThingBlock.appendChild(newBlock).innerHTML = "<td style='display:none'>" + arrayThings[x].id + "</td><td>" + arrayThings[x].id + "</td><td>" + arrayThings[x].title + "</td><td>" + arrayThings[x].category + "</td><td>" + arrayThings[x].cost + " " + arrayThings[x].currency + "</td><td><img onclick='deleteAdditionPosition(this.parentNode);return false' src='http://instrumentik.biz/image/close_basket.png' width='25px' style='cursor:pointer;' title='Удалить'></td>";
            break;
            }
          };
        };
    }
    $scope.hideModal();
  };
  $scope.hideModal = function() {
    $('.add__things__same-modal-back').fadeOut();
  }

  $scope.addThing = function() {
    if ( $scope.nameThing.length > 0 ) {
      var arrayAddBlock = [];
      var sameThings = document.querySelectorAll('.add__things__same-list tr');
      for ( var i = 1; i < sameThings.length; i++) {
        arrayAddBlock.push(parseInt(sameThings[i].children[0].innerHTML));
      }

      var arrayNameImage = [];
      var imageThings = document.querySelectorAll('.add__things__image-sortable canvas');
      for ( var i = 0; i < imageThings.length; i++) {
        arrayNameImage.push([imageThings[i].id, imageThings[i + 1].id, imageThings[i + 2].id]);
        i = i + 2;
      }

      var arrayConditions = [];
      var conditionsThings = document.querySelectorAll('.add__things__add__own-condition');
      for ( var i = 0; i < conditionsThings.length; i++) {
        if ( conditionsThings[i].children[0].value.length > 0 ) {
          arrayConditions.push([conditionsThings[i].children[0].value, conditionsThings[i].children[1].value]);
        }
      }
      $http({
        method: "post",
        url: "http://instrumentik.biz/admin/query/add_thing.php",
        data: {
          meta_title: encodeURIComponent(JSON.stringify($scope.metaTitleThing)),
          meta_keywords: encodeURIComponent(JSON.stringify($scope.metaKeywordsThing)),
          meta_description: encodeURIComponent(JSON.stringify($scope.metaDescriptionThing)),
          title: encodeURIComponent(JSON.stringify($scope.nameThing)),
          eng_title: encodeURIComponent(JSON.stringify(translitWords.urlRusLat($scope.nameThing))),
          cost: encodeURIComponent(JSON.stringify($scope.costThing)),
          currency: encodeURIComponent(JSON.stringify($scope.currencyThing)),
          ea: encodeURIComponent(JSON.stringify($scope.eaThing)),
          on_stock: encodeURIComponent(JSON.stringify($scope.onStock.status)),
          category_id: encodeURIComponent(JSON.stringify($scope.myThing)),
          text: encodeURIComponent(JSON.stringify($scope.tinymceModel)),
          delivery_term: encodeURIComponent(JSON.stringify($scope.termDeliveryThing)),
          prod: encodeURIComponent(JSON.stringify($scope.factoryThing)),
          country_prod: encodeURIComponent(JSON.stringify($scope.countryThing)),
          packaging_method: encodeURIComponent(JSON.stringify($scope.packageThing)),
          best_in_cat: 'test',
          own_condition: encodeURIComponent(JSON.stringify(arrayConditions)),
          image: encodeURIComponent(JSON.stringify(arrayNameImage)),
          add_block: 'test',
          add_block_id: encodeURIComponent(JSON.stringify(arrayAddBlock))
        },
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      });
    }
  }
    // if($scope.myCategory === 'undefined') {
    //   $scope.myCategory.id = 0;
    // };
  //


  $scope.addText = function() {
    textOnImage.textOn($scope.imageText);
  }
});
