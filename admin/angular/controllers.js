app.controller('indexCtrl', function($scope){
  console.log('index');
});
app.controller('thingsCtrl', function($scope, $http){
  $scope.test = 'Hello world!';
  $http.get('http://127.0.0.1:8080/query/category.js?' + Math.random(100000000))
  .success(function(result){
    console.log(result[0].id);
  })
});
app.controller('addThingsCtrl', function($scope){
  console.log('addThingsCtrl');
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
