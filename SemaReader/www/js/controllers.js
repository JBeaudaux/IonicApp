angular.module('starter.controllers', ['starter.services'])


.controller('ConnectCtrl', function($scope, LoginService, $ionicPopup, $state)
{
    $scope.data = {};
 
    $scope.login = function() {
        LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
            $state.go('tab.dash');
        }).error(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please check your credentials!'
            });
        });
    }
})


.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('AboutCtrl', function($scope)
{
  //Nothing to do right now
})

.controller('InterCtrl', function($scope)
{
  //Nothing to do right now
})

.controller('SearchCtrl', function($scope, $http, $state, $ionicPopup)
{
  $scope.search = function()
  {
    $searchURL = "http://172.16.16.204:8080/SemaServer/public/v1/pdq/vid/"

    //Establish connection to SEMA server
    $http.get($searchURL)
    .success(function(data)
    {
      $state.go('tab.inter');
    })
    .error(function(data)
    {
      var alertPopup = $ionicPopup.alert(
      {
        title: 'No result found',
        template: 'Please check your criteria!'
      });
    });
  }
})


.controller("IntroCtrl", function($scope, $http, $state, $ionicPopup)//, authService)
{
  //authService.ClearCredentials();
  $scope.data = {};

  $scope.login = function()
  {
    $scope.data.result = "http://172.16.16.204:8080/SemaServer/public/v1/" + $scope.data.username
    
    //Establish connection to SEMA server
    //$scope.data.username, $scope.data.password
    $http.get("http://172.16.16.204:8080/SemaServer/public/v1/" + $scope.data.username)
    //$http.get("http://172.16.16.204:8080/SemaServer/public/v1/")
    .success(function()
    {
      $state.go('tab.search');
    })
    .error(function()
    {
      var alertPopup = $ionicPopup.alert(
      {
        title: 'Connection failed',
        template: 'Please check your credentials!'
      });
    });
  }
});
