app.controller('categoryCtrl', function($scope, listCategory){
  listCategory.category().success(function(response){
        $scope.categories = response;
    });
  $scope.quantityCategory = [1,2,3,4];
});
