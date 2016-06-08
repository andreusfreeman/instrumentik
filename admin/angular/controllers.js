app.controller('indexCtrl', function($scope){

});
app.controller('thingsCtrl', function($scope, $http){
  $http.get('http://127.0.0.1:8080/query/things.js?' + Math.random(100000000))
  .success(function(result){
    $scope.things = result;
  })
});
app.controller('addThingsCtrl', function($scope){

});
app.controller('editThingsCtrl', function($scope){
  console.log('editThingsCtrl');
});
app.controller('categoryCtrl', function($scope, $http){
  $http.get('http://127.0.0.1:8080/query/category.js?' + Math.random(100000000))
  .success(function(result){
    $scope.categories = result;
  })
});
app.controller('basketCtrl', function($scope){
  console.log('basket');
});

app.controller('listCategory', function($scope, $http){
  $http.get('http://127.0.0.1:8080/query/category.js?' + Math.random(100000000))
  .success(function(result){
    $scope.nameCategories = result;
  })
});
