
var app = angular.module('ncarbApp', []);
app.controller('ncarbCtrl', function($scope, $http) {
    $http.get("https://my.ncarb.org/Public/api/certification/search?pageSize=20&page=0&lastName=&firstName=&city=&stateCode=&countryCode=&orderBy=name")
    .success(function (response) {$scope.values = response.data;});
});