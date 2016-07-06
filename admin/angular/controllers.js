app.factory('listCategory', function($http){
    var obj = {};
    obj.category = function(){
        return $http.get('http://127.0.0.1:8080/query/category.js?' + Math.random(100000000));
        }
    return obj;
});
app.factory('translitWords', function() {
  return {
    urlRusLat: function(str) {
      str = str.toLowerCase();
      var cyr2latChars = new Array(
        ['а', 'a'], ['б', 'b'], ['в', 'v'], ['г', 'g'],
        ['д', 'd'],  ['е', 'e'], ['ё', 'yo'], ['ж', 'zh'], ['з', 'z'],
        ['и', 'i'], ['й', 'y'], ['к', 'k'], ['л', 'l'],
        ['м', 'm'],  ['н', 'n'], ['о', 'o'], ['п', 'p'],  ['р', 'r'],
        ['с', 's'], ['т', 't'], ['у', 'u'], ['ф', 'f'],
        ['х', 'h'],  ['ц', 'c'], ['ч', 'ch'],['ш', 'sh'], ['щ', 'shch'],
        ['ъ', ''],  ['ы', 'y'], ['ь', ''],  ['э', 'e'], ['ю', 'yu'], ['я', 'ya'],

        ['А', 'A'], ['Б', 'B'],  ['В', 'V'], ['Г', 'G'],
        ['Д', 'D'], ['Е', 'E'], ['Ё', 'YO'],  ['Ж', 'ZH'], ['З', 'Z'],
        ['И', 'I'], ['Й', 'Y'],  ['К', 'K'], ['Л', 'L'],
        ['М', 'M'], ['Н', 'N'], ['О', 'O'],  ['П', 'P'],  ['Р', 'R'],
        ['С', 'S'], ['Т', 'T'],  ['У', 'U'], ['Ф', 'F'],
        ['Х', 'H'], ['Ц', 'C'], ['Ч', 'CH'], ['Ш', 'SH'], ['Щ', 'SHCH'],
        ['Ъ', ''],  ['Ы', 'Y'],
        ['Ь', ''],
        ['Э', 'E'],
        ['Ю', 'YU'],
        ['Я', 'YA'],

        ['a', 'a'], ['b', 'b'], ['c', 'c'], ['d', 'd'], ['e', 'e'],
        ['f', 'f'], ['g', 'g'], ['h', 'h'], ['i', 'i'], ['j', 'j'],
        ['k', 'k'], ['l', 'l'], ['m', 'm'], ['n', 'n'], ['o', 'o'],
        ['p', 'p'], ['q', 'q'], ['r', 'r'], ['s', 's'], ['t', 't'],
        ['u', 'u'], ['v', 'v'], ['w', 'w'], ['x', 'x'], ['y', 'y'],
        ['z', 'z'],

        ['A', 'A'], ['B', 'B'], ['C', 'C'], ['D', 'D'],['E', 'E'],
        ['F', 'F'],['G', 'G'],['H', 'H'],['I', 'I'],['J', 'J'],['K', 'K'],
        ['L', 'L'], ['M', 'M'], ['N', 'N'], ['O', 'O'],['P', 'P'],
        ['Q', 'Q'],['R', 'R'],['S', 'S'],['T', 'T'],['U', 'U'],['V', 'V'],
        ['W', 'W'], ['X', 'X'], ['Y', 'Y'], ['Z', 'Z'],

        [' ', '-'],['0', '0'],['1', '1'],['2', '2'],['3', '3'],
        ['4', '4'],['5', '5'],['6', '6'],['7', '7'],['8', '8'],['9', '9'],
        ['-', '-'],[',', '-'],['/', '-']
      );
      var newStr = new String();
      for (var i = 0; i < str.length; i++) {
        ch = str.charAt(i);
        var newCh = '';
        for (var j = 0; j < cyr2latChars.length; j++) {
          if (ch == cyr2latChars[j][0]) {
            newCh = cyr2latChars[j][1];
          }
        }
        newStr += newCh;
      }
      return newStr.replace(/[_]{2,}/gim, '_').replace(/\n/gim, '');
    }
  }
});
app.factory('textOnImage', function() {
  return {
    textOn: function(name) {
        var textImage = name;
        for(var i=0;i<document.getElementsByClassName("class_url").length;i+=3){
        var x=document.getElementsByClassName("class_url")[i].getContext("2d");
        x.globalAlpha = 0.2;
              x.rotate(Math.PI /5);
        x.font = 'bold 45px Arial, sans-serif';
        x.fillText(textImage, 100, 50);

          var x=document.getElementsByClassName("class_url")[i+1].getContext("2d");
        x.globalAlpha = 0.2;
              x.rotate(Math.PI /5);
        x.font = 'bold 20px Arial, sans-serif';
        x.fillText(textImage, 35, 50);

          var x=document.getElementsByClassName("class_url")[i+2].getContext("2d");
        x.globalAlpha = 0.2;
              x.rotate(Math.PI /5);
        x.font = 'bold 10px Arial, sans-serif';
        x.fillText(textImage, 20, 0);
        }
      }
  }
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

app.controller('addThingsCtrl', function($scope, $http, listCategory, textOnImage){
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
    console.log(myCategoryItems);
    document.querySelector('.add__things__same-modal-back').style.display = 'block';
    document.querySelector('.add__things__same-modal-window-items').innerHTML = myCategoryItems;
  };
  $scope.hideModal = function() {
    $('.add__things__same-modal-back').fadeOut();
  }
  $scope.addThing = function() {
    console.log($scope.conditionThing);
  }
    // if($scope.myCategory === 'undefined') {
    //   $scope.myCategory.id = 0;
    // };
    // $http({
    //     method: "post",
    //     url: "http://instrumentik.biz/admin/query/add_thing.php",
    //     data: {
    //         meta_title: 'test',
    //         meta_keywords: 'test',
    //         meta_description: 'test',
    //         title: 'test',
    //         eng_title: 'test',
    //         cost: 'test',
    //         currency: 'test',
    //         ea: 'test',
    //         on_stock: 'test',
    //         category_id: 'test',
    //         text: 'test',
    //         delivery_term: 'test',
    //         prod: 'test',
    //         country_prod: 'test',
    //         length: 'test',
    //         length_ea: 'test',
    //         height: 'test',
    //         height_ea: 'test',
    //         width: 'test',
    //         width_ea: 'test',
    //         packaging_method: 'test',
    //         best_in_cat: 'test',
    //         own_condition: 'test',
    //         image1: 'test',
    //         add_block: 'test',
    //         add_block_id: 'test'
    //     },
    //     headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    // });
  // }


  $scope.addText = function() {
    textOnImage.textOn($scope.imageText);
  }
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
