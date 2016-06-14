var app = angular.module('app', ['ngRoute', 'ui.tinymce']);

app.config(function($routeProvider) {
  $routeProvider
  .when('/',{
  })
  .when('/things',{
    templateUrl: 'things.html',
    controller: 'thingsCtrl'
  })
  .when('/add_things',{
    templateUrl: 'add_things.html',
    controller: 'addThingsCtrl'
  })
  .when('/edit_things/:thingID',{
    templateUrl: 'edit_things.html',
    controller: 'editThingstCtrl'
  })
  .when('/category',{
    templateUrl: 'category.html',
    controller: 'categoryCtrl'
  })
  .when('/add_category',{
    templateUrl: 'add_category.html',
    controller: 'addCategoryCtrl'
  })
  .when('/edit_category/:categoryID',{
    templateUrl: 'edit_category.html',
    controller: 'editCategoryCtrl'
  })
  .when('/basket',{
    templateUrl: 'basket.html',
    controller: 'basketCtrl'
  })
  .when('/delivery',{
    templateUrl: 'delivery.html',
    controller: 'deliveryCtrl'
  })
  .when('/contacts',{
    templateUrl: 'contacts.html',
    controller: 'contactsCtrl'
  })
  .when('/settings',{
    templateUrl: 'settings.html',
    controller: 'settingCtrl'
  })
  .otherwise({
    templateUrl: 'index.html',
    controller: 'indexCtrl'
  })
  // $locationProvider.html5Mode(true);
});
