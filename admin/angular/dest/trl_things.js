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
